"use client";

import Link from "next/link";
import type { Product } from "@/lib/shopify/types";
import { useWishlist } from "@/components/wishlist/wishlist-provider";
import { ProductCard } from "@/components/shop/product-card";

type WishlistPageContentProps = {
  products: Product[];
};

export function WishlistPageContent({ products: allProducts }: WishlistPageContentProps) {
  const { items } = useWishlist();

  const products = allProducts.filter((product) => items.includes(product.handle));

  return (
    <>
      <section className="section-pad pt-10 md:pt-12">
        <div className="editorial-container">
          <p className="eyebrow">Wishlist</p>
          <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
            Pieces saved for later.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
            Your saved selections are stored on this device for easy return visits.
          </p>
        </div>
      </section>

      <section className="section-pad pt-0">
        {products.length === 0 ? (
          <div className="editorial-container rounded-luxe border thin-border bg-[#f7f1ea] p-8 shadow-soft">
            <p className="text-[11px] uppercase tracking-[0.24em] text-brand-mocha">
              Nothing Saved Yet
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-brand-ink/72">
              Tap the heart on any product to save it here.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
            >
              Browse the Collection
            </Link>
          </div>
        ) : (
          <div className="editorial-container grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
