import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    title: "Shape",
    text: "Every silhouette is refined through proportion, balance, and the character of the material."
  },
  {
    title: "Material",
    text: "Fine beaver and rabbit felts, Panama straw, silk, leather, and natural fibers are selected for beauty, durability, and character."
  },
  {
    title: "Detail",
    text: "Edge work, sanding, trim, and habillage complete each piece with patience and care."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Material",
    text: "Each hat begins with natural materials selected for integrity, texture, and lasting presence."
  },
  {
    number: "02",
    title: "Blocking",
    text: "Felt is steamed and shaped by hand over wooden blocks, allowing the form to emerge gradually."
  },
  {
    number: "03",
    title: "Finishing",
    text: "The silhouette is refined, each edge is cut and sanded, and the final habillage brings the piece to life."
  }
];

export default function StudioPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-14">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">Studio</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A creative studio and shop in Downtown Boston where every hat is made by hand.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The studio is where ideas are transformed into heirloom pieces
              through patience, precision, and care.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-6">
        <div className="editorial-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[560px]">
            <Image
              src="/images/studio/workspace.jpg"
              alt="ELÖRE Atelier studio workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <p className="eyebrow">The Studio</p>
            <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
              More than a workspace, the studio is where each collection, commission, and collaboration begins.
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
              Guided by the belief that creating by hand is an experience worth
              preserving, the studio brings together tradition, creativity, and
              community through the language of millinery.
            </p>
            <p className="mt-5 text-base leading-8 text-brand-ink/72 md:text-lg">
              Every gesture is performed with patience, allowing the material to
              guide the final form. No two hats are ever exactly alike.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Studio Principles</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              The elements that shape the work.
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
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div>
              <p className="eyebrow">The Creative Process</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Each finished piece is not simply designed — it is discovered.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                For Salome, the process itself is the greatest source of
                inspiration. Every step carries intention, from selecting the
                material to steaming, shaping, refining, and completing the final
                details.
              </p>
            </div>

            <div className="grid gap-4">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[1.5rem] border thin-border bg-white p-5 md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <p className="serif-display text-3xl leading-none text-brand-mocha">
                      {step.number}
                    </p>
                    <div>
                      <h3 className="text-sm uppercase tracking-[0.24em] text-brand-ink">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-brand-ink/70">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[440px]">
            <Image
              src="/images/studio/materials.jpg"
              alt="ELÖRE Atelier materials and tools"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <p className="eyebrow">Material Language</p>
            <h2 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
              Texture and finish are part of the story.
            </h2>
            <p className="mt-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
              Each material is allowed to retain its natural texture and
              individuality, giving every hat its own distinct presence.
            </p>
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
                  Discover the collection or begin a custom commission.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  The studio offers a deeper understanding of the craft behind
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
