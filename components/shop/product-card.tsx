"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/lib/shopify/types";
import { AddFeedbackButton } from "@/components/shop/add-feedback-button";
import { WishlistButton } from "@/components/wishlist/wishlist-button";

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  const router = useRouter();

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={() => router.push(`/shop/${product.handle}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/shop/${product.handle}`);
        }
      }}
      className="group cursor-pointer overflow-hidden rounded-[1.1rem] border thin-border bg-white shadow-soft transition sm:rounded-luxe"
      aria-label={`View ${product.title}`}
    >
      <div className="lift-card">
        <div className="relative">
          <div
            className={`aspect-[4/5] w-full transition duration-500 group-hover:scale-[1.03] ${
              index % 3 === 0
                ? "image-panel"
                : index % 3 === 1
                ? "bg-[linear-gradient(135deg,#f1e6d8_0%,#d3ba9d_100%)]"
                : "bg-[linear-gradient(135deg,#4c5d0b_0%,#283300_100%)]"
            }`}
          />

          <div className="absolute right-3 top-3 z-20">
            <WishlistButton handle={product.handle} compact />
          </div>

          <div className="absolute inset-x-3 bottom-3 z-20 hidden opacity-0 transition duration-300 group-hover:opacity-100 md:block">
            <AddFeedbackButton handle={product.handle} compact />
          </div>
        </div>

        <div className="p-3 sm:p-5">
          <p className="text-[9px] uppercase tracking-[0.22em] text-brand-mocha sm:text-[11px] sm:tracking-[0.28em]">
            {product.category}
          </p>

          <h3 className="serif-display mt-2 text-lg leading-tight text-brand-ink sm:mt-3 sm:text-2xl md:text-3xl">
            {product.title}
          </h3>

          <p className="mt-3 hidden text-sm leading-7 text-brand-ink/72 sm:block">
            {product.description}
          </p>

          <div className="mt-3 flex items-center justify-between gap-2 sm:mt-5 md:hidden">
            <span className="text-[12px] text-brand-ink sm:text-sm">
              {product.price}
            </span>
            <AddFeedbackButton handle={product.handle} compact />
          </div>

          <div className="mt-3 hidden items-center justify-between gap-2 sm:mt-5 md:flex">
            <span className="text-[12px] text-brand-ink sm:text-sm">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
