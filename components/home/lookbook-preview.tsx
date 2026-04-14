import Link from "next/link";

const panels = [
  "bg-[linear-gradient(135deg,#d9c4ab_0%,#b79774_100%)]",
  "bg-[linear-gradient(135deg,#f1e6d8_0%,#d3ba9d_100%)]",
  "bg-[linear-gradient(135deg,#4a5c0a_0%,#273300_100%)]",
];

export function LookbookPreview() {
  return (
    <section className="section-pad">
      <div className="editorial-container">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Lookbook</p>
          <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
            Editorial presentation with depth, restraint, and texture.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
          <div className={`rounded-luxe border thin-border shadow-soft ${panels[0]}`}>
            <div className="aspect-[5/6] w-full rounded-luxe" />
          </div>

          <div className="grid gap-5">
            <div className={`rounded-luxe border thin-border shadow-soft ${panels[1]}`}>
              <div className="aspect-[5/3] w-full rounded-luxe" />
            </div>

            <div className="rounded-luxe olive-panel p-8 shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
                Visual Direction
              </p>
              <p className="serif-display mt-4 max-w-md text-3xl leading-tight text-white md:text-4xl">
                Collection imagery should feel cinematic, tactile, and quietly bold.
              </p>
              <Link
                href="/lookbook"
                className="mt-6 inline-flex text-[11px] uppercase tracking-[0.26em] text-white/80 transition hover:text-white"
              >
                View Lookbook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
