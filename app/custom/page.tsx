import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We begin with your references, fit preferences, intended use, and personal direction."
  },
  {
    number: "02",
    title: "Design Direction",
    text: "Shape, materials, trim, color, and details are selected to create a unique vision."
  },
  {
    number: "03",
    title: "Craftsmanship",
    text: "Your piece is shaped, refined, and finished through a considered making process."
  },
  {
    number: "04",
    title: "Completion",
    text: "The final hat is prepared as a wearable piece shaped around your story."
  }
];

export default function CustomPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-14">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="max-w-4xl">
            <h1 className="serif-display text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A one-of-one hat shaped around your own visual language.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The custom process is designed for clients seeking something
              personal, intentional, and impossible to replicate.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[460px]">
            <Image
              src="/images/custom/hero.jpg"
              alt="ELÖRE custom hat design"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[1.75rem] border thin-border bg-white p-6 shadow-soft"
            >
              <p className="serif-display text-3xl text-brand-mocha">{step.number}</p>
              <h3 className="mt-4 text-[11px] uppercase tracking-[0.28em] text-brand-ink">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border olive-panel shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_1fr] lg:p-10">
            <div>
              <h2 className="serif-display text-4xl leading-tight text-white md:text-5xl">
                Begin your custom consultation.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/80">
                Share your vision, references, timeline, and fit needs. The
                atelier will guide the next steps.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:bg-[#f1e6d8]"
              >
                Submit Inquiry
              </Link>

              <Link
                href="/lookbook"
                className="inline-flex w-fit text-[11px] uppercase tracking-[0.26em] text-white/80 transition hover:text-white"
              >
                View Inspiration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
