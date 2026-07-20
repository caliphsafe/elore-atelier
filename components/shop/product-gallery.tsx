"use client";

import { useState } from "react";
import { ImageSlot } from "@/components/common/image-slot";

type ProductGalleryProps = {
  title: string;
  handle: string;
};

export function ProductGallery({ title, handle }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryImages = [1, 2, 3, 4].map(
    (number) => `/images/products/${handle}-${number}.jpg`
  );

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

  return (
    <div className="grid gap-5">
      <div className="relative">
        <ImageSlot
          src={galleryImages[activeIndex]}
          label={`${title} image ${activeIndex + 1}`}
          className="aspect-[4/5] rounded-luxe border thin-border shadow-soft"
        />

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={previous}
            className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-white/70 bg-white/90 text-brand-ink"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-white/70 bg-white/90 text-brand-ink"
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
              className={`aspect-[4/5] overflow-hidden rounded-[1.25rem] border transition ${
                active ? "border-brand-ink shadow-soft" : "thin-border"
              }`}
              aria-label={`Select image ${index + 1}`}
            >
              <ImageSlot
                src={image}
                label={`${title} thumbnail ${index + 1}`}
                className="h-full"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
