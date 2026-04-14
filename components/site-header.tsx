"use client";

import Link from "next/link";
import { CartButton } from "@/components/cart/cart-button";
import { WishlistLink } from "@/components/wishlist/wishlist-link";

const desktopLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
  { href: "/studio", label: "Studio" },
  { href: "/custom", label: "Custom" },
  { href: "/contact", label: "Contact" }
];

const mobileQuickLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Looks" },
  { href: "/custom", label: "Custom" }
];

type Props = {
  onOpenCart?: () => void;
};

export function SiteHeader({ onOpenCart }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b thin-border bg-white/85 backdrop-blur-xl">
      <div className="editorial-container flex items-center justify-between px-4 py-4 md:px-8 lg:px-12">
        <Link
          href="/"
          className="serif-display text-2xl font-semibold tracking-[0.22em] text-brand-ink"
        >
          ELÖRE
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {desktopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.24em] text-brand-ink/80 transition hover:text-brand-mocha"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/custom"
            className="hidden min-h-[44px] items-center justify-center rounded-full border border-brand-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha md:inline-flex"
          >
            Start Custom Order
          </Link>

          <div className="hidden md:block">
            <WishlistLink />
          </div>

          {onOpenCart ? <CartButton onClick={onOpenCart} /> : null}

          <Link
            href="/shop"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
          >
            Shop
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 border-t thin-border bg-white md:hidden">
        {mobileQuickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex min-h-[44px] items-center justify-center py-3 text-center text-[11px] uppercase tracking-[0.24em] text-brand-ink/75 transition hover:text-brand-mocha"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
