"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/cart-provider";

type AddFeedbackButtonProps = {
  handle: string;
  compact?: boolean;
};

export function AddFeedbackButton({
  handle,
  compact = false,
}: AddFeedbackButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timeout = window.setTimeout(() => setAdded(false), 1200);
    return () => window.clearTimeout(timeout);
  }, [added]);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(handle);
        setAdded(true);
      }}
      className={`inline-flex items-center justify-center rounded-full border transition ${
        compact
          ? "min-h-[36px] px-3 py-2 text-[10px] tracking-[0.2em] sm:px-4 sm:text-[11px] sm:tracking-[0.24em]"
          : "min-h-[44px] px-6 py-3 text-xs tracking-[0.24em]"
      } uppercase ${
        added
          ? "border-brand-olive bg-brand-olive text-white"
          : "border-brand-ink bg-brand-ink text-white hover:border-brand-sand hover:bg-brand-sand hover:text-brand-ink"
      }`}
      aria-label="Add to cart"
    >
      {added ? "Added" : compact ? "Add" : "Add to Cart"}
    </button>
  );
}
