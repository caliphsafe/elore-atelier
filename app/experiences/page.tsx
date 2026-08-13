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
      <section className="px-5 pb-6 pt-10 md:px-8 md:pb-8 md:pt-12 lg:px-12">
        <div className="editorial-container">
          <div className="max-w-7xl">
            <h1 className="serif-display max-w-none text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-6xl lg:whitespace-nowrap xl:text-[5.15rem]">
              Learn the craft of hat making inside the atelier.
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-8 text-brand-ink/72 md:text-lg">
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

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <h2 className="serif-display max-w-none text-4xl leading-tight text-white md:text-6xl lg:whitespace-nowrap">
                Discover the beauty of hat-making.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-14 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.44fr] lg:items-stretch">
            <div className="overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
              <div className="grid gap-8 p-6 md:p-8 lg:p-10 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
                      An experience shaped through material, form, and personal direction.
                    </h2>
                  </div>

                  <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border thin-border bg-white shadow-soft md:min-h-[360px] xl:min-h-[420px]">
                    <Image
                      src="/images/experiences/materials.jpg"
                      alt="ELÖRE hat-making materials"
                      fill
                      sizes="(max-width: 1280px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="rounded-[1.75rem] border thin-border bg-white p-6 shadow-soft md:p-7">
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                    What Is Included
                  </h3>

                  <div className="mt-6 grid gap-3">
                    {included.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.1rem] border thin-border bg-[#fbf8f4] px-4 py-4"
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

            <div className="relative min-h-[620px] overflow-hidden rounded-luxe border thin-border bg-brand-ink shadow-soft lg:min-h-full">
              <video
                className="h-full min-h-[620px] w-full object-cover"
                src="/videos/experiences/atelier-workshop.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="ELÖRE workshop process video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
