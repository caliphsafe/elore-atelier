import Image from "next/image";
import Link from "next/link";
import { WorkshopBookingForm } from "@/components/experiences/workshop-booking-form";

const offerings = [
  {
    title: "Private Workshop",
    duration: "Guided workshop format",
    capacity: "One person",
    outcome: "Create a custom hat with personal direction",
    description:
      "A private hands-on workshop for one guest. No experience is needed; Salomé guides the process from material direction to finishing details.",
    image: "/images/experiences/hat-making.jpg",
    alt: "ELÖRE private hat-making workshop",
    bookingHref: "/experiences?workshop=private#workshop-booking"
  },
  {
    title: "Couples Workshop",
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
          <div className="max-w-5xl">
            <h1 className="serif-display text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              Learn the craft of hat making inside the atelier.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-brand-ink/72 md:text-lg">
              Elöre Experiences invite guests into the timeless art of hat-making
              through private, couples, and group workshops. Guided by hand, each
              experience offers an intimate introduction to the craft, where
              tradition, creativity, and storytelling come together.
            </p>

            <div className="mt-7">
              <Link
                href="#workshop-booking"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
              >
                Book an Experience
              </Link>
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
              <h2 className="serif-display max-w-2xl text-4xl leading-tight text-white md:text-6xl">
                Discover the beauty of hat-making.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container">
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
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
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
                    className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                  >
                    Book This Workshop
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-6 rounded-luxe border thin-border bg-[#f7f1ea] p-5 shadow-soft md:p-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:p-8">
            <div className="flex flex-col justify-between rounded-[1.75rem] bg-white p-6 shadow-soft md:p-8">
              <div>
                <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
                  An experience shaped through material, form, and personal direction.
                </h2>

                <div className="mt-8">
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                    What Is Included
                  </h3>

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
              </div>

              <div className="mt-8">
                <Link
                  href="#workshop-booking"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                >
                  Book an Experience
                </Link>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.72fr_1fr]">
              <div className="relative min-h-[520px] overflow-hidden rounded-[1.75rem] border thin-border bg-brand-ink shadow-soft lg:min-h-full">
                <video
                  className="h-full w-full object-cover"
                  src="/videos/experiences/atelier-workshop.mp4"
                  poster="/images/experiences/materials.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="ELÖRE hat-making workshop video"
                />
              </div>

              <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border thin-border shadow-soft lg:min-h-full">
                <Image
                  src="/images/experiences/materials.jpg"
                  alt="ELÖRE hat-making materials"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
