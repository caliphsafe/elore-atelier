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
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-[82rem]">
              <h1 className="serif-display text-5xl leading-[0.92] tracking-hero text-brand-ink md:text-6xl lg:text-[5rem] xl:whitespace-nowrap">
                Learn the craft of hat making inside the atelier.
              </h1>

              <p className="mt-6 max-w-4xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Elöre Experiences invite guests into the timeless art of
                hat-making through private, couples, and group workshops. Guided
                by hand, each experience offers an intimate introduction to the
                craft, where tradition, creativity, and storytelling come
                together.
              </p>
            </div>

            <Link
              href="#workshop-booking"
              className="inline-flex w-fit min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-7 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha lg:mb-2"
            >
              Book an Experience
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-5 md:px-8 md:py-6 lg:px-12">
        <div className="editorial-container">
          <div className="relative min-h-[430px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[600px]">
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
              <h2 className="serif-display max-w-[72rem] text-4xl leading-[0.95] text-white md:text-6xl lg:text-[5.4rem] xl:whitespace-nowrap">
                Discover the beauty of hat-making.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container">
          <div className="rounded-luxe border thin-border bg-[#f7f1ea] p-5 shadow-soft md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="rounded-[1.75rem] bg-white p-6 shadow-soft md:p-8 lg:p-10">
                <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
                  An experience shaped through material, form, and personal
                  direction.
                </h2>
              </div>

              <div className="rounded-[1.75rem] bg-white p-6 shadow-soft md:p-8 lg:p-10">
                <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                  What Is Included
                </h3>

                <div className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">
                  {included.map((item) => (
                    <div
                      key={item}
                      className="border-t thin-border pt-4"
                    >
                      <p className="text-sm leading-7 text-brand-ink/72 md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8">
              <div className="relative mx-auto aspect-[9/16] w-full max-w-[420px] overflow-hidden rounded-[2rem] border thin-border bg-brand-ink shadow-soft">
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

              <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border thin-border shadow-soft md:min-h-[520px]">
                <Image
                  src="/images/experiences/materials.jpg"
                  alt="ELÖRE hat-making materials"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
