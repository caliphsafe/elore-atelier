"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { mockProducts } from "@/lib/shopify/mock-data";

export type CartLine = {
  id: string;
  handle: string;
  productTitle: string;
  price: string;
  quantity: number;
};

type CartContextValue = {
  items: CartLine[];
  totalItems: number;
  estimatedTotal: string;
  addItem: (handle: string) => void;
  removeItem: (handle: string) => void;
  decrementItem: (handle: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "elore_cart";

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setItems(parsed);
      }
    } catch {
      // ignore invalid stored data
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(handle: string) {
    const product = mockProducts.find((p) => p.handle === handle);
    if (!product) return;

    setItems((current) => {
      const existing = current.find((item) => item.handle === handle);

      if (existing) {
        return current.map((item) =>
          item.handle === handle
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...current,
        {
          id: product.id,
          handle: product.handle,
          productTitle: product.title,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  }

  function removeItem(handle: string) {
    setItems((current) => current.filter((item) => item.handle !== handle));
  }

  function decrementItem(handle: string) {
    setItems((current) =>
      current
        .map((item) =>
          item.handle === handle
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const estimatedTotal = useMemo(() => {
    const total = items.reduce(
      (sum, item) => sum + parsePrice(item.price) * item.quantity,
      0
    );
    return `$${total.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}`;
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      totalItems,
      estimatedTotal,
      addItem,
      removeItem,
      decrementItem,
      clearCart,
    }),
    [items, totalItems, estimatedTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
