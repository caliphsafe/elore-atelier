import { mockProducts } from "./mock-data";
import type { Product, ProductCollection, ProductImage } from "./types";

const SHOPIFY_API_VERSION = "2026-01";

const PRODUCT_FIELDS = `#graphql
  fragment ProductCardFields on Product {
    id
    handle
    title
    description
    productType
    tags
    availableForSale
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    collections(first: 8) {
      edges {
        node {
          id
          handle
          title
        }
      }
    }
    images(first: 8) {
      edges {
        node {
          url
          altText
        }
      }
    }
    variants(first: 20) {
      edges {
        node {
          id
          availableForSale
        }
      }
    }
  }
`;

const PRODUCTS_QUERY = `#graphql
  ${PRODUCT_FIELDS}
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          ...ProductCardFields
        }
      }
    }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = `#graphql
  ${PRODUCT_FIELDS}
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...ProductCardFields
    }
  }
`;

const CART_CREATE_MUTATION = `#graphql
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

type ShopifyMoney = {
  amount: string;
  currencyCode: string;
};

type ShopifyCollectionNode = {
  id: string;
  handle: string;
  title: string;
};

type ShopifyProductNode = {
  id: string;
  handle: string;
  title: string;
  description: string;
  productType?: string | null;
  tags?: string[];
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: ShopifyMoney;
  };
  collections?: {
    edges: Array<{
      node: ShopifyCollectionNode;
    }>;
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText?: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        availableForSale: boolean;
      };
    }>;
  };
};

type ShopifyProductsResponse = {
  products: {
    edges: Array<{ node: ShopifyProductNode }>;
  };
};

type ShopifyProductResponse = {
  product: ShopifyProductNode | null;
};

type CheckoutLine = {
  variantId?: string;
  quantity: number;
};

function normalizeShopDomain(domain: string) {
  return domain
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .trim();
}

function getShopifyConfig() {
  const domain =
    process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
  const token =
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ||
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !token) {
    return null;
  }

  return {
    domain: normalizeShopDomain(domain),
    token
  };
}

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>) {
  const config = getShopifyConfig();

  if (!config) {
    throw new Error("Shopify is not configured.");
  }

  const response = await fetch(
    `https://${config.domain}/api/${SHOPIFY_API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": config.token
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 }
    }
  );

  const json = await response.json();

  if (!response.ok || json.errors) {
    throw new Error(
      json.errors?.[0]?.message || "Unable to connect to Shopify Storefront API."
    );
  }

  return json.data as T;
}

function formatMoney(money: ShopifyMoney) {
  const amount = Number(money.amount);
  const wholeNumber = Number.isInteger(amount);

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: money.currencyCode,
    minimumFractionDigits: wholeNumber ? 0 : 2,
    maximumFractionDigits: 2
  }).format(amount);
}

function mapShopifyProduct(product: ShopifyProductNode): Product {
  const images: ProductImage[] = product.images.edges.map(({ node }, index) => ({
    src: node.url,
    alt: node.altText || `${product.title} image ${index + 1}`
  }));

  const collections: ProductCollection[] =
    product.collections?.edges.map(({ node }) => ({
      id: node.id,
      handle: node.handle,
      title: node.title
    })) ?? [];

  const primaryCollection = collections[0];
  const availableVariant = product.variants.edges.find(
    ({ node }) => node.availableForSale
  )?.node;
  const firstVariant = product.variants.edges[0]?.node;
  const selectedVariant = availableVariant || firstVariant;

  return {
    id: product.id,
    handle: product.handle,
    title: product.title,
    description:
      product.description ||
      "A handcrafted Elöre piece shaped through material, proportion, and intentional detail.",
    price: formatMoney(product.priceRange.minVariantPrice),
    image: images[0]?.src || `/images/products/${product.handle}-1.jpg`,
    images: images.length ? images : undefined,
    category: primaryCollection?.title || product.productType || product.tags?.[0] || "Collection",
    collectionHandle: primaryCollection?.handle,
    collections: collections.length ? collections : undefined,
    variantId: selectedVariant?.id,
    availableForSale: product.availableForSale && Boolean(selectedVariant?.availableForSale)
  };
}

export async function getProducts() {
  if (!getShopifyConfig()) {
    return mockProducts;
  }

  try {
    const data = await shopifyFetch<ShopifyProductsResponse>(PRODUCTS_QUERY, {
      first: 100
    });

    return data.products.edges.map(({ node }) => mapShopifyProduct(node));
  } catch (error) {
    console.error(error);
    return mockProducts;
  }
}

export async function getProductByHandle(handle: string) {
  if (!getShopifyConfig()) {
    return mockProducts.find((product) => product.handle === handle);
  }

  try {
    const data = await shopifyFetch<ShopifyProductResponse>(
      PRODUCT_BY_HANDLE_QUERY,
      { handle }
    );

    return data.product ? mapShopifyProduct(data.product) : undefined;
  } catch (error) {
    console.error(error);
    return mockProducts.find((product) => product.handle === handle);
  }
}

export async function getRelatedProducts(handle: string, category?: string) {
  const products = await getProducts();
  const relatedByCategory = products.filter((product) => {
    const sameCollection = product.category === category;
    return product.handle !== handle && sameCollection;
  });

  if (relatedByCategory.length >= 4) {
    return relatedByCategory.slice(0, 4);
  }

  return products.filter((product) => product.handle !== handle).slice(0, 4);
}

export async function createCheckout(lines: CheckoutLine[]) {
  const cartLines = lines
    .filter((line) => Boolean(line.variantId) && line.quantity > 0)
    .map((line) => ({
      merchandiseId: line.variantId,
      quantity: line.quantity
    }));

  if (!cartLines.length) {
    throw new Error("No Shopify product variants were found in the cart.");
  }

  const data = await shopifyFetch<{
    cartCreate: {
      cart: { id: string; checkoutUrl: string } | null;
      userErrors: Array<{ message: string }>;
    };
  }>(CART_CREATE_MUTATION, {
    input: {
      lines: cartLines
    }
  });

  const error = data.cartCreate.userErrors[0];

  if (error) {
    throw new Error(error.message);
  }

  if (!data.cartCreate.cart?.checkoutUrl) {
    throw new Error("Shopify did not return a checkout URL.");
  }

  return data.cartCreate.cart;
}
