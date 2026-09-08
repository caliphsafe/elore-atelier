"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/shopify/types";
import { AddFeedbackButton } from "@/components/shop/add-feedback-button";

type RelatedProductCardProps = { product: Product; index: number };

export function RelatedProductCard({ product }: RelatedProductCardProps) {
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
      className="group flex h-full min-h-[390px] flex-col overflow-hidden border border-[#b49a7c] bg-brand-bone shadow-[0_10px_28px_rgba(56,64,42,0.08)]"
      style={{ borderRadius: "24px" }}
      aria-label={`View ${product.title}`}
    >
      <div
        className="relative flex h-[210px] shrink-0 items-center justify-center overflow-hidden bg-[#e8e0d3]"
        style={{ borderRadius: "24px 24px 0 0" }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-contain object-center p-4 transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-3 bottom-3 z-20 hidden opacity-0 transition duration-300 group-hover:opacity-100 md:block">
          <AddFeedbackButton product={product} compact />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="text-[9px] uppercase tracking-[0.22em] text-brand-mocha sm:text-[11px] sm:tracking-[0.28em]">
          {product.category}
        </p>
        <h3 className="serif-display mt-2 line-clamp-2 min-h-[3.4rem] text-xl leading-tight text-brand-ink sm:mt-3 sm:text-2xl md:text-3xl">
          {product.title}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-2 pt-5">
          <span className="text-[12px] text-brand-ink sm:text-sm">{product.price}</span>
          <div className="md:hidden">
            <AddFeedbackButton product={product} compact />
          </div>
        </div>
      </div>
    </article>
  );
}
