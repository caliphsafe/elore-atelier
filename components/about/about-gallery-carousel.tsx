import Image from "next/image";

const galleryImages = [
  "/images/about/about_gallery/2.jpg",
  "/images/about/about_gallery/3.jpg",
  "/images/about/about_gallery/4.jpg",
];

type AboutGalleryCarouselProps = { className?: string; sizes?: string };

export function AboutGalleryCarousel({ className = "", sizes = "(max-width: 1024px) 100vw, 48vw" }: AboutGalleryCarouselProps) {
  return (
    <div className={`relative overflow-hidden border thin-border bg-[#f7f1ea] shadow-soft ${className}`} style={{ borderRadius: 0, clipPath: "none" }}>
      {galleryImages.map((image, index) => (
        <Image key={image} src={image} alt={`Salomé Kopasz and ELÖRE ATELIER image ${index + 1}`} fill priority={index === 0} sizes={sizes} className="about-gallery-carousel__image object-cover" style={{ animationDelay: `${index * 5}s` }} />
      ))}
    </div>
  );
}
