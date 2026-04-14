"use client";

import Link from "next/link";
import { Product } from "@/lib/shopify/types";
import { useCart } from "@/components/cart/cart-provider";

type RelatedProductCardProps = {
  product: Product;
  index: number;
};

export function RelatedProductCard({ product, index }: RelatedProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group relative overflow-hidden rounded-[1.1rem] border thin-border bg-white shadow-soft transition sm:rounded-luxe">
      <Link
        href={`/shop/${product.handle}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${product.title}`}
      />

      <div className="lift-card">
        <div
          className={`aspect-[4/5] w-full transition duration-500 group-hover:scale-[1.03] ${
            index % 2 === 0
              ? "bg-[linear-gradient(135deg,#f1e6d8_0%,#d3ba9d_100%)]"
              : "bg-[linear-gradient(135deg,#4c5d0b_0%,#283300_100%)]"
          }`}
        />

        <div className="p-3 sm:p-5">
          <p className="text-[9px] uppercase tracking-[0.22em] text-brand-mocha sm:text-[11px] sm:tracking-[0.28em]">
            {product.category}
          </p>

          <h3 className="serif-display mt-2 text-lg leading-tight text-brand-ink sm:mt-3 sm:text-2xl md:text-3xl">
            {product.title}
          </h3>

          <div className="mt-3 flex items-center justify-between gap-2 sm:mt-5">
            <span className="text-[12px] text-brand-ink sm:text-sm">
              {product.price}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product.handle);
              }}
              className="relative z-20 inline-flex min-h-[36px] items-center justify-center rounded-full bg-brand-ink px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-brand-mocha sm:px-4 sm:text-[11px] sm:tracking-[0.24em]"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
