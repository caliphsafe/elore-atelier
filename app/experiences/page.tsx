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
            <div className="max-w-[86rem]">
              <h1 className="serif-display text-5xl leading-[0.92] tracking-hero text-brand-ink md:text-6xl lg:text-[4.8rem] xl:whitespace-nowrap">
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
              <h2 className="serif-display max-w-[72rem] text-4xl leading-[0.95] text-white md:text-6xl lg:text-[5rem] xl:whitespace-nowrap">
                Discover the beauty of hat-making.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] p-4 shadow-soft md:p-6 lg:p-8">
            <div className="relative overflow-hidden rounded-[2rem] border thin-border bg-brand-ink shadow-soft">
              <div className="relative min-h-[680px] md:min-h-[760px] lg:min-h-[820px]">
                <Image
                  src="/images/experiences/materials.jpg"
                  alt="ELÖRE hat-making materials"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-black/68 via-black/20 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />

                <div className="absolute left-4 right-4 top-4 rounded-[1.5rem] bg-white/94 p-5 shadow-soft backdrop-blur md:left-8 md:right-auto md:top-8 md:max-w-xl md:p-8 lg:p-10">
                  <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-5xl lg:text-6xl">
                    An experience shaped through material, form, and personal
                    direction.
                  </h2>
                </div>

                <div className="absolute bottom-5 left-1/2 w-[min(76vw,360px)] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-white/45 bg-[#efe5d8] shadow-2xl md:bottom-8 md:right-8 md:left-auto md:w-[340px] md:translate-x-0 lg:w-[370px]">
                  <div className="aspect-[9/16]">
                    <video
                      className="h-full w-full object-cover"
                      poster="/images/experiences/materials.jpg"
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
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[1.75rem] bg-white p-6 shadow-soft md:p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[0.35fr_1fr] lg:items-start">
                <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                  What Is Included
                </h3>

                <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                  {included.map((item) => (
                    <div key={item} className="border-t thin-border pt-4">
                      <p className="text-sm leading-7 text-brand-ink/72 md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
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
