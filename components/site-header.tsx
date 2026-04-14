"use client";

import Link from "next/link";
import { CartButton } from "@/components/cart/cart-button";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
  { href: "/studio", label: "Studio" },
  { href: "/custom", label: "Custom" },
  { href: "/contact", label: "Contact" }
];

type SiteHeaderProps = {
  onOpenCart?: () => void;
};

export function SiteHeader({ onOpenCart }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b thin-border bg-white/80 backdrop-blur-xl">
      <div className="editorial-container flex items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        <Link
          href="/"
          className="serif-display text-2xl font-semibold tracking-[0.22em] text-brand-ink"
        >
          ELÖRE
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.24em] text-brand-ink/80 transition hover:text-brand-mocha"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/custom"
            className="hidden rounded-full border border-brand-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha md:inline-flex"
          >
            Start Custom Order
          </Link>

          {onOpenCart ? <CartButton onClick={onOpenCart} /> : null}

          <Link
            href="/shop"
            className="rounded-full bg-brand-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
          >
            Shop
          </Link>
        </div>
      </div>
    </header>
  );
}
