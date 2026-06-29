import Link from "next/link";

export default function ExperiencesPage() {
  return (
    <section className="section-pad pt-12 md:pt-16">
      <div className="editorial-container">
        <div className="max-w-4xl">
          <p className="eyebrow">Experiences</p>
          <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
            Step inside the atelier and experience the craft of hat making.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
            ELÖRE offers hands-on hat-making experiences, private workshops, and
            immersive training designed for individuals, groups, and guests
            seeking a deeper connection to the craft.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
            >
              Inquire to Book
            </Link>

            <a
              href="#"
              className="inline-flex justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
            >
              Airbnb Experiences
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
