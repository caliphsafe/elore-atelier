"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/home/collections/signature.jpg",
    alt: "ELÖRE Signature Collection"
  },
  {
    src: "/images/home/collections/studio-editions.jpg",
    alt: "ELÖRE Summer Collection"
  },
  {
    src: "/images/lookbook/hero.jpg",
    alt: "ELÖRE editorial lookbook"
  },
  {
    src: "/images/lookbook/look-1.jpg",
    alt: "ELÖRE lookbook style"
  },
  {
    src: "/images/lookbook/look-2.jpg",
    alt: "ELÖRE lookbook style"
  },
  {
    src: "/images/lookbook/look-3.jpg",
    alt: "ELÖRE lookbook style"
  },
  {
    src: "/images/lookbook/look-4.jpg",
    alt: "ELÖRE lookbook style"
  },
  {
    src: "/images/lookbook/look-5.jpg",
    alt: "ELÖRE lookbook style"
  },
  {
    src: "/images/lookbook/styling-1.jpg",
    alt: "ELÖRE editorial styling"
  },
  {
    src: "/images/lookbook/styling-2.jpg",
    alt: "ELÖRE editorial styling"
  }
];

export function ShopHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  function previous() {
    setActiveIndex((current) =>
      current === 0 ? heroImages.length - 1 : current - 1
    );
  }

  function next() {
    setActiveIndex((current) => (current + 1) % heroImages.length);
  }

  return (
    <div className="shop-hero-carousel" aria-label="ELÖRE collection imagery">
      <div className="shop-hero-carousel__stage">
        {heroImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index < 2}
            sizes="(max-width: 900px) 92vw, 42vw"
            className={`shop-hero-carousel__image ${
              activeIndex === index ? "is-active" : ""
            }`}
          />
        ))}
      </div>

      <div className="shop-hero-carousel__controls">
        <button type="button" onClick={previous} aria-label="Previous image">
          ←
        </button>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(heroImages.length).padStart(2, "0")}
        </span>
        <button type="button" onClick={next} aria-label="Next image">
          →
        </button>
      </div>
    </div>
  );
}
