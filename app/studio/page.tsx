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
      <section className="px-5 pb-8 pt-8 md:px-8 md:pb-10 md:pt-10 lg:px-12 lg:pb-12">
        <div className="editorial-container">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
            <div className="flex flex-col justify-between rounded-luxe border thin-border bg-white/78 p-6 shadow-soft backdrop-blur md:p-8 lg:p-10">
              <div>
                <h1 className="serif-display max-w-4xl text-5xl leading-[0.92] tracking-hero text-brand-ink sm:text-6xl md:text-7xl lg:text-[5.15rem]">
                  A creative atelier and shop in Downtown Boston where timeless pieces are transformed.
                </h1>
              </div>

              <div className="mt-8 border-t thin-border pt-6 md:mt-10 md:pt-7">
                <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-5xl lg:text-6xl">
                  The atelier is more than a workspace.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
                  Every Elöre hat begins in the atelier where tradition is practiced,
                  materials are transformed, and craftsmanship is given the time it
                  deserves. Here, every step of the process is carried out by hand,
                  honoring generations of techniques while shaping a new future for
                  the craft.
                </p>
              </div>
            </div>

            <div className="relative min-h-[430px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[620px] lg:min-h-[720px]">
              <Image
                src="/images/studio/workspace.jpg"
                alt="ELÖRE Atelier workspace in Downtown Boston"
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
            <div className="grid gap-7 p-6 md:p-8 lg:p-10">
              <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
                <h2 className="serif-display max-w-3xl text-4xl leading-tight text-brand-ink md:text-6xl">
                  The Process of a Handcrafted Hat
                </h2>
                <p className="max-w-3xl text-base leading-8 text-brand-ink/72 md:text-lg lg:pb-2">
                  Every step carries a story whether it’s from the designer or the
                  wearer. Every silhouette begins on a handcrafted wooden block,
                  where steam, pressure, and skilled hands shape each hat into its
                  distinctive form.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {processSteps.map((step) => (
                  <article
                    key={step.title}
                    className="flex h-full flex-col rounded-[1.5rem] border thin-border bg-white p-5 shadow-soft md:p-6"
                  >
                    <div className="mb-5 flex items-center justify-between border-b thin-border pb-4">
                      <span className="text-[10px] uppercase tracking-[0.28em] text-brand-mocha/75">
                        {step.number}
                      </span>
                      <span className="h-px w-12 bg-brand-mocha/20" />
                    </div>
                    <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
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
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container">
          <div className="mb-7 max-w-3xl md:mb-9">
            <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
              Timeless Materials
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {timelessMaterials.map((material) => (
              <article
                key={material.title}
                className="grid overflow-hidden rounded-luxe border thin-border bg-white shadow-soft md:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="relative min-h-[260px] overflow-hidden bg-[#f7f1ea] md:min-h-[340px]">
                  <Image
                    src={material.image}
                    alt={material.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 md:p-7">
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

      <section className="px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10 lg:px-12">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-7 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
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
