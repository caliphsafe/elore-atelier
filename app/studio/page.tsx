import Link from "next/link";

const principles = [
  {
    title: "Shape",
    text: "Every hat begins with feeling, memory, texture, landscape, or a story waiting to be told."
  },
  {
    title: "Material",
    text: "Fine felts, straw, silk, leather, and natural fibers are selected for beauty, durability, and character."
  },
  {
    title: "Detail",
    text: "Edges, trims, habillage, and finishing touches are completed with patience and intention."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Material Selection",
    text: "Each hat begins with natural materials chosen for their integrity, texture, and distinct presence."
  },
  {
    number: "02",
    title: "Blocking & Shaping",
    text: "The material is steamed and shaped by hand over wooden blocks, allowing the form to emerge through craft."
  },
  {
    number: "03",
    title: "Finishing",
    text: "The silhouette is refined, each edge is completed, and the final habillage brings the piece to life."
  }
];

export default function StudioPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">Studio</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A creative studio and shop where every hat is handcrafted from beginning to end.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              Located in Downtown Boston, Elöre Atelier is where ideas are
              transformed into heirloom pieces through patience, precision, and care.
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
            <p className="eyebrow">Creative Environment</p>
            <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
              Where imagination and material meet.
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
              The studio is more than a workspace. Every collection, custom
              commission, and collaboration begins here, guided by the belief
              that creating by hand is an experience worth preserving.
            </p>
            <p className="mt-5 text-base leading-8 text-brand-ink/72 md:text-lg">
              For Salomé, the process itself is the greatest source of
              inspiration. As each piece evolves, it becomes a quiet dialogue
              between imagination, material, and the person who will wear it.
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
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div>
              <p className="eyebrow">Process</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                From natural material to finished form.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                Creating a hat is a journey. Every step carries intention—from
                selecting the material to steaming the felt, shaping it over
                wooden blocks, refining the silhouette, sanding every edge, and
                completing the final details.
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
          <div className="rounded-luxe border thin-border bg-[linear-gradient(135deg,#f1e6d8_0%,#d6bea2_100%)] shadow-soft">
            <div className="aspect-[16/10] w-full rounded-luxe" />
          </div>

          <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <p className="eyebrow">Material Language</p>
            <h2 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
              Texture and finish are part of the story.
            </h2>
            <p className="mt-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
              Elöre works primarily with fine beaver and rabbit felts,
              handwoven Panama straw, silk, leather, and natural fibers chosen
              for their integrity and timeless quality. Each material is allowed
              to retain its natural character, giving every hat its own presence.
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
                  Discover the collection or begin a custom commission.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  The studio offers a deeper understanding of the care behind
                  the work. From here, explore finished pieces or begin a more
                  personal custom experience.
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
