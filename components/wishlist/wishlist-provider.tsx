"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

type WishlistContextValue = {
  items: string[];
  totalItems: number;
  isWishlisted: (handle: string) => boolean;
  toggleItem: (handle: string) => void;
  removeItem: (handle: string) => void;
  clearWishlist: () => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);
const STORAGE_KEY = "elore_wishlist";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);

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

  function isWishlisted(handle: string) {
    return items.includes(handle);
  }

  function toggleItem(handle: string) {
    setItems((current) =>
      current.includes(handle)
        ? current.filter((item) => item !== handle)
        : [...current, handle]
    );
  }

  function removeItem(handle: string) {
    setItems((current) => current.filter((item) => item !== handle));
  }

  function clearWishlist() {
    setItems([]);
  }

  const value = useMemo(
    () => ({
      items,
      totalItems: items.length,
      isWishlisted,
      toggleItem,
      removeItem,
      clearWishlist,
    }),
    [items]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
}
