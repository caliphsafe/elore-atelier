import Image from "next/image";

const galleryImages = [
  "/images/about/about_gallery/1.jpg",
  "/images/about/about_gallery/2.jpg",
  "/images/about/about_gallery/3.jpg",
  "/images/about/about_gallery/4.jpg",
  "/images/about/about_gallery/5.jpg"
];

export function AboutGalleryCarousel() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[680px] lg:sticky lg:top-28">
      {galleryImages.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Salomé Kopasz and ELÖRE Atelier image ${index + 1}`}
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="about-gallery-carousel__image object-cover"
          style={{ animationDelay: `${index * 5}s` }}
        />
      ))}
    </div>
  );
}
