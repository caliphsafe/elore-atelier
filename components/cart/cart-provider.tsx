"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import type { Product } from "@/lib/shopify/types";

export type CartLine = {
  id: string;
  handle: string;
  variantId?: string;
  productTitle: string;
  price: string;
  quantity: number;
  image?: string;
};

type CartContextValue = {
  items: CartLine[];
  totalItems: number;
  estimatedTotal: string;
  isCheckingOut: boolean;
  cartError: string;
  addItem: (product: Product) => void;
  removeItem: (handle: string) => void;
  decrementItem: (handle: string) => void;
  clearCart: () => void;
  checkout: () => Promise<void>;
};

const CartContext = createContext<CartContextValue | null>(null);

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [cartError, setCartError] = useState("");

  function addItem(product: Product) {
    if (!product.variantId || product.availableForSale === false) return;

    setCartError("");
    setItems((current) => {
      const existing = current.find((item) => item.handle === product.handle);

      if (existing) {
        return current.map((item) =>
          item.handle === product.handle
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...current,
        {
          id: product.id,
          handle: product.handle,
          variantId: product.variantId,
          productTitle: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
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

  async function checkout() {
    if (!items.length || isCheckingOut) return;

    setIsCheckingOut(true);
    setCartError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map((item) => ({
            variantId: item.variantId,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error || "Unable to open Shopify checkout.");
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      setCartError(
        error instanceof Error
          ? error.message
          : "Unable to open Shopify checkout."
      );
      setIsCheckingOut(false);
    }
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
      isCheckingOut,
      cartError,
      addItem,
      removeItem,
      decrementItem,
      clearCart,
      checkout,
    }),
    [items, totalItems, estimatedTotal, isCheckingOut, cartError]
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
