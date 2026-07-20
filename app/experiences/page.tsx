import Image from "next/image";
import Link from "next/link";

const offerings = [
  {
    title: "Private Workshop",
    label: "Single Guest",
    duration: "Guided workshop format",
    capacity: "One person",
    outcome: "Create and personalize a custom hat",
    description:
      "A guided atelier experience for one guest, shaped around material, silhouette, and personal direction. No previous experience is needed.",
    image: "/images/experiences/hat-making.jpg",
    alt: "ELÖRE private hat-making workshop"
  },
  {
    title: "Couples Workshop",
    label: "Two People",
    duration: "Guided workshop format",
    capacity: "Two people",
    outcome: "Create a shared experience and finished hats",
    description:
      "A two-person workshop designed for couples or pairs who want a hands-on creative experience inside the atelier.",
    image: "/images/experiences/two-day-workshop.jpg",
    alt: "ELÖRE couples hat-making workshop"
  },
  {
    title: "Group Workshop",
    label: "Small Group",
    duration: "Guided workshop format",
    capacity: "5–10 people",
    outcome: "A hands-on group experience",
    description:
      "A guided workshop for small groups, creative gatherings, and private events. Pricing varies based on custom hat costs and selected materials.",
    image: "/images/experiences/private-atelier.jpg",
    alt: "ELÖRE group hat-making workshop"
  }
];

const workshopAgenda = [
  {
    day: "Step One",
    title: "Material, Shape, and Direction",
    points: [
      "Introduction to hat-making tools and materials",
      "Guidance on felt, straw, trim, and finishing options",
      "Selecting crown, brim, proportion, and silhouette",
      "Beginning the custom hat-making process"
    ]
  },
  {
    day: "Step Two",
    title: "Finishing, Detail, and Final Form",
    points: [
      "Refining shape and fit",
      "Selecting trim, band, and finishing details",
      "Final shaping and styling guidance",
      "Completing a piece shaped by hand"
    ]
  }
];

const included = [
  "Guided instruction inside the atelier",
  "Hands-on making and finishing process",
  "Material and silhouette guidance",
  "Private, couples, and group workshop formats",
  "Group workshops available for 5–10 people",
  "No previous hat-making experience needed"
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="px-5 pb-10 pt-10 md:px-8 md:pb-14 md:pt-14 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow">Experiences</p>

              <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
                Guided hat-making workshops inside the atelier.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
                ELÖRE Experiences invite guests into the process of shaping,
                finishing, and creating a hat by hand. Private, couples, and
                group workshops are available, and no previous experience is needed.
              </p>
            </div>

            <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                Experience Snapshot
              </p>

              <div className="mt-5 grid gap-5 text-sm leading-7 text-brand-ink/72">
                <div>
                  <p className="text-brand-ink">Workshop Formats</p>
                  <p>Private, couples, and group sessions</p>
                </div>

                <div>
                  <p className="text-brand-ink">Group Capacity</p>
                  <p>5–10 people</p>
                </div>

                <div>
                  <p className="text-brand-ink">Pricing</p>
                  <p>Varies based on custom hat costs and selected materials</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                >
                  Inquire to Book
                </Link>

                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="editorial-container">
          <div className="relative min-h-[420px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[560px]">
            <Image
              src="/images/experiences/hero.jpg"
              alt="ELÖRE Atelier hat-making experience"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="max-w-2xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                  Inside the Atelier
                </p>
                <h2 className="serif-display mt-4 text-4xl leading-tight text-white md:text-6xl">
                  A tactile and memorable introduction to the craft.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="editorial-container">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">Choose Your Format</p>

            <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
              Experiences for individuals, couples, and small groups.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {offerings.map((offering) => (
              <article
                key={offering.title}
                className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
              >
                <div className="relative min-h-[360px] overflow-hidden">
                  <Image
                    src={offering.image}
                    alt={offering.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-mocha">
                    {offering.label}
                  </p>

                  <h3 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
                    {offering.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                    {offering.description}
                  </p>

                  <div className="mt-6 grid gap-3 border-t thin-border pt-5 text-sm leading-6 text-brand-ink/72">
                    <p>
                      <span className="text-brand-ink">Duration:</span>{" "}
                      {offering.duration}
                    </p>
                    <p>
                      <span className="text-brand-ink">Capacity:</span>{" "}
                      {offering.capacity}
                    </p>
                    <p>
                      <span className="text-brand-ink">Outcome:</span>{" "}
                      {offering.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Guided Workshop</p>

              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
                A hands-on experience shaped around the craft.
              </h2>

              <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
                Each workshop introduces guests to the materials, tools, and
                decisions behind a handcrafted hat. Pricing varies based on the
                custom hat costs, selected materials, and workshop format.
              </p>

              <div className="mt-8 rounded-luxe border thin-border bg-[#f7f1ea] p-6 shadow-soft">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                  Group Format
                </p>
                <p className="serif-display mt-3 text-4xl leading-tight text-brand-ink">
                  5–10 people
                </p>
                <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                  Group workshops are kept intimate so each guest can receive
                  guidance throughout the making process.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {workshopAgenda.map((agenda) => (
                <div
                  key={agenda.day}
                  className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8"
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                    {agenda.day}
                  </p>

                  <h3 className="serif-display mt-3 text-4xl leading-tight text-brand-ink">
                    {agenda.title}
                  </h3>

                  <div className="mt-6 grid gap-3">
                    {agenda.points.map((point) => (
                      <div
                        key={point}
                        className="flex gap-3 border-t thin-border pt-3 text-sm leading-7 text-brand-ink/72 md:text-base"
                      >
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mocha" />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="relative min-h-[420px] overflow-hidden rounded-luxe border thin-border shadow-soft">
                <Image
                  src="/images/experiences/materials.jpg"
                  alt="ELÖRE hat-making materials"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-luxe border thin-border olive-panel p-6 text-white shadow-soft md:p-8 lg:p-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">
                What Is Included
              </p>

              <h2 className="serif-display mt-4 text-4xl leading-tight md:text-5xl">
                Everything needed to enter the craft with confidence.
              </h2>
            </div>

            <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8 lg:p-10">
              <div className="grid gap-4">
                {included.map((item) => (
                  <div
                    key={item}
                    className="border-b thin-border pb-4 last:border-none last:pb-0"
                  >
                    <p className="text-sm leading-7 text-brand-ink/72 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-8 md:px-8 md:pb-28 lg:px-12">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="eyebrow">Booking</p>

                <h2 className="serif-display mt-4 max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Inquire directly with the atelier.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Guests can inquire directly through the ELÖRE website for
                  private workshops, couples workshops, and group bookings.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex w-fit justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                >
                  Inquire to Book
                </Link>

                <a
                  href="/contact"
                  className="inline-flex w-fit justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Contact the Atelier
                </a>

                <Link
                  href="/studio"
                  className="inline-flex w-fit text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
                >
                  Learn About the Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
