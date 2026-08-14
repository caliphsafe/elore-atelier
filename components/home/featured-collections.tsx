import Image from "next/image";
import Link from "next/link";

const collections = [
  { title:"Summer Collection", subtitle:"Handcrafted pieces shaped for warm days, movement, and ease.", href:"/shop", image:"/images/home/collections/signature.jpg", alt:"ELÖRE summer hat collection" },
  { title:"Signature Collection", subtitle:"Recognizable silhouettes shaped on custom blocks unique to Elöre.", href:"/shop", image:"/images/home/collections/studio-editions.jpg", alt:"ELÖRE signature hat collection" },
  { title:"Custom Design", subtitle:"One-of-one pieces guided by material, proportion, and personal story.", href:"/custom", image:"/images/home/collections/custom.jpg", alt:"ELÖRE custom hat design" }
];

export function FeaturedCollections() {
  return (
    <section className="overflow-hidden bg-brand-ivory px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="editorial-container grid gap-10 lg:grid-cols-12">
        <div className="relative lg:col-span-4 lg:pt-14">
          <div className="absolute -left-5 -top-6 h-32 w-32 rounded-full bg-brand-sand/75 md:h-40 md:w-40" />
          <div className="relative">
            <h2 className="serif-display text-5xl leading-[.9] text-brand-olive md:text-7xl">Shop Featured Collections and Custom Designs</h2>
            <Link href="/shop" className="btn-outline-olive mt-8">View All Products</Link>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {collections.map((c, i) => (
            <Link key={c.title} href={c.href} className={`group ${i === 2 ? "sm:col-span-2 sm:grid sm:grid-cols-[1.25fr_.75fr] sm:items-stretch" : ""}`}>
              <div className={`relative overflow-hidden ${i === 2 ? "aspect-[16/10] sm:aspect-auto sm:min-h-[330px]" : "aspect-[4/5]"}`}>
                <Image src={c.image} alt={c.alt} fill sizes="(max-width:768px) 100vw,50vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              </div>
              <div className={`${i === 2 ? "bg-brand-sand p-6 sm:flex sm:flex-col sm:justify-end" : "border-b border-brand-olive/25 py-5"}`}>
                <h3 className="serif-display text-4xl leading-none text-brand-olive md:text-5xl">{c.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-brand-olive/75">{c.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
