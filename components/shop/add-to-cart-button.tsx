"use client";

import { useCart } from "@/components/cart/cart-provider";
import type { Product } from "@/lib/shopify/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const unavailable = product.availableForSale === false || !product.variantId;

  return (
    <button
      type="button"
      disabled={unavailable}
      onClick={() => {
        if (unavailable) return;
        addItem(product);
      }}
      className={`inline-flex min-h-[44px] items-center justify-center rounded-full border px-6 py-3 text-xs uppercase tracking-[0.24em] transition ${
        unavailable
          ? "cursor-not-allowed border-brand-ink/30 bg-brand-ink/10 text-brand-ink/45"
          : "border-brand-ink bg-brand-ink text-white hover:border-brand-olive hover:bg-brand-olive hover:text-white"
      }`}
    >
      {unavailable ? "Unavailable" : "Add to Cart"}
    </button>
  );
}
