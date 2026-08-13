import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    title: "Material Selection",
    text: "Each element is chosen for its quality, character, and ability to stand the test of time. Each choice lays the foundation for a piece that is meant to be worn for years to come."
  },
  {
    title: "Shaping",
    text: "The crown and silhouette are sculpted by hand and molded by wooden blocks giving the hat its personality, balance, and overall presence."
  },
  {
    title: "Brimming and Sanding",
    text: "The brim is carefully refined through a brim cutter and sanding techniques that create softness and movement."
  },
  {
    title: "Sweatband",
    text: "The interior sweatband is fitted by hand for comfort and structure. This detail becomes an intimate part of the hat and often carries a personalized or artistic element."
  },
  {
    title: "Habillage",
    text: "Ribbon work, embroidery, burns, stitching, and symbolic adornments are added to complete the visual story of the piece."
  },
  {
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
      <section className="section-pad pb-6 pt-10 md:pb-8 md:pt-12">
        <div className="editorial-container">
          <div className="max-w-5xl">
            <h1 className="serif-display text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A creative atelier and shop in Downtown Boston where timeless pieces are transformed.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[560px]">
            <Image
              src="/images/studio/workspace.jpg"
              alt="ELÖRE Atelier workspace in Downtown Boston"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8 lg:p-10">
            <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
              The atelier is more than a workspace.
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
              Every Elöre hat begins in the atelier where tradition is practiced,
              materials are transformed, and craftsmanship is given the time it
              deserves. Here, every step of the process is carried out by hand,
              honoring generations of techniques while shaping a new future for
              the craft.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="editorial-container">
          <div className="grid gap-8 rounded-luxe border thin-border bg-[#f7f1ea] p-6 shadow-soft md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
                The Process of a Handcrafted Hat
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Every step carries a story whether it’s from the designer or the
                wearer. Every silhouette begins on a handcrafted wooden block,
                where steam, pressure, and skilled hands shape each hat into its
                distinctive form.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-[1.5rem] border thin-border bg-white p-5 shadow-soft md:p-6"
                >
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="editorial-container">
          <div className="mb-8 max-w-3xl">
            <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
              Timeless Materials
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {timelessMaterials.map((material) => (
              <article
                key={material.title}
                className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
              >
                <div className="relative min-h-[260px] overflow-hidden bg-[#f7f1ea] md:min-h-[320px]">
                  <Image
                    src={material.image}
                    alt={material.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                    {material.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                    {material.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <h2 className="serif-display max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Discover the collection or begin a custom commission.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  The atelier offers a deeper understanding of the craft behind
                  the work. The next step is to explore the collection or move
                  into a more personal custom experience.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex w-fit rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
                >
                  Shop the Collection
                </Link>
                <Link
                  href="/custom"
                  className="inline-flex w-fit rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Begin a Custom Hat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
