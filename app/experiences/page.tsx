import Image from "next/image";
import Link from "next/link";
import { ExperienceVideoFrame } from "@/components/experiences/experience-video-frame";
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
      <section className="bg-brand-bone text-brand-olive">
        <div className="editorial-container px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14 lg:px-12 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <h1 className="serif-display max-w-[15ch] text-[clamp(4rem,8.2vw,8.8rem)] leading-[.8] tracking-[-.06em] text-brand-olive">
                Learn the craft of hat making inside the atelier.
              </h1>
            </div>
            <div className="lg:col-span-3 lg:pb-2">
              <Link href="#workshop-booking" className="btn-olive w-fit">
                Book an Experience
              </Link>
            </div>
          </div>

          <p className="mt-7 max-w-4xl text-base leading-8 text-brand-olive/80 md:text-lg">
            Elöre Experiences invite guests into the timeless art of hat-making through private, couples, and group workshops. Guided by hand, each experience offers an intimate introduction to the craft, where tradition, creativity, and storytelling come together.
          </p>
        </div>
      </section>

      <section className="bg-brand-bone px-5 pb-12 md:px-8 md:pb-16 lg:px-12 lg:pb-20">
        <div className="editorial-container">
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/7] lg:aspect-[21/8]">
            <Image
              src="/images/experiences/hero.jpg"
              alt="ELÖRE Atelier hat-making experience"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/64 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
              <h2 className="serif-display max-w-[16ch] text-4xl leading-[.92] text-white md:text-6xl lg:text-7xl">
                Discover the beauty of hat-making.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-maroon text-brand-bone">
        <div className="editorial-container grid gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-4">
            <h2 className="serif-display text-5xl leading-[.88] text-brand-bone md:text-7xl">
              An experience shaped through material, form, and personal direction.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-brand-bone/25 border-y border-brand-bone/25">
              {included.map((item, index) => (
                <div
                  key={item}
                  className={`grid gap-4 py-6 sm:grid-cols-[84px_1fr] sm:items-start md:py-7 ${index % 2 ? "md:ml-12" : ""}`}
                >
                  <span className="serif-display text-5xl leading-none text-brand-sand">
                    0{index + 1}
                  </span>
                  <p className="max-w-2xl text-base leading-8 text-brand-bone md:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-brand-bone text-brand-olive">
        <div className="editorial-container grid gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-24">
          <div className="lg:col-span-4">
            <h2 className="serif-display text-5xl leading-[.9] text-brand-olive md:text-7xl">
              Private, couples, and group workshops guided by the studio.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-brand-olive/78 md:text-lg">
              Each workshop is guided from beginning to end and shaped around the selected experience.
            </p>
          </div>

          <div className="relative min-h-[380px] md:min-h-[520px] lg:col-span-8 lg:min-h-[620px]">
            <Image
              src="/images/experiences/materials.jpg"
              alt="ELÖRE hat-making materials"
              fill
              sizes="(max-width:1024px) 100vw,66vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-olive text-brand-bone">
        <div className="editorial-container px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="serif-display text-5xl leading-[.9] text-brand-bone md:text-7xl">
              Discover the beauty of hat-making.
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-xl md:mt-14">
            <ExperienceVideoFrame />
          </div>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
