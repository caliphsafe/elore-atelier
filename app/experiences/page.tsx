import Image from "next/image";
import Link from "next/link";
import { ExperienceVideo } from "@/components/experiences/experience-video";
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
          <Link
            href="#workshop-booking"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-7 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
          >
            Book an Experience
          </Link>

          <div className="mt-7 max-w-7xl">
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
        </div>
      </section>

      <section className="px-5 py-4 md:px-8 md:py-5 lg:px-12">
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
          <div className="overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10 lg:items-start">
              <h2 className="serif-display max-w-3xl text-4xl leading-tight text-brand-ink md:text-6xl">
                An experience shaped through material, form, and personal direction.
              </h2>

              <div className="rounded-[1.75rem] bg-white p-6 shadow-soft md:p-8">
                <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                  What Is Included
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
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

            <div className="border-t thin-border p-6 md:p-8 lg:p-10">
              <ExperienceVideo />
            </div>

            <div className="border-t thin-border p-6 pt-0 md:p-8 md:pt-0 lg:p-10 lg:pt-0">
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
