"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProductImage } from "@/lib/shopify/types";

type ProductGalleryProps = { title: string; handle: string; images?: ProductImage[] };

function buildImages(handle: string, title: string) {
  return [1, 2, 3, 4].map((number) => ({
    src: `/images/products/${handle}-${number}.jpg`,
    alt: `${title} image ${number}`
  }));
}

export function ProductGallery({ title, handle, images }: ProductGalleryProps) {
  const galleryImages = images?.length ? images : buildImages(handle, title);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex > galleryImages.length - 1) setActiveIndex(0);
  }, [activeIndex, galleryImages.length]);

  function previous() {
    setActiveIndex((current) => current === 0 ? galleryImages.length - 1 : current - 1);
  }

  function next() {
    setActiveIndex((current) => current === galleryImages.length - 1 ? 0 : current + 1);
  }

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? 0;
    const deltaX = endX - touchStartX.current;
    if (Math.abs(deltaX) > 40) deltaX < 0 ? next() : previous();
    touchStartX.current = null;
  }

  return (
    <div className="grid gap-4">
      <div
        className="relative flex min-h-[460px] items-center justify-center overflow-hidden border border-[#b49a7c] bg-[#e8e0d3] shadow-[0_12px_32px_rgba(56,64,42,0.08)] md:min-h-[620px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ borderRadius: "32px" }}
      >
        <Image
          src={galleryImages[activeIndex].src}
          alt={galleryImages[activeIndex].alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 56vw"
          className="object-contain object-center p-6 transition-all duration-300 md:p-10"
        />

        {galleryImages.length > 1 ? (
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
            <button type="button" onClick={previous} className="product-gallery__arrow" aria-label="Previous image">‹</button>
            <div className="product-gallery__counter">{activeIndex + 1} / {galleryImages.length}</div>
            <button type="button" onClick={next} className="product-gallery__arrow" aria-label="Next image">›</button>
          </div>
        ) : null}
      </div>

      {galleryImages.length > 1 ? (
        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((image, index) => {
            const active = activeIndex === index;
            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-[1.2/1] overflow-hidden border bg-[#e8e0d3] transition ${active ? "border-brand-olive" : "border-[#b49a7c]"}`}
                style={{ borderRadius: "18px" }}
                aria-label={`Select image ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="25vw"
                  className="object-contain object-center p-2"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
