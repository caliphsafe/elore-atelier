"use client";

import { useRef, useState } from "react";

type ProductGalleryProps = {
  title: string;
};

const galleryPanels = [
  "image-panel",
  "bg-[linear-gradient(135deg,#f1e6d8_0%,#d3ba9d_100%)]",
  "bg-[linear-gradient(135deg,#ede0cf_0%,#c7ad8d_100%)]",
  "bg-[linear-gradient(135deg,#4f610b_0%,#253000_100%)]",
];

export function ProductGallery({ title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  function previous() {
    setActiveIndex((current) =>
      current === 0 ? galleryPanels.length - 1 : current - 1
    );
  }

  function next() {
    setActiveIndex((current) =>
      current === galleryPanels.length - 1 ? 0 : current + 1
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
        className="relative overflow-hidden rounded-luxe"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`aspect-[4/5] rounded-luxe border thin-border shadow-soft transition-all duration-300 ${galleryPanels[activeIndex]}`}
          aria-label={`${title} image ${activeIndex + 1}`}
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
            {activeIndex + 1} / {galleryPanels.length}
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
        {galleryPanels.map((panel, index) => {
          const active = activeIndex === index;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`aspect-[4/5] rounded-[1.25rem] border transition ${panel} ${
                active ? "border-brand-ink shadow-soft" : "thin-border"
              }`}
              aria-label={`Select image ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
