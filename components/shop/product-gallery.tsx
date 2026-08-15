"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProductImage } from "@/lib/shopify/types";

type ProductGalleryProps = {
  title: string;
  handle: string;
  images?: ProductImage[];
};

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
    if (activeIndex > galleryImages.length - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex, galleryImages.length]);

  function previous() {
    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  }

  function next() {
    setActiveIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  }

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;

    const endX = e.changedTouches[0]?.clientX ?? 0;
    const deltaX = endX - touchStartX.current;

    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        next();
      } else {
        previous();
      }
    }

    touchStartX.current = null;
  }

  return (
    <div className="grid gap-4">
      <div
        className="product-gallery__main"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={galleryImages[activeIndex].src}
          alt={galleryImages[activeIndex].alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 56vw"
          className="object-cover transition-all duration-300"
        />

        {galleryImages.length > 1 ? (
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
            <button
              type="button"
              onClick={previous}
              className="product-gallery__arrow"
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="product-gallery__counter">
              {activeIndex + 1} / {galleryImages.length}
            </div>

            <button
              type="button"
              onClick={next}
              className="product-gallery__arrow"
              aria-label="Next image"
            >
              ›
            </button>
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
                className={`product-gallery__thumb ${active ? "is-active" : ""}`}
                aria-label={`Select image ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
