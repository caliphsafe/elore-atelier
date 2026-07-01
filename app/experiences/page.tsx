import Image from "next/image";
import Link from "next/link";

const offerings = [
  {
    title: "Hat-Making Experience",
    label: "Introductory Session",
    duration: "Single-session format",
    capacity: "Individuals or small groups",
    outcome: "Create and personalize your own hat",
    description:
      "A hands-on experience designed for guests who want to step inside the atelier, learn the basics of hat making, and leave with something personal.",
    image: "/images/experiences/hat-making.jpg",
    alt: "ELÖRE hat-making experience"
  },
  {
    title: "Two-Day Hat-Making Workshop",
    label: "Immersive Training",
    duration: "Two-day format",
    capacity: "Up to 15 participants",
    outcome: "Leave with one felt hat and one straw hat",
    description:
      "A deeper workshop for guests who want to learn the process in a more complete way, from material direction and shaping to finishing details.",
    image: "/images/experiences/two-day-workshop.jpg",
    alt: "ELÖRE two-day hat-making workshop"
  },
  {
    title: "Private Atelier Experience",
    label: "Private Booking",
    duration: "Custom format",
    capacity: "Individuals, groups, teams, and events",
    outcome: "A tailored creative experience",
    description:
      "A private atelier experience for special occasions, creative teams, intimate gatherings, brand activations, or guests seeking a more personal format.",
    image: "/images/experiences/private-atelier.jpg",
    alt: "ELÖRE private atelier experience"
  }
];

const workshopAgenda = [
  {
    day: "Day One",
    title: "Foundation, Material, and Shape",
    points: [
      "Introduction to hat-making tools and materials",
      "Felt and straw material overview",
      "Understanding crown, brim, proportion, and silhouette",
      "Beginning the first hat form"
    ]
  },
  {
    day: "Day Two",
    title: "Finishing, Detail, and Final Presentation",
    points: [
      "Refining shape and fit",
      "Trim, band, and finishing decisions",
      "Final shaping and styling guidance",
      "Guests leave with one felt hat and one straw hat"
    ]
  }
];

const included = [
  "Guided instruction inside the atelier",
  "Hands-on making and finishing process",
  "Material and silhouette guidance",
  "One felt hat and one straw hat for two-day workshop participants",
  "Private and group formats available",
  "Airbnb Experiences booking option once active"
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
                Learn the craft of hat making inside the atelier.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
                ELÖRE Experiences are designed for guests who want more than a
                finished product. Through workshops, private sessions, and
                immersive training, visitors are invited into the process of
                shaping, finishing, and creating a hat by hand.
              </p>
            </div>

            <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                Experience Snapshot
              </p>

              <div className="mt-5 grid gap-5 text-sm leading-7 text-brand-ink/72">
                <div>
                  <p className="text-brand-ink">Workshop Capacity</p>
                  <p>Up to 15 participants</p>
                </div>

                <div>
                  <p className="text-brand-ink">Two-Day Workshop Outcome</p>
                  <p>Each guest leaves with one felt hat and one straw hat</p>
                </div>

                <div>
                  <p className="text-brand-ink">Booking Paths</p>
                  <p>Direct inquiry and Airbnb Experiences</p>
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
                  href="#"
                  className="inline-flex justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Airbnb Experiences
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
                  A tactile, personal, and memorable introduction to the craft.
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
              Experiences built for guests, groups, and deeper creative learning.
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
              <p className="eyebrow">Two-Day Workshop</p>

              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
                A deeper training experience with a finished result.
              </h2>

              <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
                The two-day workshop is the most complete experience format.
                It gives guests time to understand the materials, learn the
                process, and leave with two completed pieces: one felt hat and
                one straw hat.
              </p>

              <div className="mt-8 rounded-luxe border thin-border bg-[#f7f1ea] p-6 shadow-soft">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                  Workshop Limit
                </p>
                <p className="serif-display mt-3 text-4xl leading-tight text-brand-ink">
                  Up to 15 people
                </p>
                <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                  The experience is intentionally limited to keep the format
                  hands-on, personal, and manageable for each participant.
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
                  Book directly or through Airbnb Experiences.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Guests can inquire directly through the ELÖRE website for
                  workshops, private sessions, and group bookings. Once the
                  Airbnb Experiences listing is active, visitors will also be
                  able to book there.
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
                  href="#"
                  className="inline-flex w-fit justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Airbnb Experiences
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
