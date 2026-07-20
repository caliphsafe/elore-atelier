import Image from "next/image";
import Link from "next/link"; 

const pillars = [
  {
    title: "Craftsmanship",
    text: "Every Elöre piece is shaped by hand with patience, precision, and care."
  },
  {
    title: "Individuality",
    text: "Each hat carries its own character through material, proportion, and the person who wears it."
  },
  {
    title: "Timeless Presence",
    text: "The work balances tradition with a modern point of view, creating pieces designed to endure."
  },
  {
    title: "Intentional Design",
    text: "From custom blocks to final finishing, every decision is made with purpose."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">About ELÖRE</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A Boston-based handcrafted hat brand redefining modern millinery.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              Elöre Atelier was founded by Salomé Kopasz, a designer committed
              to preserving and reimagining the art of hat-making through craft,
              storytelling, and intentional design.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6 text-base leading-8 text-brand-ink/75 md:text-lg">
            <p>
              After studying Fashion Design in Boston, Salomé discovered her
              passion for hat-making during a short class in New York. Captivated
              by the hands-on artistry of shaping felt, she pursued formal
              training at Schola Academy in Florence, Italy, where her love for
              craftsmanship deepened.
            </p>
            <p>
              What began as a personal creative pursuit became a mission to
              preserve and reimagine a dying art form. Meaning “to move forward,”
              Elöre embodies Salomé’s commitment to innovation, storytelling, and
              intentional design.
            </p>
            <p>
              Elöre represents the belief that tradition is not something we
              leave behind, but something we carry with us as we create what
              comes next. Each piece is shaped on custom signature blocks unique
              to the brand, blending artistry and identity.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-luxe border thin-border shadow-soft">
  <Image src="/images/about/about-story.jpg"  alt="ELÖRE Atelier brand story"  fill   className="object-cover"  />
</div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Brand Pillars</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              Built around craft, story, and forward movement.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[1.75rem] border thin-border bg-white p-6 shadow-soft"
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
      </section>

      <section className="section-pad">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem]">
  <Image src="/images/about/about-perspective.jpg"   alt="ELÖRE Atelier visual perspective"   fill    className="object-cover"  />
</div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow">The Meaning of ELÖRE</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                To move forward while carrying tradition with you.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Elöre is rooted in the idea that heritage and innovation can live
                together. The work honors traditional millinery while creating
                forms that feel personal, contemporary, and enduring.
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Through collaborations and workshops, Salomé continues to share
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
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="eyebrow">Next Steps</p>
                <h2 className="serif-display mt-4 max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Explore the collection or step inside the studio.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Discover finished pieces, learn more about the making process,
                  or begin a custom conversation shaped around your own story.
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
