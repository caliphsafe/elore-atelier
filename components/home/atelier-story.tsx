import Link from "next/link";
import { ImageSlot } from "@/components/common/image-slot";

export function AtelierStory() {
  return (
    <section className="section-pad">
      <div className="editorial-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <ImageSlot
          src="/images/home-atelier.jpg"
          label="Salomé Kopasz and Elöre Atelier"
          className="aspect-[4/5] rounded-luxe border thin-border shadow-soft"
        />

        <div className="max-w-2xl">
          <p className="eyebrow">About the Founder</p>
          <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
            Salomé Kopasz carries modern millinery forward from Boston.
          </h2>

          <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
            After studying Fashion Design in Boston, Salomé discovered hat-making during a short class in New York. That moment shifted her creative path and led her to formal training at Schola Academy in Florence, Italy.
          </p>

          <p className="mt-5 text-base leading-8 text-brand-ink/72 md:text-lg">
            Meaning “to move forward,” Elöre embodies Salomé’s commitment to innovation, storytelling, and intentional design.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
            >
              Read About Elöre
            </Link>
            <Link
              href="/studio"
              className="rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
            >
              Enter the Studio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
