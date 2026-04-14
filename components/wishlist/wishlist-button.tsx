"use client";

import { useWishlist } from "@/components/wishlist/wishlist-provider";

type WishlistButtonProps = {
  handle: string;
  compact?: boolean;
};

export function WishlistButton({
  handle,
  compact = false,
}: WishlistButtonProps) {
  const { isWishlisted, toggleItem } = useWishlist();
  const active = isWishlisted(handle);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleItem(handle);
      }}
      className={`inline-flex items-center justify-center rounded-full border transition ${
        compact
          ? "min-h-[36px] min-w-[36px] px-0"
          : "min-h-[44px] px-5 py-3"
      } ${
        active
          ? "border-brand-olive bg-brand-olive text-white"
          : "border-brand-ink bg-white text-brand-ink hover:border-brand-mocha hover:text-brand-mocha"
      }`}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
    >
      <span
        className={`leading-none ${
          compact ? "text-base" : "mr-2 text-base"
        }`}
      >
        ♥
      </span>
      {!compact ? (
        <span className="text-[11px] uppercase tracking-[0.24em]">
          {active ? "Saved" : "Save"}
        </span>
      ) : null}
    </button>
  );
}
