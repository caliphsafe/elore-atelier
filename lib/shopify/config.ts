export const shopifyConfig = {
  domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "",
  storefrontToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || ""
};

export const hasShopifyConfig =
  Boolean(shopifyConfig.domain) && Boolean(shopifyConfig.storefrontToken);
