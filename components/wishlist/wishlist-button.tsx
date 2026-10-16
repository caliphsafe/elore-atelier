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
      aria-label={active ? "Remove from saved pieces" : "Save piece"}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`h-4 w-4 ${compact ? "" : "mr-2"}`}
        fill="currentColor"
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
      </svg>
      {!compact ? (
        <span className="text-[11px] uppercase tracking-[0.24em]">
          {active ? "Saved" : "Save"}
        </span>
      ) : null}
    </button>
  );
}
