"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/cart-provider";
import type { Product } from "@/lib/shopify/types";

type AddFeedbackButtonProps = {
  product: Product;
  compact?: boolean;
};

export function AddFeedbackButton({
  product,
  compact = false,
}: AddFeedbackButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timeout = window.setTimeout(() => setAdded(false), 1200);
    return () => window.clearTimeout(timeout);
  }, [added]);

  const unavailable = product.availableForSale === false || !product.variantId;

  return (
    <button
      type="button"
      disabled={unavailable}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (unavailable) return;
        addItem(product);
        setAdded(true);
      }}
      className={`inline-flex items-center justify-center rounded-full border transition ${
        compact
          ? "min-h-[36px] px-3 py-2 text-[10px] tracking-[0.2em] sm:px-4 sm:text-[11px] sm:tracking-[0.24em]"
          : "min-h-[44px] px-6 py-3 text-xs tracking-[0.24em]"
      } uppercase ${
        unavailable
          ? "cursor-not-allowed border-brand-ink/30 bg-brand-ink/10 text-brand-ink/45"
          : added
          ? "border-brand-olive bg-brand-olive text-white"
          : "border-brand-ink bg-brand-ink text-white hover:border-brand-olive hover:bg-brand-olive hover:text-white"
      }`}
      aria-label={unavailable ? "Unavailable" : "Add to cart"}
    >
      {unavailable ? "Unavailable" : added ? "Added" : compact ? "Add" : "Add to Cart"}
    </button>
  );
}
