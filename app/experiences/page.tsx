import Image from "next/image";
import Link from "next/link";
import { WorkshopBookingForm } from "@/components/experiences/workshop-booking-form";

const offerings = [
  {
    title: "Private Workshop",
    label: "Single Guest",
    duration: "Guided workshop format",
    capacity: "One person",
    outcome: "Create a custom hat with personal direction",
    description:
      "A private hands-on workshop for one guest. No experience is needed; Salome guides the process from material direction to finishing details.",
    image: "/images/experiences/hat-making.jpg",
    alt: "ELÖRE private hat-making workshop",
    bookingHref: "/experiences?workshop=private#workshop-booking"
  },
  {
    title: "Couples Workshop",
    label: "Two People",
    duration: "Guided workshop format",
    capacity: "Two people",
    outcome: "A shared custom hat-making experience",
    description:
      "A creative session for two people to explore material, color, silhouette, and the process of shaping a hat by hand.",
    image: "/images/experiences/two-day-workshop.jpg",
    alt: "ELÖRE couples workshop",
    bookingHref: "/experiences?workshop=couples#workshop-booking"
  },
  {
    title: "Group Workshop",
    label: "Small Group",
    duration: "Guided workshop format",
    capacity: "5–10 people",
    outcome: "A hands-on studio experience for groups",
    description:
      "A guided workshop for groups, creative teams, gatherings, and special occasions. Pricing varies based on custom hat costs.",
    image: "/images/experiences/private-atelier.jpg",
    alt: "ELÖRE group workshop",
    bookingHref: "/experiences?workshop=group#workshop-booking"
  }
];

const included = [
  "Guided instruction inside the atelier",
  "Hands-on making and finishing process",
  "Material, color, and silhouette guidance",
  "Private, couples, and group formats available",
  "No previous experience needed",
  "Pricing varies based on custom hat costs"
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="px-5 pb-6 pt-10 md:px-8 md:pb-8 md:pt-12 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow">Experiences</p>

              <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
                Learn the craft of hat making inside the atelier.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Elöre Experiences invite guests into the process of creating by
                hand through private, couples, and group workshops guided inside
                the studio.
              </p>
            </div>

            <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                Experience Snapshot
              </p>

              <div className="mt-5 grid gap-5 text-sm leading-7 text-brand-ink/72">
                <div>
                  <p className="text-brand-ink">Formats</p>
                  <p>Private, couples, and group workshops</p>
                </div>

                <div>
                  <p className="text-brand-ink">Group Size</p>
                  <p>5–10 people for group workshops</p>
                </div>

                <div>
                  <p className="text-brand-ink">Experience Level</p>
                  <p>No previous experience needed</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <Link
                  href="#workshop-booking"
                  className="inline-flex justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                >
                  Book a Workshop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-4 md:px-8 md:py-6 lg:px-12">
        <div className="editorial-container">
          <div className="relative min-h-[420px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[540px]">
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

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">Choose Your Format</p>

            <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
              Guided workshops for single guests, couples, and small groups.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {offerings.map((offering) => (
              <article
                key={offering.title}
                className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
              >
                <div className="relative min-h-[320px] overflow-hidden">
                  <Image
                    src={offering.image}
                    alt={offering.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="flex h-full flex-col p-6 md:p-7">
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

                  <Link
                    href={offering.bookingHref}
                    className="mt-6 inline-flex justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                  >
                    Book This Workshop
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Workshop Process</p>

              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
                An experience shaped through material, form, and personal direction.
              </h2>

              <p className="mt-5 text-base leading-8 text-brand-ink/72 md:text-lg">
                Every workshop is guided step by step, from choosing materials
                and understanding silhouette to shaping, finishing, and bringing
                the final piece to life.
              </p>

              <div className="mt-7 rounded-luxe border thin-border bg-[#f7f1ea] p-6 shadow-soft">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                  Pricing
                </p>
                <p className="serif-display mt-3 text-4xl leading-tight text-brand-ink">
                  Varies by custom hat costs
                </p>
                <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                  Final pricing depends on the chosen format, materials, and
                  custom direction.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                  What Is Included
                </p>
                <div className="mt-6 grid gap-4">
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

      <WorkshopBookingForm />
    </>
  );
}
