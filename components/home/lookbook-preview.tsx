import Link from "next/link";
import { ImageSlot } from "@/components/common/image-slot";

export function LookbookPreview() {
  return (
    <section className="section-pad">
      <div className="editorial-container">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Lookbook</p>
          <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
            Favorite pieces, silhouettes, and details from Elöre Atelier.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
          <ImageSlot
            src="/images/home-lookbook-1.jpg"
            label="Elöre Atelier lookbook image"
            className="aspect-[5/6] rounded-luxe border thin-border shadow-soft"
          />

          <div className="grid gap-5">
            <ImageSlot
              src="/images/home-lookbook-2.jpg"
              label="Elöre Atelier lookbook detail"
              className="aspect-[5/3] rounded-luxe border thin-border shadow-soft"
            />

            <div className="rounded-luxe olive-panel p-8 shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
                Lookbook
              </p>
              <p className="serif-display mt-4 max-w-md text-3xl leading-tight text-white md:text-4xl">
                A curated view of the collection, selected through favorite hats and details.
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
