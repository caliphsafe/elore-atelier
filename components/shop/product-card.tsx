"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/shopify/types";
import { AddFeedbackButton } from "@/components/shop/add-feedback-button";
import { WishlistButton } from "@/components/wishlist/wishlist-button";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const router = useRouter();
  const unavailable = product.availableForSale === false;

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={() => router.push(`/shop/${product.handle}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); router.push(`/shop/${product.handle}`); }
      }}
      className={`shop-product group shop-product--${(index % 3) + 1}`}
      aria-label={`View ${product.title}`}
    >
      <div className="shop-product__media">
        <Image src={product.image} alt={product.title} width={2477} height={1651} sizes="(max-width:640px) 100vw,(max-width:1280px) 50vw,33vw" className="shop-product__image" style={{ objectFit: "contain", clipPath: "none", borderRadius: 0 }} />
        <div className="shop-product__wishlist"><WishlistButton handle={product.handle} compact /></div>
        {unavailable ? <div className="shop-product__unavailable">Unavailable</div> : null}
        <div className="shop-product__desktop-action"><AddFeedbackButton product={product} compact /></div>
      </div>
      <div className="shop-product__info">
        <div className="shop-product__line">
          <h3 className="serif-display">{product.title}</h3>
          <span>{product.price}</span>
        </div>
        <div className="shop-product__mobile-action"><AddFeedbackButton product={product} compact /></div>
      </div>
    </article>
  );
}
