"use client";

import Link from "next/link";
import { CartButton } from "@/components/cart/cart-button";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Looks" },
  { href: "/custom", label: "Custom" },
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
          className="serif-display text-2xl tracking-[0.22em] text-brand-ink"
        >
          ELÖRE
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/shop">Shop</Link>
          <Link href="/lookbook">Lookbook</Link>
          <Link href="/about">About</Link>
          <Link href="/studio">Studio</Link>
          <Link href="/custom">Custom</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          {onOpenCart ? <CartButton onClick={onOpenCart} /> : null}

          <Link
            href="/shop"
            className="rounded-full bg-brand-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white"
          >
            Shop
          </Link>
        </div>
      </div>

      {/* MOBILE QUICK NAV */}
      <div className="grid grid-cols-3 border-t thin-border bg-white md:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="py-3 text-center text-[11px] uppercase tracking-[0.24em] text-brand-ink/75"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
