"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/shopify/types";
import { AddFeedbackButton } from "@/components/shop/add-feedback-button";
import { WishlistButton } from "@/components/wishlist/wishlist-button";

export function ProductCard({ product }: { product: Product; index?: number }) {
  const router = useRouter();
  const collectionLabel =
    product.collections?.[0]?.title || product.category || "Collection";

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
      className="group flex h-full min-h-[430px] flex-col overflow-hidden border border-[#b49a7c] bg-brand-bone shadow-[0_12px_32px_rgba(56,64,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(56,64,42,0.13)]"
      style={{ borderRadius: "28px" }}
      aria-label={`View ${product.title}`}
    >
      <div
        className="relative flex h-[230px] shrink-0 items-center justify-center overflow-hidden bg-[#e8e0d3] sm:h-[240px] xl:h-[225px]"
        style={{ borderRadius: "28px 28px 0 0" }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
          className="object-contain object-center p-4 transition duration-500 group-hover:scale-[1.02]"
          style={{ clipPath: "none" }}
        />
        <div className="absolute right-3 top-3 z-10">
          <WishlistButton handle={product.handle} compact />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-5 md:px-6 md:pb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-mocha/70">
          {collectionLabel}
        </p>
        <h3 className="serif-display mt-3 line-clamp-2 min-h-[3.9rem] text-[clamp(1.9rem,2.2vw,2.7rem)] leading-[0.98] text-brand-ink">
          {product.title}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <p className="shrink-0 pb-2 text-sm text-brand-ink">{product.price}</p>
          <div className="ml-auto shrink-0">
            <AddFeedbackButton product={product} compact />
          </div>
        </div>
      </div>
    </article>
  );
}
