"use client";

import Link from "next/link";
import { CartButton } from "@/components/cart/cart-button";
import { WishlistLink } from "@/components/wishlist/wishlist-link";

const desktopLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/studio", label: "Atelier" },
  { href: "/custom", label: "Custom" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const mobileQuickLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/custom", label: "Custom" },
  { href: "/studio", label: "Atelier" },
];

type Props = { onOpenCart?: () => void };

export function SiteHeader({ onOpenCart }: Props) {
  return (
    <header className="elore-header sticky top-0 z-50 border-b border-black/10 bg-[#F6F0E5]/95 backdrop-blur-xl">
      <div className="editorial-container flex min-h-[68px] items-center justify-between px-4 md:px-8 lg:px-12">
        <Link href="/" className="serif-display text-2xl font-semibold tracking-[0.2em] text-brand-ink">ELÖRE</Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {desktopLinks.map((link) => <Link key={link.href} href={link.href} className="elore-nav-link">{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block"><WishlistLink /></div>
          {onOpenCart ? <CartButton onClick={onOpenCart} /> : null}
          <Link href="/custom" className="elore-header-cta hidden sm:inline-flex">Commission a Hat</Link>
        </div>
      </div>
      <div className="grid grid-cols-3 border-t border-black/10 lg:hidden">
        {mobileQuickLinks.map((link) => <Link key={link.href} href={link.href} className="flex min-h-[44px] items-center justify-center text-[10px] uppercase tracking-[0.24em]">{link.label}</Link>)}
      </div>
    </header>
  );
}
