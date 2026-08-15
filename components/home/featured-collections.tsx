import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Summer Collection",
    subtitle: "Handcrafted pieces shaped for warm days, movement, and ease.",
    href: "/shop",
    image: "/images/home/collections/studio-editions.jpg",
    alt: "ELÖRE summer hat collection"
  },
  {
    title: "Signature Collection",
    subtitle: "Recognizable silhouettes shaped on custom blocks unique to Elöre.",
    href: "/shop",
    image: "/images/home/collections/signature.jpg",
    alt: "ELÖRE signature hat collection"
  },
  {
    title: "Custom Design",
    subtitle: "One-of-one pieces guided by material, proportion, and personal story.",
    href: "/custom",
    image: "/images/home/collections/custom.jpg",
    alt: "ELÖRE custom hat design"
  }
];

export function FeaturedCollections() {
  return (
    <section className="home-collections">
      <div className="editorial-container home-collections__inner">
        <div className="home-collections__copy">
          <h2 className="serif-display">Shop Featured Collections and Custom Designs</h2>
          <Link href="/shop" className="home-collections__all">View All Products</Link>
        </div>

        <div className="home-collections__stage">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              href={collection.href}
              className={`home-collection-card home-collection-card--${index + 1}`}
            >
              <Image
                src={collection.image}
                alt={collection.alt}
                fill
                sizes="(max-width: 768px) 88vw, 48vw"
                className="home-collection-card__image"
              />
              <div className="home-collection-card__shade" />
              <div className="home-collection-card__content">
                <h3 className="serif-display">{collection.title}</h3>
                <p>{collection.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
