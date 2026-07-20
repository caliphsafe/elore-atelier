import type { CartItem, Product } from "./types";

export const mockProducts: Product[] = [
  {
    id: "1",
    handle: "signature-fedora-noir",
    title: "Signature Fedora Noir",
    description:
      "A handcrafted piece defined by refined proportion, tonal trim, and a sculptural silhouette.",
    price: "$850",
    image: "/images/products/signature-fedora-noir-1.jpg",
    category: "Signature Collection"
  },
  {
    id: "2",
    handle: "atelier-brim-olive",
    title: "Atelier Brim Olive",
    description:
      "A grounded form shaped through material, balance, and quiet detail.",
    price: "$920",
    image: "/images/products/atelier-brim-olive-1.jpg",
    category: "Summer Collection"
  },
  {
    id: "3",
    handle: "desert-crown-sand",
    title: "Desert Crown Sand",
    description:
      "Soft tonal warmth, structured lines, and a silhouette shaped by hand.",
    price: "$790",
    image: "/images/products/desert-crown-sand-1.jpg",
    category: "Summer Collection"
  },
  {
    id: "4",
    handle: "midnight-brim-classic",
    title: "Midnight Brim Classic",
    description:
      "A darker expression with clean edge work and a composed finish.",
    price: "$980",
    image: "/images/products/midnight-brim-classic-1.jpg",
    category: "Signature Collection"
  },
  {
    id: "5",
    handle: "heritage-band-felt",
    title: "Heritage Band Felt",
    description:
      "A piece led by felt, trim, and the natural character of the material.",
    price: "$875",
    image: "/images/products/heritage-band-felt-1.jpg",
    category: "Signature Collection"
  },
  {
    id: "6",
    handle: "custom-atelier-form",
    title: "Custom Atelier Form",
    description:
      "A one-of-one direction shaped around material, story, and personal expression.",
    price: "$1,250",
    image: "/images/products/custom-atelier-form-1.jpg",
    category: "Custom Design"
  },
  {
    id: "7",
    handle: "soft-brim-tobacco",
    title: "Soft Brim Tobacco",
    description:
      "Warm, understated, and shaped with natural softness and presence.",
    price: "$810",
    image: "/images/products/soft-brim-tobacco-1.jpg",
    category: "Summer Collection"
  },
  {
    id: "8",
    handle: "studio-crown-ivory",
    title: "Studio Crown Ivory",
    description:
      "A polished form with subtle contrast and hand-finished detail.",
    price: "$895",
    image: "/images/products/studio-crown-ivory-1.jpg",
    category: "Custom Design"
  }
];

export const mockCart: CartItem[] = [];

export function getMockProductByHandle(handle: string) {
  return mockProducts.find((product) => product.handle === handle);
}

export function getRelatedMockProducts(handle: string) {
  return mockProducts.filter((product) => product.handle !== handle).slice(0, 4);
}
