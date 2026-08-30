import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    number: "01",
    title: "Material Selection",
    text: "Each element is chosen for its quality, character, and ability to stand the test of time. Each choice lays the foundation for a piece that is meant to be worn for years to come."
  },
  {
    number: "02",
    title: "Shaping",
    text: "The crown and silhouette are sculpted by hand and molded by wooden blocks giving the hat its personality, balance, and overall presence."
  },
  {
    number: "03",
    title: "Brimming and Sanding",
    text: "The brim is carefully refined through a brim cutter and sanding techniques that create softness and movement."
  },
  {
    number: "04",
    title: "Sweatband",
    text: "The interior sweatband is fitted by hand for comfort and structure. This detail becomes an intimate part of the hat and often carries a personalized or artistic element."
  },
  {
    number: "05",
    title: "Habillage",
    text: "Ribbon work, embroidery, burns, stitching, and symbolic adornments are added to complete the visual story of the piece."
  },
  {
    number: "06",
    title: "Finishing Details",
    text: "Final refinements are made by hand to ensure balance, craftsmanship, and individuality."
  }
];

const timelessMaterials = [
  {
    title: "Wooden Blocks",
    image: "/images/studio/Wooden_Blocks.jpg",
    alt: "ELÖRE handcrafted wooden hat blocks",
    text: "Handcrafted in Poland by a fourth-generation block maker, each form is carved from timber sourced through a family business that plants and stewards its own trees."
  },
  {
    title: "Panama Straw",
    image: "/images/studio/Panama_Straw.jpg",
    alt: "ELÖRE Panama straw material",
    text: "Woven by skilled artisans in Ecuador, authentic Panama straw represents one of the world's most celebrated hat-making traditions. Lightweight, breathable, and remarkably refined."
  },
  {
    title: "Fur Felt",
    image: "/images/studio/Fur_Felt.jpg",
    alt: "ELÖRE fur felt material",
    text: "Crafted in Portugal, our fur felt is created through a centuries-old process that transforms natural fibers using moisture, heat, and pressure into a dense, durable textile."
  },
  {
    title: "Leather Sweatbands",
    image: "/images/studio/Sweatband.jpg",
    alt: "ELÖRE leather sweatbands",
    text: "Every hat is finished with premium leather sweatbands crafted in the United States. Their dedication to traditional leathercraft and enduring quality mirrors our own belief that every detail matters."
  }
];

export default function StudioPage() {
  return (
    <>
      <section className="atelier-opening">
        <div className="editorial-container atelier-opening__inner relative overflow-hidden grid grid-cols-1 gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-12 lg:px-12">
          <Image
            src="/images/bg/elorebg3.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 70vw, 34vw"
            className="pointer-events-none absolute inset-y-0 right-0 z-0 object-contain object-right opacity-30 mix-blend-multiply"
            aria-hidden="true"
          />

          <div className="atelier-opening__content relative z-10 min-w-0">
            <h1 className="serif-display text-[clamp(3.5rem,6.4vw,7rem)] leading-[0.86] tracking-[-0.055em]">A creative atelier and shop in Downtown Boston where timeless pieces are transformed.</h1>

            <div className="atelier-opening__intro">
              <p>
                Every Elöre hat begins in the atelier where tradition is practiced,
                materials are transformed, and craftsmanship is given the time it
                deserves. Here, every step of the process is carried out by hand,
                honoring generations of techniques while shaping a new future for
                the craft.
              </p>
            </div>
          </div>

          <div className="atelier-opening__image relative z-10" style={{ clipPath: "none", borderRadius: 0 }}>
            <Image
              src="/images/studio/workspace.jpg"
              alt="ELÖRE Atelier workspace in Downtown Boston"
              fill
              sizes="(max-width: 900px) 92vw, 48vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="atelier-process">
        <div className="editorial-container atelier-process__inner">
          <div className="atelier-process__lead">
            <h2 className="serif-display">
              The Process of a Handcrafted Hat
            </h2>
            <p>
              Every step carries a story whether it’s from the designer or the
              wearer. Every silhouette begins on a handcrafted wooden block,
              where steam, pressure, and skilled hands shape each hat into its
              distinctive form.
            </p>
          </div>

          <div className="atelier-process__journey">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className={`atelier-process__step atelier-process__step--${index + 1}`}
              >
                <span className="atelier-process__number serif-display">
                  {step.number}
                </span>
                <div className="atelier-process__step-copy">
                  <h3 className="serif-display">{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atelier-materials">
        <div className="editorial-container atelier-materials__inner">
          <div className="atelier-materials__title">
            <h2 className="serif-display">Timeless Materials</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {timelessMaterials.map((material) => (
              <article key={material.title} className="flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden border border-black/10">
                  <Image src={material.image} alt={material.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="pt-4">
                  <h3 className="serif-display text-3xl leading-tight text-brand-olive">{material.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-olive/75">{material.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atelier-close">
        <div className="editorial-container atelier-close__inner">
          <div className="atelier-close__copy">
            <h2 className="serif-display">
              Discover the collection or begin a custom commission.
            </h2>
            <p>
              The atelier offers a deeper understanding of the craft behind
              the work. The next step is to explore the collection or move
              into a more personal custom experience.
            </p>
          </div>

          <div className="atelier-close__actions">
            <Link href="/shop" className="btn-light">
              Shop the Collection
            </Link>
            <Link href="/custom" className="btn-outline-light">
              Begin a Custom Hat
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
