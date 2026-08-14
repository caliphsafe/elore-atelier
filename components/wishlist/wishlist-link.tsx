"use client";

import Link from "next/link";
import { useWishlist } from "@/components/wishlist/wishlist-provider";

export function WishlistLink() {
  const { totalItems } = useWishlist();

  return (
    <>
      {/* DESKTOP */}
      <Link
        href="/wishlist"
        className="hidden md:inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-brand-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
      >
        <span>Saved</span>

        <span className="inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-brand-ink px-1.5 py-0.5 text-[10px] tracking-normal text-white">
          {totalItems}
        </span>
      </Link>

      {/* MOBILE */}
      <Link
        href="/wishlist"
        className="relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-brand-ink text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha md:hidden"
        aria-label="Wishlist"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="block"
        >
          <path
            d="M12 20.5s-6.5-4.35-8.75-8.02C1.5 9.72 2.25 6.5 5.75 5.5c2.13-.6 4.02.26 5.25 1.87 1.23-1.61 3.12-2.47 5.25-1.87 3.5 1 4.25 4.22 2.5 6.98C18.5 16.15 12 20.5 12 20.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="absolute -right-1 -top-1 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-ink px-1 text-[10px] text-white">
          {totalItems}
        </span>
      </Link>
    </>
  );
}