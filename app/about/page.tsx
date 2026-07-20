import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Craftsmanship",
    text: "Every Elöre piece is shaped by hand with patience, precision, and care."
  },
  {
    title: "Innovation",
    text: "The brand preserves traditional millinery while creating what comes next."
  },
  {
    title: "Storytelling",
    text: "Each hat carries a sense of identity, memory, material, and place."
  },
  {
    title: "Community",
    text: "Through collaborations and workshops, the craft is shared beyond the studio."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-14">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="max-w-4xl">
              <p className="eyebrow">About ELÖRE</p>
              <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
                A Boston-based handcrafted hat brand redefining modern millinery.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Elöre Atelier was founded by designer Salome Kopasz with a
                commitment to innovation, storytelling, and intentional design.
              </p>
            </div>

            <div className="mt-8 space-y-5 text-base leading-8 text-brand-ink/75 md:text-lg">
              <p>
                After studying Fashion Design in Boston, Salome discovered her
                passion for hat-making during a short class in New York — a moment
                that transformed her creative path.
              </p>
              <p>
                Captivated by the hands-on artistry of shaping felt, she pursued
                formal training at Schola Academy in Florence, Italy, where her
                love for craftsmanship deepened.
              </p>
              <p>
                What began as a personal creative pursuit became a mission to
                preserve and reimagine a dying art form. Meaning “to move forward,”
                Elöre represents the belief that tradition is not something we
                leave behind, but something we carry with us as we create what
                comes next.
              </p>
            </div>

            <div className="mt-10">
              <div className="mb-6 max-w-2xl">
                <p className="eyebrow">Brand Pillars</p>
                <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
                  Tradition, creativity, and community moving forward together.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-[1.5rem] border thin-border bg-white p-5 shadow-soft md:p-6"
                  >
                    <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                      {pillar.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[680px] lg:sticky lg:top-28">
            <Image
              src="/images/about/about-story.jpg"
              alt="Salome Kopasz, founder and designer of ELÖRE Atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/about/about-perspective.jpg"
                alt="ELÖRE Atelier handcrafted hat"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow">The ELÖRE Perspective</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Signature blocks, sculptural form, and a clear sense of identity.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Each Elöre piece is shaped on custom signature blocks unique to
                the brand, blending artistry and identity through proportions,
                elegance, and sculptural character.
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Through collaborations and workshops, Salome continues to share
                her craft and create a space where tradition, creativity, and
                community move forward together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <p className="eyebrow">Continue Exploring</p>
                <h2 className="serif-display mt-4 max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Discover the collection or step inside the studio.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Explore handcrafted pieces, learn more about the making
                  process, or begin a custom design conversation.
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
                <Link
                  href="/studio"
                  className="inline-flex w-fit text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
                >
                  Enter the Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
