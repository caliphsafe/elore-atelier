import Link from "next/link";

const pillars = [
  {
    title: "Craftsmanship",
    text: "Every Elöre piece is shaped through handwork, patience, and respect for the material."
  },
  {
    title: "Forward Motion",
    text: "Elöre means to move forward: carrying tradition with us as we create what comes next."
  },
  {
    title: "Storytelling",
    text: "Each hat holds a sense of memory, identity, and the person it is ultimately made for."
  },
  {
    title: "Community",
    text: "Through collaborations and workshops, the studio creates space for craft to be shared."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">About Elöre</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A Boston-based handcrafted hat brand redefining modern millinery.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              Founded by designer Salomé Kopasz, Elöre Atelier is rooted in craftsmanship, storytelling, and intentional design.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6 text-base leading-8 text-brand-ink/75 md:text-lg">
            <p>
              Salomé Kopasz is the founder and designer behind Elöre Atelier, a Boston-based handcrafted hat brand redefining the art of modern millinery. After studying Fashion Design in Boston, Salomé discovered her passion for hat-making during a short class in New York — a moment that transformed her creative path.
            </p>
            <p>
              Captivated by the hands-on artistry of shaping felt, she pursued formal training at Schola Academy in Florence, Italy, where her love for craftsmanship deepened. What began as a personal creative pursuit became a mission to preserve and reimagine a dying art form.
            </p>
            <p>
              Meaning “to move forward,” Elöre embodies Salomé’s commitment to innovation, storytelling, and intentional design. It represents the belief that tradition is not something we leave behind, but something we carry with us as we create what comes next.
            </p>
            <p>
              Each Elöre piece is shaped on custom signature blocks unique to the brand, blending artistry and identity. Through collaborations and workshops, Salomé continues to share her craft — creating a space where tradition, creativity, and community move forward together.
            </p>
          </div>

          <div className="rounded-luxe border thin-border bg-[linear-gradient(135deg,#eadbca_0%,#d3ba9d_55%,#b89976_100%)] shadow-soft">
            <div className="aspect-[4/5] w-full rounded-luxe" />
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Brand Pillars</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              Built around movement, memory, and the handmade.
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
            <div className="rounded-[1.5rem] olive-panel min-h-[320px]" />

            <div className="flex flex-col justify-center">
              <p className="eyebrow">The Elöre Perspective</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Tradition is not left behind. It moves forward.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Elöre is guided by the belief that craft can hold memory while still making room for new silhouettes, new stories, and new forms of connection.
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                The work is personal, material, and carefully considered — created to become part of the person who wears it.
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
                <p className="eyebrow">Continue Exploring</p>
                <h2 className="serif-display mt-4 max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Visit the studio, browse the collection, or explore a guided workshop.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  The site is built to introduce the brand, reveal the process, and guide visitors toward the piece or experience that fits them.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/studio"
                  className="inline-flex w-fit rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
                >
                  Enter the Studio
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex w-fit rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Shop the Collection
                </Link>
                <Link
                  href="/experiences"
                  className="inline-flex w-fit text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
                >
                  View Experiences
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
