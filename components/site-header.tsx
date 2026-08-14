"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartButton } from "@/components/cart/cart-button";
import { WishlistLink } from "@/components/wishlist/wishlist-link";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/studio", label: "Atelier" },
  { href: "/custom", label: "Custom" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type Props = { onOpenCart?: () => void };

export function SiteHeader({ onOpenCart }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="elore-header sticky top-0 z-50 border-b border-black/10 bg-[#F6F0E5]/95 backdrop-blur-xl">
        <div className="editorial-container flex min-h-[68px] items-center justify-between px-4 md:px-8 lg:px-12">
          <Link href="/" className="serif-display text-2xl font-semibold tracking-[0.2em] text-brand-ink">ELÖRE</Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
            {links.map((link) => <Link key={link.href} href={link.href} className="elore-nav-link">{link.label}</Link>)}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block"><WishlistLink /></div>
            {onOpenCart ? <CartButton onClick={onOpenCart} /> : null}
            <Link href="/custom" className="elore-header-cta hidden sm:inline-flex">Commission a Hat</Link>
            <button
              type="button"
              className="inline-flex min-h-[44px] items-center justify-center border-l border-black/15 pl-4 text-[10px] uppercase tracking-[0.24em] lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="elore-menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <div
        id="elore-menu"
        className={`fixed inset-0 z-[90] bg-elore-maroon text-white transition duration-500 ${menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div className="grid min-h-[100svh] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col px-5 py-5 md:px-8 md:py-7">
            <div className="flex items-center justify-between border-b border-white/20 pb-5">
              <Link href="/" onClick={() => setMenuOpen(false)} className="serif-display text-2xl font-semibold tracking-[0.2em]">ELÖRE</Link>
              <button type="button" onClick={() => setMenuOpen(false)} className="min-h-[44px] text-[10px] uppercase tracking-[0.26em]">Close</button>
            </div>

            <nav className="flex flex-1 flex-col justify-center py-8" aria-label="Menu navigation">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group grid grid-cols-[2rem_1fr] items-baseline border-b border-white/16 py-2 md:grid-cols-[3rem_1fr]"
                >
                  <span className="text-[9px] tracking-[0.25em] text-white/45">0{index + 1}</span>
                  <span className="serif-display text-[clamp(2.65rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2">{link.label}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-between border-t border-white/20 pt-5 text-[9px] uppercase tracking-[0.25em] text-white/55">
              <span>ELÖRE Atelier</span><span>Boston</span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image src="/images/home/hero/hero.jpg" alt="ELÖRE Atelier hat" fill sizes="40vw" className="object-cover" />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>
      </div>
    </>
  );
}
