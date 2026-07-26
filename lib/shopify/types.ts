export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductCollection = {
  id?: string;
  handle: string;
  title: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: string;
  image: string;
  images?: ProductImage[];
  category?: string;
  collectionHandle?: string;
  collections?: ProductCollection[];
  variantId?: string;
  availableForSale?: boolean;
};

export type CartItem = {
  id: string;
  productTitle: string;
  price: string;
  quantity: number;
};
