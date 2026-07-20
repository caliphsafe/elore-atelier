import type { CartItem, Product } from "./types";

export const mockProducts: Product[] = [
  {
    id: "1",
    handle: "signature-fedora-noir",
    title: "Signature Fedora Noir",
    description:
      "A sculpted piece defined by refined proportion, tonal trim, and a quietly bold silhouette.",
    price: "$850",
    image: "/images/products/signature-fedora-noir-1.jpg",
    category: "Signature Collection"
  },
  {
    id: "2",
    handle: "atelier-brim-olive",
    title: "Atelier Brim Olive",
    description:
      "A grounded, expressive form with deep character and an elegant sense of restraint.",
    price: "$920",
    image: "/images/products/atelier-brim-olive-1.jpg",
    category: "Signature Collection"
  },
  {
    id: "3",
    handle: "desert-crown-sand",
    title: "Desert Crown Sand",
    description:
      "Soft tonal warmth, structured lines, and a silhouette shaped to feel timeless.",
    price: "$790",
    image: "/images/products/desert-crown-sand-1.jpg",
    category: "Summer Collection"
  },
  {
    id: "4",
    handle: "midnight-brim-classic",
    title: "Midnight Brim Classic",
    description:
      "A darker, more formal expression with clean edge work and a tailored finish.",
    price: "$980",
    image: "/images/products/midnight-brim-classic-1.jpg",
    category: "Signature Collection"
  },
  {
    id: "5",
    handle: "heritage-band-felt",
    title: "Heritage Band Felt",
    description:
      "A piece led by texture and detail, balancing softness with visual authority.",
    price: "$875",
    image: "/images/products/heritage-band-felt-1.jpg",
    category: "Signature Collection"
  },
  {
    id: "6",
    handle: "custom-atelier-form",
    title: "Custom Atelier Form",
    description:
      "A custom design presentation piece shaped around material, proportion, and personal story.",
    price: "$1,250",
    image: "/images/products/custom-atelier-form-1.jpg",
    category: "Custom Design"
  },
  {
    id: "7",
    handle: "soft-brim-tobacco",
    title: "Soft Brim Tobacco",
    description:
      "Warm, understated, and shaped with a natural softness that gives it effortless presence.",
    price: "$810",
    image: "/images/products/soft-brim-tobacco-1.jpg",
    category: "Summer Collection"
  },
  {
    id: "8",
    handle: "studio-crown-ivory",
    title: "Studio Crown Ivory",
    description:
      "Minimal and polished, with subtle contrast and a quiet, refined finish.",
    price: "$895",
    image: "/images/products/studio-crown-ivory-1.jpg",
    category: "Signature Collection"
  }
];

export const mockCart: CartItem[] = [
  {
    id: "cart-1",
    productTitle: "Signature Fedora Noir",
    price: "$850",
    quantity: 1
  },
  {
    id: "cart-2",
    productTitle: "Soft Brim Tobacco",
    price: "$810",
    quantity: 1
  }
];

export function getMockProductByHandle(handle: string) {
  return mockProducts.find((product) => product.handle === handle);
}

export function getRelatedMockProducts(handle: string) {
  return mockProducts.filter((product) => product.handle !== handle).slice(0, 4);
}
