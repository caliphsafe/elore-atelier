import type { CartItem, Product } from "./types";

export const mockProducts: Product[] = [
  {
    id: "1",
    handle: "signature-fedora-noir",
    title: "Signature Fedora Noir",
    description:
      "A sculpted statement piece defined by refined proportion, tonal trim, and a quietly bold silhouette.",
    price: "$850",
    image: "/placeholder.jpg",
    category: "Signature Forms"
  },
  {
    id: "2",
    handle: "atelier-brim-olive",
    title: "Atelier Brim Olive",
    description:
      "A grounded, expressive form with deep character and an elegant sense of restraint.",
    price: "$920",
    image: "/placeholder.jpg",
    category: "Studio Editions"
  },
  {
    id: "3",
    handle: "desert-crown-sand",
    title: "Desert Crown Sand",
    description:
      "Soft tonal warmth, structured lines, and a silhouette shaped to feel timeless.",
    price: "$790",
    image: "/placeholder.jpg",
    category: "Signature Forms"
  },
  {
    id: "4",
    handle: "midnight-brim-classic",
    title: "Midnight Brim Classic",
    description:
      "A darker, more formal expression with clean edge work and a tailored finish.",
    price: "$980",
    image: "/placeholder.jpg",
    category: "Studio Editions"
  },
  {
    id: "5",
    handle: "heritage-band-felt",
    title: "Heritage Band Felt",
    description:
      "A piece led by texture and detail, balancing softness with visual authority.",
    price: "$875",
    image: "/placeholder.jpg",
    category: "Signature Forms"
  },
  {
    id: "6",
    handle: "custom-atelier-form",
    title: "Custom Atelier Form",
    description:
      "A bespoke-inspired presentation piece designed to preview the one-of-one commission journey.",
    price: "$1,250",
    image: "/placeholder.jpg",
    category: "Custom Commissions"
  },
  {
    id: "7",
    handle: "soft-brim-tobacco",
    title: "Soft Brim Tobacco",
    description:
      "Warm, understated, and shaped with a natural softness that gives it effortless presence.",
    price: "$810",
    image: "/placeholder.jpg",
    category: "Signature Forms"
  },
  {
    id: "8",
    handle: "studio-crown-ivory",
    title: "Studio Crown Ivory",
    description:
      "Minimal and polished, with subtle contrast and a quietly luxurious finish.",
    price: "$895",
    image: "/placeholder.jpg",
    category: "Studio Editions"
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
