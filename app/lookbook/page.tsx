import Link from "next/link";

const looks = [
  {
    title: "Look One",
    subtitle: "Structured silhouette with soft tonal contrast.",
    panel: "bg-[linear-gradient(135deg,#ead8c4_0%,#c9ae90_100%)]"
  },
  {
    title: "Look Two",
    subtitle: "A quieter form built around texture and restraint.",
    panel: "bg-[linear-gradient(135deg,#f3e8db_0%,#dcc6aa_100%)]"
  },
  {
    title: "Look Three",
    subtitle: "A deeper mood shaped through shadow and line.",
    panel: "bg-[linear-gradient(135deg,#53660b_0%,#253000_100%)]"
  },
  {
    title: "Look Four",
    subtitle: "Refined proportions with a modern editorial tone.",
    panel: "bg-[linear-gradient(135deg,#d8c0a3_0%,#b3916c_100%)]"
  },
  {
    title: "Look Five",
    subtitle: "Minimal styling that lets silhouette lead.",
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
              Editorial imagery shaped to give the collection atmosphere, texture, and presence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The lookbook presents ELÖRE through mood, styling, proportion, and
              visual rhythm—allowing each piece to live inside a richer fashion context.
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
              <p className="eyebrow">Campaign Notes</p>
              <h2 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
                The visual language should feel cinematic, tactile, and quietly bold.
              </h2>
              <p className="mt-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
                Photography on this page should highlight movement, shape, texture,
                and restraint. The goal is to create an atmosphere around the hats,
                not simply document them.
              </p>
            </div>

            <div className="mt-8 border-t thin-border pt-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                Best Uses
              </p>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-brand-ink/72">
                <p>Editorial portraits with strong styling</p>
                <p>Close-ups showing trim, felt, and texture</p>
                <p>Full-body images with negative space</p>
                <p>Moody studio or outdoor campaign scenes</p>
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
              A gallery built around image, silhouette, and mood.
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
              Styling Direction
            </p>
            <h2 className="serif-display mt-4 text-3xl leading-tight text-white md:text-4xl">
              Let the silhouette lead, then let the styling support it.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/80 md:text-base md:leading-8">
              The strongest lookbook images will feel composed without appearing
              overworked. A clear shape, thoughtful styling, and controlled mood
              are what give the collection its editorial presence.
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
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_1fr] lg:p-12">
            <div>
              <p className="eyebrow">How to Populate This Page</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                The lookbook works best when it mixes scale, detail, and atmosphere.
              </h2>
            </div>

            <div className="grid gap-4 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
              <p>
                Use a combination of hero portraits, full-body fashion shots,
                close-up detail frames, and negative-space compositions so the page
                feels paced like an editorial story rather than a product list.
              </p>
              <p>
                The strongest sequence usually starts with a dominant opening image,
                then alternates between wide, close, and mood-based frames to keep
                the eye moving while preserving a sense of calm.
              </p>
              <p>
                As real photography is added, these placeholder panels can be
                replaced with campaign images, studio portraits, or styled
                collection imagery.
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
                  Move from editorial inspiration into the collection or a custom commission.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  The lookbook builds mood and desire. From here, visitors should
                  be able to shop the collection directly or begin a more personal custom journey.
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
