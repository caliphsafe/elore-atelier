"use client";

import { useState } from "react";
import Link from "next/link";
import { CartButton } from "@/components/cart/cart-button";
import { WishlistLink } from "@/components/wishlist/wishlist-link";

const links = [
  ["/shop","Shop"], ["/studio","Atelier"], ["/custom","Custom"],
  ["/lookbook","Lookbook"], ["/experiences","Experiences"], ["/about","About"], ["/contact","Contact"]
];

type Props = { onOpenCart?: () => void };

export function SiteHeader({ onOpenCart }: Props) {
  const [open,setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 border-b thin-border bg-[#FAF8F2]/95 backdrop-blur-xl">
        <div className="editorial-container grid min-h-[72px] grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8 lg:px-12">
          <button onClick={()=>setOpen(true)} className="justify-self-start text-[10px] font-semibold uppercase tracking-[.24em]">
            Menu
          </button>
          <Link href="/" className="serif-display text-[1.7rem] font-semibold tracking-[.20em]">ELÖRE</Link>
          <div className="flex items-center justify-self-end gap-3">
            <div className="hidden sm:block"><WishlistLink /></div>
            {onOpenCart ? <CartButton onClick={onOpenCart} /> : null}
            <Link href="/shop" className="hidden border-b border-current pb-1 text-[10px] font-semibold uppercase tracking-[.22em] md:block">Collection</Link>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[100] transition duration-500 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="absolute inset-0 bg-[#6F292B]" />
        <div className="relative flex min-h-screen flex-col text-[#FAF8F2]">
          <div className="flex items-center justify-between border-b border-white/20 px-5 py-5 md:px-10">
            <span className="serif-display text-2xl tracking-[.2em]">ELÖRE</span>
            <button onClick={()=>setOpen(false)} className="text-[10px] uppercase tracking-[.24em]">Close</button>
          </div>
          <div className="grid flex-1 md:grid-cols-[1fr_280px]">
            <nav className="flex flex-col justify-center px-5 py-10 md:px-10">
              {links.map(([href,label],i)=>(
                <Link key={href} href={href} onClick={()=>setOpen(false)}
                  className="group flex items-baseline gap-5 border-b border-white/20 py-2 serif-display text-[clamp(3.2rem,8vw,7.8rem)] leading-[.9] tracking-[-.05em]">
                  <span className="w-8 font-sans text-[9px] tracking-[.2em] opacity-55">{String(i+1).padStart(2,"0")}</span>
                  <span className="transition group-hover:translate-x-3">{label}</span>
                </Link>
              ))}
            </nav>
            <aside className="hidden border-l border-white/20 p-8 md:flex md:flex-col md:justify-between">
              <p className="elore-vertical">Millinery · Form · Material · Story</p>
              <p className="max-w-[13rem] text-sm leading-6 text-white/70">A contemporary atelier devoted to sculptural hats, slow craft, and personal expression.</p>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
