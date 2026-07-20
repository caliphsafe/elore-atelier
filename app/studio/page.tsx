import Link from "next/link";

const processSteps = [
  "Selecting and preparing natural materials",
  "Steaming and blocking the hat by hand",
  "Sculpting and refining the silhouette",
  "Cutting, sanding, and finishing each edge",
  "Completing the habillage, from interior details to final finishing touches"
];

const principles = [
  {
    title: "Shape",
    text: "Silhouette is treated as structure and emotion at once — each curve, crown, and brim chosen to create presence."
  },
  {
    title: "Material",
    text: "Fine beaver and rabbit felts, handwoven Panama straw, silk, leather, and natural fibers are selected for beauty, durability, and character."
  },
  {
    title: "Detail",
    text: "Trim, edge work, tonal variation, and habillage bring each piece into its final form without excess."
  }
];

export default function StudioPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">The Studio</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A creative studio and shop in Downtown Boston where every hat begins.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              Elöre Atelier is more than a workspace. It is where ideas are transformed into heirloom pieces through patience, precision, and care.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-luxe border thin-border bg-[linear-gradient(135deg,#e7d7c4_0%,#ceb08f_55%,#8f7359_100%)] shadow-soft">
            <div className="aspect-[4/5] w-full rounded-luxe" />
          </div>

          <div className="max-w-2xl">
            <p className="eyebrow">The Creative Process</p>
            <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
              Creating a hat is a journey.
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
              For Salomé, the process itself is the greatest source of inspiration. Every step carries intention — from selecting the material to steaming the felt, shaping it over wooden blocks, refining the silhouette, sanding every edge, and completing the final habillage.
            </p>
            <p className="mt-5 text-base leading-8 text-brand-ink/72 md:text-lg">
              As each piece evolves, it becomes a quiet dialogue between imagination and material. The person who will eventually wear the hat is never far from mind. Their story becomes part of the making, shaping every decision along the way.
            </p>
            <p className="mt-5 text-base leading-8 text-brand-ink/72 md:text-lg">
              Each finished piece is not simply designed — it is discovered.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Materials & Craftsmanship</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              Natural materials selected for beauty, durability, and character.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`rounded-[1.75rem] border thin-border p-6 shadow-soft ${
                  index === 2 ? "olive-panel text-white" : "bg-white"
                }`}
              >
                <h3
                  className={`text-[11px] uppercase tracking-[0.28em] ${
                    index === 2 ? "text-white/70" : "text-brand-mocha"
                  }`}
                >
                  {principle.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 2 ? "text-white/80" : "text-brand-ink/72"
                  }`}
                >
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div>
              <p className="eyebrow">The Hat-Making Process</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Made entirely by hand using traditional European millinery techniques.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                Learned in Florence, Italy, the process asks for patience. Every gesture allows the material to guide the final form, which is why no two hats are ever exactly alike.
              </p>
            </div>

            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[1.5rem] border thin-border bg-white p-5 md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <p className="serif-display text-3xl leading-none text-brand-mocha">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="text-sm leading-7 text-brand-ink/70">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-luxe border thin-border bg-[linear-gradient(135deg,#f1e6d8_0%,#d6bea2_100%)] shadow-soft">
            <div className="aspect-[16/10] w-full rounded-luxe" />
          </div>

          <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <p className="eyebrow">What Makes Elöre Unique</p>
            <h2 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
              Exclusive signature blocks create silhouettes that are uniquely Elöre.
            </h2>
            <p className="mt-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
              These custom forms define the studio’s proportions, elegance, and sculptural character. Combined with traditional craftsmanship, thoughtful materials, and a commitment to handmade artistry, each piece carries the quiet imprint of the hands that made it and the story it was created to tell.
            </p>
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
                  Discover the collection or join a guided experience.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  The studio offers a deeper understanding of the perspective behind the work. From here, visitors can explore finished pieces or step into the craft through a workshop.
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
                  href="/experiences"
                  className="inline-flex w-fit rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  View Experiences
                </Link>
                <Link
                  href="/lookbook"
                  className="inline-flex w-fit text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
                >
                  View the Lookbook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
