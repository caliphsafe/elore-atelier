"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type ProductGalleryProps = {
  title: string;
  handle: string;
};

function buildImages(handle: string) {
  return [1, 2, 3, 4].map((number) => `/images/products/${handle}-${number}.jpg`);
}

export function ProductGallery({ title, handle }: ProductGalleryProps) {
  const galleryImages = buildImages(handle);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

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
    <div className="grid gap-5">
      <div
        className="relative overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={galleryImages[activeIndex]}
          alt={`${title} image ${activeIndex + 1}`}
          width={1200}
          height={1500}
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="aspect-[4/5] w-full object-cover transition-all duration-300"
        />

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={previous}
            className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-white/70 bg-white/90 text-brand-ink"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-brand-ink">
            {activeIndex + 1} / {galleryImages.length}
          </div>

          <button
            type="button"
            onClick={next}
            className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-white/70 bg-white/90 text-brand-ink"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {galleryImages.map((image, index) => {
          const active = activeIndex === index;
          return (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border bg-[#f7f1ea] transition ${
                active ? "border-brand-ink shadow-soft" : "thin-border"
              }`}
              aria-label={`Select image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
