"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  { src: "/images/home/lookbook/lookbook-1.jpg", alt: "Elöre Atelier editorial lookbook" },
  { src: "/images/home/lookbook/lookbook-2.jpg", alt: "Elöre Atelier editorial lookbook" },
  { src: "/images/home/lookbook/lookbook-3.jpg", alt: "Elöre Atelier editorial lookbook" },
  { src: "/images/home/lookbook/lookbook-4.jpg", alt: "Elöre Atelier editorial lookbook" }
];

export function ShopHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setActiveIndex((current) => (current + 1) % heroImages.length), 4200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="shop-hero-carousel" aria-label="Elöre Atelier collection imagery">
      <div className="shop-hero-carousel__stage">
        {heroImages.map((image, index) => (
          <Image key={image.src} src={image.src} alt={image.alt} fill priority={index === 0} sizes="(max-width: 900px) 92vw, 42vw" className={`shop-hero-carousel__image ${activeIndex === index ? "is-active" : ""}`} />
        ))}
      </div>
    </div>
  );
}
