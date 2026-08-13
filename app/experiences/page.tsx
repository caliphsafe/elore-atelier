import Image from "next/image";
import Link from "next/link";
import { WorkshopBookingForm } from "@/components/experiences/workshop-booking-form";

const formats = [
  {
    title: "Private Workshop",
    detail: "One guest",
    text: "A personal session shaped around your taste, material direction, and final hat details.",
    href: "/experiences?workshop=private#workshop-booking"
  },
  {
    title: "Couples Workshop",
    detail: "Two people",
    text: "A shared creative experience for two people to explore silhouette, color, and handwork together.",
    href: "/experiences?workshop=couples#workshop-booking"
  },
  {
    title: "Group Workshop",
    detail: "5–10 people",
    text: "A guided atelier experience for gatherings, creative teams, celebrations, and special occasions.",
    href: "/experiences?workshop=group#workshop-booking"
  }
];

const journey = [
  {
    step: "01",
    title: "Choose the format",
    text: "Select a private, couples, or group workshop based on the kind of experience you want to create."
  },
  {
    step: "02",
    title: "Explore material and form",
    text: "Color, texture, silhouette, and material direction are introduced before the making begins."
  },
  {
    step: "03",
    title: "Shape by hand",
    text: "Guests are guided through the tactile process of working with form, steam, pressure, and detail."
  },
  {
    step: "04",
    title: "Leave with a story",
    text: "The experience becomes more than a workshop — it becomes a personal introduction to the craft."
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
      <section className="px-5 pb-7 pt-10 md:px-8 md:pb-9 md:pt-12 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-4xl">
              <h1 className="serif-display max-w-5xl text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl xl:whitespace-nowrap xl:text-[5.15rem]">
                Learn the craft of hat making inside the atelier.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Elöre Experiences invite guests into the timeless art of
                hat-making through private, couples, and group workshops. Guided
                by hand, each experience offers an intimate introduction to the
                craft, where tradition, creativity, and storytelling come together.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="#workshop-booking"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-7 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                >
                  Book an Experience
                </Link>
                <Link
                  href="#experience-flow"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-brand-ink px-7 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  See What Is Included
                </Link>
              </div>
            </div>

            <div className="grid gap-3 rounded-luxe border thin-border bg-white/78 p-4 shadow-soft backdrop-blur md:grid-cols-3 lg:p-5">
              {formats.map((format) => (
                <Link
                  key={format.title}
                  href={format.href}
                  className="group rounded-[1.35rem] border thin-border bg-[#f7f1ea] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                >
                  <p className="serif-display text-2xl leading-tight text-brand-ink">
                    {format.title}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-brand-mocha">
                    {format.detail}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/68">
                    {format.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-5 md:px-8 md:py-7 lg:px-12">
        <div className="editorial-container">
          <div className="relative min-h-[440px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[560px]">
            <Image
              src="/images/experiences/hero.jpg"
              alt="ELÖRE Atelier hat-making experience"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/18 to-black/5" />

            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-6 md:p-10 lg:p-12">
                <h2 className="serif-display max-w-5xl text-4xl leading-tight text-white md:text-6xl xl:whitespace-nowrap xl:text-[4.85rem]">
                  Discover the beauty of hat-making.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience-flow" className="px-5 py-8 md:px-8 md:py-11 lg:px-12">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 md:p-9 lg:p-11">
              <div className="max-w-3xl">
                <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
                  An experience shaped through material, form, and personal direction.
                </h2>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {journey.map((item) => (
                  <article
                    key={item.step}
                    className="rounded-[1.5rem] border thin-border bg-white p-5 shadow-soft"
                  >
                    <div className="flex items-start gap-4">
                      <span className="serif-display text-3xl leading-none text-brand-mocha">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="serif-display text-2xl leading-tight text-brand-ink">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-brand-ink/70">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4 border-t thin-border p-4 md:grid-cols-[0.82fr_1.18fr] lg:grid-cols-1 lg:border-l lg:border-t-0 lg:p-5">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border thin-border bg-brand-ink shadow-soft md:min-h-[560px] lg:min-h-[620px]">
                <video
                  className="h-full w-full object-cover"
                  src="/videos/experiences/atelier-workshop.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border thin-border shadow-soft md:min-h-[560px] lg:min-h-[320px]">
                <Image
                  src="/images/experiences/materials.jpg"
                  alt="ELÖRE hat-making materials"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-11 lg:px-12">
        <div className="editorial-container grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8 lg:sticky lg:top-28">
            <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-5xl">
              What is included
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-ink/72">
              The workshop is designed for guests to feel welcomed into the
              atelier while still experiencing the care, precision, and patience
              behind handmade millinery.
            </p>
            <div className="mt-7">
              <Link
                href="#workshop-booking"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-7 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
              >
                Request a Workshop Date
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div
                key={item}
                className="rounded-[1.35rem] border thin-border bg-[#f7f1ea] p-5 shadow-soft"
              >
                <p className="text-sm leading-7 text-brand-ink/75 md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
