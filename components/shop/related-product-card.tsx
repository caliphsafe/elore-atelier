"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/shopify/types";
import { AddFeedbackButton } from "@/components/shop/add-feedback-button";

type RelatedProductCardProps = {
  product: Product;
  index: number;
};

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
      className="group cursor-pointer overflow-hidden rounded-[1.1rem] border thin-border bg-white shadow-soft transition sm:rounded-luxe"
      aria-label={`View ${product.title}`}
    >
      <div className="lift-card">
        <div className="relative overflow-hidden bg-[#f7f1ea]">
          <Image
            src={product.image}
            alt={product.title}
            width={900}
            height={1125}
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-x-3 bottom-3 z-20 hidden opacity-0 transition duration-300 group-hover:opacity-100 md:block">
            <AddFeedbackButton product={product} compact />
          </div>
        </div>

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
            <div className="md:hidden">
              <AddFeedbackButton product={product} compact />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
