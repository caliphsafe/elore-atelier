import Image from "next/image";
import Link from "next/link";

const offerings = [
  {
    title: "Hat-Making Experience",
    text: "A hands-on introduction to shaping, finishing, and personalizing your own hat through a guided atelier experience."
  },
  {
    title: "Two-Day Workshop",
    text: "Limited to 15 participants. Learn traditional techniques and leave with two handcrafted hats—one felt and one straw."
  },
  {
    title: "Private Events",
    text: "Private atelier sessions for individuals, groups, creative teams, and special occasions. Tailored experiences are available by request."
  }
];

export function CustomJourney() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="editorial-container">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">

          {/* IMAGE */}

          <div className="relative min-h-[560px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[720px]">
            <Image
              src="/images/home/experiences/experience.jpg"
              alt="ELÖRE Atelier Experiences"
              fill
              priority={false}
              sizes="(max-width:1024px) 100vw, 58vw"
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.30em] text-white/70">
                Atelier Experiences
              </p>

              <h2 className="serif-display mt-4 max-w-lg text-4xl leading-tight text-white md:text-6xl">
                Learn the craft from the people who live it.
              </h2>
            </div>
          </div>

          {/* CONTENT */}

          <div className="flex flex-col rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8 lg:p-10">

            <div>
              <p className="eyebrow">Experiences</p>

              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                More than shopping.
              </h2>

              <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
                ELÖRE invites guests beyond the storefront through immersive
                experiences that celebrate craftsmanship, creativity, and
                connection. Whether you're discovering hat making for the first
                time or looking for an in-depth workshop, each experience is
                designed to feel intimate, inspiring, and unforgettable.
              </p>
            </div>

            <div className="mt-10 grid gap-5">

              {offerings.map((offering) => (
                <div
                  key={offering.title}
                  className="border-b thin-border pb-5 last:border-none last:pb-0"
                >
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink">
                    {offering.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-brand-ink/72 md:text-base">
                    {offering.text}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/experiences"
                className="inline-flex justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
              >
                Explore Experiences
              </Link>

              <a
                href="#"
                className="inline-flex justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
              >
                Airbnb Experiences
              </a>

            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-brand-mocha">
              Workshops • Private Sessions • Creative Events
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
