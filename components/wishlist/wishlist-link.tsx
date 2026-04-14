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
        className="inline-flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-brand-ink text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha relative"
        aria-label="Wishlist"
      >
        <span className="text-base leading-none">♥</span>

        <span className="absolute -right-1 -top-1 inline-flex min-w-[18px] h-[18px] items-center justify-center rounded-full bg-brand-ink px-1 text-[10px] text-white">
          {totalItems}
        </span>
      </Link>
    </>
  );
}