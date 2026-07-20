import Link from "next/link";

const looks = [
  {
    title: "Portraits",
    subtitle: "Faces, silhouettes, and favorite pieces selected for mood and presence.",
    panel: "bg-[linear-gradient(135deg,#ead8c4_0%,#c9ae90_100%)]"
  },
  {
    title: "Full Looks",
    subtitle: "Styled images that show how each hat lives with the person wearing it.",
    panel: "bg-[linear-gradient(135deg,#f3e8db_0%,#dcc6aa_100%)]"
  },
  {
    title: "Details",
    subtitle: "Close frames of trim, felt, straw, hands, texture, and finish.",
    panel: "bg-[linear-gradient(135deg,#53660b_0%,#253000_100%)]"
  },
  {
    title: "Movement",
    subtitle: "Images with motion, atmosphere, and real use beyond the studio.",
    panel: "bg-[linear-gradient(135deg,#d8c0a3_0%,#b3916c_100%)]"
  },
  {
    title: "Favorites",
    subtitle: "Three to four chosen images per hat can become the strongest lookbook sequence.",
    panel: "bg-[linear-gradient(135deg,#f5ede3_0%,#d9c0a2_100%)]"
  }
];

export default function LookbookPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">Lookbook</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A visual archive of favorite pieces, people, and details.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The lookbook presents Elöre through imagery — showing each hat in context, on the body, in motion, and through the details that make every piece distinct.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-luxe border thin-border bg-[linear-gradient(135deg,#e8d6c2_0%,#b79571_100%)] shadow-soft">
            <div className="aspect-[5/6] w-full rounded-luxe" />
          </div>

          <div className="flex flex-col justify-between rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <div>
              <p className="eyebrow">Image Direction</p>
              <h2 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
                The strongest images should let the hat, the person, and the story share the frame.
              </h2>
              <p className="mt-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
                This page works best when it mixes clean portraits, full-body styling, material details, studio moments, and images with negative space for a calm editorial rhythm.
              </p>
            </div>

            <div className="mt-8 border-t thin-border pt-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                Best Uses
              </p>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-brand-ink/72">
                <p>Model portraits wearing signature hats</p>
                <p>Full-body fashion shots with clean styling</p>
                <p>Detail frames showing trims, felt, straw, and finish</p>
                <p>Studio and environmental images that carry atmosphere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Featured Looks</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              A gallery built around silhouette, material, and mood.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {looks.map((look, index) => (
              <article
                key={look.title}
                className={`overflow-hidden rounded-luxe border thin-border shadow-soft ${
                  index === 2 ? "olive-panel text-white" : "bg-white"
                }`}
              >
                <div className={`aspect-[4/5] w-full ${index === 2 ? "" : look.panel}`} />
                <div className="p-6">
                  <p
                    className={`text-[11px] uppercase tracking-[0.28em] ${
                      index === 2 ? "text-white/70" : "text-brand-mocha"
                    }`}
                  >
                    {look.title}
                  </p>
                  <p
                    className={`mt-3 serif-display text-3xl leading-tight ${
                      index === 2 ? "text-white" : "text-brand-ink"
                    }`}
                  >
                    {look.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-luxe olive-panel p-6 shadow-soft md:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
              Layout Approach
            </p>
            <h2 className="serif-display mt-4 text-3xl leading-tight text-white md:text-4xl">
              The final lookbook can be arranged by hat, by model, or by story.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/80 md:text-base md:leading-8">
              Once Salomé selects favorite photos, three to four images per hat can be organized into a page that feels curated instead of crowded.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-luxe border thin-border bg-[linear-gradient(135deg,#f2e7da_0%,#d2b89a_100%)] shadow-soft">
              <div className="aspect-[4/5] w-full rounded-luxe" />
            </div>
            <div className="rounded-luxe border thin-border bg-[linear-gradient(135deg,#d8c2a8_0%,#9f8160_100%)] shadow-soft">
              <div className="aspect-[4/5] w-full rounded-luxe" />
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
                  Move from visual inspiration into the collection or the studio.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  The lookbook builds the visual world of Elöre. From here, visitors can shop a piece, learn about the studio, or explore guided experiences.
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
                  href="/studio"
                  className="inline-flex w-fit rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Enter the Studio
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
