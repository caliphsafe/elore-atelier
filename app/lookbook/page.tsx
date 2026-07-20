import Link from "next/link";

const looks = [
  {
    title: "Summer Collection",
    subtitle: "Warm-weather forms shaped through natural texture and ease.",
    panel: "bg-[linear-gradient(135deg,#ead8c4_0%,#c9ae90_100%)]"
  },
  {
    title: "Signature Collection",
    subtitle: "Recognizable Elöre silhouettes with sculptural character.",
    panel: "bg-[linear-gradient(135deg,#f3e8db_0%,#dcc6aa_100%)]"
  },
  {
    title: "Custom Design",
    subtitle: "One-of-one pieces shaped through personal direction and craft.",
    panel: "bg-[linear-gradient(135deg,#53660b_0%,#253000_100%)]"
  },
  {
    title: "Studio Detail",
    subtitle: "Material, trim, and finishing moments from the atelier.",
    panel: "bg-[linear-gradient(135deg,#d8c0a3_0%,#b3916c_100%)]"
  },
  {
    title: "Favorite Forms",
    subtitle: "Selected hats presented through presence, proportion, and style.",
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
              Selected hats, silhouettes, and details from Elöre Atelier.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The lookbook presents favorite pieces through styling, proportion,
              texture, and presence, offering a closer view of the collection and
              the craft behind it.
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
              <p className="eyebrow">The Edit</p>
              <h2 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
                A curated view of the collection through form, texture, and style.
              </h2>
              <p className="mt-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
                Each image offers a different way into the work: the silhouette,
                the material, the finish, and the relationship between the hat
                and the person wearing it.
              </p>
            </div>

            <div className="mt-8 border-t thin-border pt-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                Featured Here
              </p>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-brand-ink/72">
                <p>Selected hats from the collection</p>
                <p>Styled portraits and full looks</p>
                <p>Close details of material and trim</p>
                <p>Signature silhouettes unique to Elöre</p>
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
              Favorite pieces from the atelier.
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
              Collection Mood
            </p>
            <h2 className="serif-display mt-4 text-3xl leading-tight text-white md:text-4xl">
              Sculptural hats shaped for presence, character, and personal expression.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/80 md:text-base md:leading-8">
              The lookbook brings together favorite pieces selected for their
              proportions, textures, and ability to carry a distinct point of view.
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
              <p className="eyebrow">Selected by Salomé</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Favorite hats, details, and silhouettes gathered in one place.
              </h2>
            </div>

            <div className="grid gap-4 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
              <p>
                Each look reflects the language of Elöre: handcrafted form,
                thoughtful materials, and a silhouette that becomes part of the
                person wearing it.
              </p>
              <p>
                The collection is presented through moments of scale, texture,
                movement, and detail, allowing each piece to be experienced from
                more than one perspective.
              </p>
              <p>
                As new favorites are selected, the lookbook can continue to grow
                with the atelier, the collection, and the stories carried by each hat.
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
                  Move from the lookbook into the collection or a custom commission.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Explore finished pieces, discover the studio, or begin a custom
                  design conversation shaped around your own story.
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
