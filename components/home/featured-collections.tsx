import Image from "next/image";
import Link from "next/link";

const collections = [
  { title: "Summer Collection", subtitle: "Handcrafted pieces shaped for warm days, movement, and ease.", href: "/shop", image: "/images/home/collections/studio-editions.jpg", alt: "ELÖRE ATELIER summer hat collection", cardClassName: "lg:row-span-2 min-h-[520px] md:min-h-[620px] lg:min-h-[760px]", titleClassName: "text-6xl md:text-7xl lg:text-8xl" },
  { title: "Signature Collection", subtitle: "Recognizable silhouettes shaped on custom blocks unique to Elöre.", href: "/shop", image: "/images/home/collections/signature.jpg", alt: "ELÖRE ATELIER signature hat collection", cardClassName: "min-h-[430px] md:min-h-[500px] lg:min-h-[360px]", titleClassName: "text-5xl md:text-6xl lg:text-7xl" },
  { title: "Custom Design", subtitle: "One-of-one pieces guided by material, proportion, and personal story.", href: "/custom", image: "/images/home/collections/custom.jpg", alt: "ELÖRE ATELIER custom hat design", cardClassName: "min-h-[430px] md:min-h-[500px] lg:min-h-[360px]", titleClassName: "text-5xl md:text-6xl lg:text-7xl" }
];

export function FeaturedCollections() {
  return (
    <section className="home-collections">
      <div className="editorial-container home-collections__inner">
        <div className="home-collections__copy">
          <h2 className="serif-display">Shop Featured Collections and Custom Designs</h2>
          <Link href="/shop" className="home-collections__all">View All Products</Link>
        </div>
        <div className="grid gap-7 md:gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:grid-rows-2 lg:items-stretch">
          {collections.map((collection, index) => (
            <Link key={collection.title} href={collection.href} className={`group relative block overflow-hidden bg-brand-ink shadow-soft ${collection.cardClassName}`}>
              <Image src={collection.image} alt={collection.alt} fill priority={index === 0} sizes={index === 0 ? "(max-width: 1024px) 100vw, 56vw" : "(max-width: 1024px) 100vw, 44vw"} className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-black/5" />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-7 pb-10 text-white md:p-9 lg:p-10">
                <h3 className={`serif-display max-w-[10ch] leading-[0.86] tracking-[-0.055em] ${collection.titleClassName}`}>{collection.title}</h3>
                <p className="mt-4 max-w-[36rem] text-base leading-7 text-white/88 md:text-lg md:leading-8">{collection.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
