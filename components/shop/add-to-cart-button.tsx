"use client";

import { useCart } from "@/components/cart/cart-provider";

export function AddToCartButton({ handle }: { handle: string }) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(handle)}
      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-brand-ink bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:border-brand-olive hover:bg-brand-olive hover:text-white"
    >
      Add to Cart
    </button>
  );
}
