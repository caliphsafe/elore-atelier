import Image from "next/image";
import Link from "next/link";
import { WorkshopBookingForm } from "@/components/experiences/workshop-booking-form";

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
      <section className="px-5 pb-5 pt-10 md:px-8 md:pb-6 md:pt-12 lg:px-12">
        <div className="editorial-container">
          <div className="max-w-7xl">
            <h1 className="serif-display text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-6xl xl:text-7xl xl:whitespace-nowrap">
              Learn the craft of hat making inside the atelier.
            </h1>

            <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-3xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Elöre Experiences invite guests into the timeless art of
                hat-making through private, couples, and group workshops. Guided
                by hand, each experience offers an intimate introduction to the
                craft, where tradition, creativity, and storytelling come
                together.
              </p>

              <Link
                href="#workshop-booking"
                className="inline-flex w-fit min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
              >
                Book an Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-5 md:px-8 md:py-6 lg:px-12">
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <h2 className="serif-display max-w-5xl text-4xl leading-tight text-white md:text-6xl xl:whitespace-nowrap">
                Discover the beauty of hat-making.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
            <div className="grid gap-6 p-5 md:p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
              <div className="grid gap-6">
                <div className="rounded-[1.5rem] bg-white p-6 shadow-soft md:p-8">
                  <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
                    An experience shaped through material, form, and personal
                    direction.
                  </h2>
                </div>

                <div className="grid gap-3 rounded-[1.5rem] bg-white p-6 shadow-soft md:p-7">
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                    What Is Included
                  </h3>

                  <div className="mt-2 grid gap-3">
                    {included.map((item) => (
                      <div
                        key={item}
                        className="border-b thin-border pb-3 last:border-none last:pb-0"
                      >
                        <p className="text-sm leading-7 text-brand-ink/72 md:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-[0.72fr_1fr] lg:grid-cols-[0.72fr_1fr]">
                <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] border thin-border bg-brand-ink shadow-soft md:min-h-[620px]">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      src="/videos/experiences/atelier-workshop.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] border thin-border shadow-soft md:min-h-[620px]">
                  <Image
                    src="/images/experiences/materials.jpg"
                    alt="ELÖRE hat-making materials"
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
