import Link from "next/link";
import { ImageSlot } from "@/components/common/image-slot";

const processSteps = [
  "Selecting and preparing natural materials",
  "Steaming and blocking the hat by hand",
  "Sculpting and refining the silhouette",
  "Cutting, sanding, and finishing each edge",
  "Completing the habillage — the interior details and final finishing touches"
];

export default function StudioPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">The Studio</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A creative studio and shop in Downtown Boston where every hat is handcrafted from beginning to end.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The studio is where ideas are transformed into heirloom pieces through patience, precision, and care.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImageSlot
            src="/images/studio-workspace.jpg"
            label="Elöre Atelier studio workspace"
            className="aspect-[4/5] rounded-luxe border thin-border shadow-soft"
          />

          <div className="max-w-2xl">
            <p className="eyebrow">Elöre Atelier</p>
            <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
              Every collection, custom commission, and collaboration begins here.
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
              Elöre Atelier is a creative studio and shop located in Downtown Boston where every hat is handcrafted from beginning to end.
            </p>
            <p className="mt-5 text-base leading-8 text-brand-ink/72 md:text-lg">
              The studio is more than a workspace — it is where ideas are transformed into heirloom pieces through patience, precision, and care. Every collection, custom commission, and collaboration begins here, guided by the belief that creating by hand is an experience worth preserving.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div>
              <p className="eyebrow">The Creative Process</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Creating a hat is a journey.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                For Salomé, the process itself is the greatest source of inspiration. Every step carries intention — from selecting the material to steaming the felt, shaping it over wooden blocks, refining the silhouette, sanding every edge, and completing the final habillage.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                As each piece evolves, it becomes a quiet dialogue between imagination and material. The person who will eventually wear the hat is never far from mind. Their story becomes part of the making, shaping every decision along the way.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                Each finished piece is not simply designed — it is discovered.
              </p>
            </div>

            <ImageSlot
              src="/images/studio-process.jpg"
              label="Elöre Atelier hat-making process"
              className="min-h-[420px] rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <ImageSlot
            src="/images/studio-materials.jpg"
            label="Elöre Atelier natural materials"
            className="min-h-[420px] rounded-luxe border thin-border shadow-soft"
          />

          <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <p className="eyebrow">Materials & Craftsmanship</p>
            <h2 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
              Every Elöre hat begins with exceptional natural materials.
            </h2>
            <p className="mt-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
              The studio works primarily with fine beaver and rabbit felts, handwoven Panama straw, silk, leather, and other natural fibers sourced for their integrity and timeless quality.
            </p>
            <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
              Rather than relying on industrial shortcuts, each material is allowed to retain its natural texture and individuality, giving every hat its own distinct presence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <ImageSlot
              src="/images/studio-tools.jpg"
              label="Elöre Atelier signature hat blocks and tools"
              className="min-h-[360px] rounded-[1.5rem]"
            />

            <div className="flex flex-col justify-center">
              <p className="eyebrow">The Hat-Making Process</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Each hat is made entirely by hand using traditional European millinery techniques learned in Florence, Italy.
              </h2>
              <div className="mt-6 grid gap-3">
                {processSteps.map((step) => (
                  <p key={step} className="text-sm leading-7 text-brand-ink/72 md:text-base">
                    • {step}
                  </p>
                ))}
              </div>
              <p className="mt-6 max-w-xl text-base leading-8 text-brand-ink/72">
                Every gesture is performed with patience, allowing the material to guide the final form. No two hats are ever exactly alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-luxe olive-panel p-6 shadow-soft md:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
              Design Philosophy
            </p>
            <h2 className="serif-display mt-4 text-3xl leading-tight text-white md:text-4xl">
              Every hat begins with a feeling. A memory. A texture. A landscape. A story waiting to be told.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/80 md:text-base md:leading-8">
              From there, Salomé translates emotion into form — balancing sculptural silhouettes with timeless elegance to create pieces that feel both contemporary and enduring.
            </p>
          </div>

          <ImageSlot
            src="/images/studio-finished.jpg"
            label="Finished Elöre Atelier hat"
            className="min-h-[420px] rounded-luxe border thin-border shadow-soft"
          />
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="eyebrow">What Makes Elöre Unique</p>
                <h2 className="serif-display mt-4 max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  At the heart of every Elöre creation are exclusive signature hat blocks designed specifically for the brand.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  These custom forms create silhouettes that are uniquely Elöre — recognizable through their proportions, elegance, and sculptural character.
                </p>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Every hat carries the quiet imprint of the hands that made it and the story it was created to tell.
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
