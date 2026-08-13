import Image from "next/image";
import Link from "next/link";
import { WorkshopBookingForm } from "@/components/experiences/workshop-booking-form";
import { ExperienceVideo } from "@/components/experiences/experience-video";

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
      <section className="px-5 pb-5 pt-8 md:px-8 md:pb-6 md:pt-10 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <Link
                href="#workshop-booking"
                className="mb-7 inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-7 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
              >
                Book an Experience
              </Link>

              <h1 className="serif-display max-w-[84rem] text-5xl leading-[0.92] tracking-hero text-brand-ink md:text-6xl lg:text-[4.65rem] xl:whitespace-nowrap">
                Learn the craft of hat making inside the atelier.
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg lg:pb-2">
              Elöre Experiences invite guests into the timeless art of
              hat-making through private, couples, and group workshops. Guided
              by hand, each experience offers an intimate introduction to the
              craft, where tradition, creativity, and storytelling come
              together.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-5 md:px-8 md:py-6 lg:px-12">
        <div className="editorial-container">
          <div className="relative min-h-[430px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[590px]">
            <Image
              src="/images/experiences/hero.jpg"
              alt="ELÖRE Atelier hat-making experience"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/12 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
              <h2 className="serif-display max-w-[72rem] text-4xl leading-[0.95] text-white md:text-6xl lg:text-[5rem] xl:whitespace-nowrap">
                Discover the beauty of hat-making.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-stretch xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="rounded-luxe border thin-border bg-[#f7f1ea] p-5 shadow-soft md:p-8 lg:p-10">
              <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
                <h2 className="serif-display max-w-2xl text-4xl leading-tight text-brand-ink md:text-6xl">
                  An experience shaped through material, form, and personal
                  direction.
                </h2>

                <div className="rounded-[1.65rem] bg-white p-5 shadow-soft md:p-7">
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                    What Is Included
                  </h3>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {included.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.1rem] border thin-border bg-[#fbf8f4] px-4 py-3"
                      >
                        <p className="text-sm leading-6 text-brand-ink/72 md:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mt-6 min-h-[360px] overflow-hidden rounded-[1.65rem] border thin-border shadow-soft md:min-h-[500px]">
                <Image
                  src="/images/experiences/materials.jpg"
                  alt="ELÖRE hat-making materials"
                  fill
                  sizes="(max-width: 1024px) 100vw, 68vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <ExperienceVideo />
            </div>
          </div>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
