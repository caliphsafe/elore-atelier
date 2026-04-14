"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { CartProvider } from "@/components/cart/cart-provider";
import { WishlistProvider } from "@/components/wishlist/wishlist-provider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <SiteHeader onOpenCart={() => setCartOpen(true)} />
        <main>{children}</main>
        <SiteFooter />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </WishlistProvider>
    </CartProvider>
  );
}
