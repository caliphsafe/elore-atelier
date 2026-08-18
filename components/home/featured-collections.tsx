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
          <Link href="/shop" className="home-collections__all">
            View All Products
          </Link>
        </div>

        <div className="relative hidden min-h-[1040px] overflow-visible px-2 pb-10 pt-4 md:block md:min-h-[980px] lg:min-h-[850px]">
          <Link
            href={collections[0].href}
            className="group absolute left-[1%] top-[1rem] z-30 block h-[47rem] w-[58%] min-w-[0] -rotate-[2deg] overflow-hidden bg-brand-ink shadow-soft md:h-[44rem] lg:h-[42rem]"
          >
            <Image
              src={collections[0].image}
              alt={collections[0].alt}
              fill
              priority={false}
              sizes="(max-width: 1024px) 92vw, 58vw"
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 pb-10 text-white md:p-8 md:pb-12 lg:p-10 lg:pb-14">
              <h3 className="serif-display max-w-[8ch] text-6xl leading-[0.86] tracking-[-0.055em] md:text-7xl lg:text-8xl">
                {collections[0].title}
              </h3>
              <p className="mt-4 max-w-[34rem] text-base leading-7 text-white/88 md:text-lg md:leading-8">
                {collections[0].subtitle}
              </p>
            </div>
          </Link>

          <Link
            href={collections[1].href}
            className="group absolute right-[4%] top-[4rem] z-20 block h-[27rem] w-[43%] rotate-[2deg] overflow-hidden bg-brand-ink shadow-soft md:h-[28rem] lg:h-[29rem]"
          >
            <Image
              src={collections[1].image}
              alt={collections[1].alt}
              fill
              sizes="(max-width: 1024px) 86vw, 43vw"
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/24 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white md:p-8">
              <h3 className="serif-display max-w-[8ch] text-5xl leading-[0.86] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                {collections[1].title}
              </h3>
              <p className="mt-4 max-w-[28rem] text-base leading-7 text-white/88 md:text-lg">
                {collections[1].subtitle}
              </p>
            </div>
          </Link>

          <Link
            href={collections[2].href}
            className="group absolute bottom-[1rem] right-[7%] z-10 block h-[29rem] w-[53%] -rotate-[4deg] overflow-hidden bg-brand-ink shadow-soft md:h-[30rem] lg:h-[31rem]"
          >
            <Image
              src={collections[2].image}
              alt={collections[2].alt}
              fill
              sizes="(max-width: 1024px) 92vw, 53vw"
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/24 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white md:p-8 lg:p-10">
              <h3 className="serif-display max-w-[11ch] text-5xl leading-[0.86] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                {collections[2].title}
              </h3>
              <p className="mt-4 max-w-[38rem] text-base leading-7 text-white/88 md:text-lg">
                {collections[2].subtitle}
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-3 grid gap-5 md:hidden">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group relative min-h-[430px] overflow-hidden bg-brand-ink"
            >
              <Image
                src={collection.image}
                alt={collection.alt}
                fill
                sizes="100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/24 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
                <h3 className="serif-display max-w-[9ch] text-5xl leading-[0.88] tracking-[-0.055em]">
                  {collection.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/88">
                  {collection.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
