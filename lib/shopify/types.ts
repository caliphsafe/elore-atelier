export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category?: string;
};

export type CartItem = {
  id: string;
  productTitle: string;
  price: string;
  quantity: number;
};
