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
    category: "Signature Blocks"
  },
  {
    id: "2",
    handle: "atelier-brim-olive",
    title: "Atelier Brim Olive",
    description:
      "A grounded, expressive form with deep character and a composed sense of restraint.",
    price: "$920",
    image: "/placeholder.jpg",
    category: "Studio Pieces"
  },
  {
    id: "3",
    handle: "desert-crown-sand",
    title: "Desert Crown Sand",
    description:
      "Soft tonal warmth, structured lines, and a silhouette shaped to feel enduring.",
    price: "$790",
    image: "/placeholder.jpg",
    category: "Signature Blocks"
  },
  {
    id: "4",
    handle: "midnight-brim-classic",
    title: "Midnight Brim Classic",
    description:
      "A darker, more formal expression with clean edge work and a tailored finish.",
    price: "$980",
    image: "/placeholder.jpg",
    category: "Studio Pieces"
  },
  {
    id: "5",
    handle: "heritage-band-felt",
    title: "Heritage Band Felt",
    description:
      "A piece led by texture and detail, balancing softness with visual authority.",
    price: "$875",
    image: "/placeholder.jpg",
    category: "Signature Blocks"
  },
  {
    id: "6",
    handle: "custom-atelier-form",
    title: "Custom Atelier Form",
    description:
      "A commission-minded piece designed to preview the one-of-one making journey.",
    price: "$1,250",
    image: "/placeholder.jpg",
    category: "Custom Work"
  },
  {
    id: "7",
    handle: "soft-brim-tobacco",
    title: "Soft Brim Tobacco",
    description:
      "Warm, understated, and shaped with a natural softness that gives it presence.",
    price: "$810",
    image: "/placeholder.jpg",
    category: "Signature Blocks"
  },
  {
    id: "8",
    handle: "studio-crown-ivory",
    title: "Studio Crown Ivory",
    description:
      "Minimal and polished, with subtle contrast and a refined finishing language.",
    price: "$895",
    image: "/placeholder.jpg",
    category: "Studio Pieces"
  }
];

export const mockCart: CartItem[] = [];

export function getMockProductByHandle(handle: string) {
  return mockProducts.find((product) => product.handle === handle);
}

export function getRelatedMockProducts(handle: string) {
  return mockProducts.filter((product) => product.handle !== handle).slice(0, 4);
}
