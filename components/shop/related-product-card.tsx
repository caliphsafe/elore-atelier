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
      className="related-product group"
      aria-label={`View ${product.title}`}
    >
      <div>
        <div className="related-product__media">
          <Image
            src={product.image}
            alt={product.title}
            width={2477}
            height={1651}
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="aspect-[2477/1651] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-x-3 bottom-3 z-20 hidden opacity-0 transition duration-300 group-hover:opacity-100 md:block">
            <AddFeedbackButton product={product} compact />
          </div>
        </div>

        <div className="related-product__info">
          <p className="text-[9px] uppercase tracking-[0.22em] text-brand-mocha sm:text-[11px] sm:tracking-[0.28em]">
            {product.category}
          </p>

          <h3 className="serif-display mt-2 text-xl leading-tight text-brand-ink sm:mt-3 sm:text-2xl md:text-3xl">
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
