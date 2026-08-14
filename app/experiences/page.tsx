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
        <div className="editorial-container px-5 pb-9 pt-9 md:px-8 md:pb-12 md:pt-12 lg:px-12 lg:pb-14 lg:pt-14">
          <Link href="#workshop-booking" className="btn-olive w-fit">
            Book an Experience
          </Link>

          <div className="mt-10 grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h1 className="serif-display max-w-[13ch] text-[clamp(3.8rem,8.4vw,8.7rem)] leading-[.82] tracking-[-.055em] text-brand-olive lg:col-span-8">
              Learn the craft of hat making inside the atelier.
            </h1>

            <p className="max-w-xl text-base leading-8 text-brand-olive/82 md:text-lg lg:col-span-4 lg:pb-2">
              Elöre Experiences invite guests into the timeless art of hat-making through private, couples, and group workshops. Guided by hand, each experience offers an intimate introduction to the craft, where tradition, creativity, and storytelling come together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-bone pb-0">
        <div className="editorial-container px-5 md:px-8 lg:px-12">
          <div className="relative aspect-[16/8] min-h-[300px] overflow-hidden md:aspect-[16/6.8] lg:aspect-[21/8] lg:min-h-[500px]">
            <Image
              src="/images/experiences/hero.jpg"
              alt="ELÖRE Atelier hat-making experience"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-9 lg:p-12">
              <h2 className="serif-display max-w-[15ch] text-[clamp(3rem,6vw,6.4rem)] leading-[.88] tracking-[-.04em] text-white">
                Discover the beauty of hat-making.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-bone px-5 py-16 text-brand-olive md:px-8 md:py-20 lg:px-12 lg:py-28">
        <div className="editorial-container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:pt-4">
            <h2 className="serif-display max-w-[11ch] text-[clamp(3.5rem,6.2vw,6.8rem)] leading-[.86] tracking-[-.045em] text-brand-olive">
              An experience shaped through material, form, and personal direction.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <h3 className="serif-display text-4xl leading-none text-brand-olive md:text-5xl">
              What Is Included
            </h3>

            <div className="mt-7 border-y border-brand-olive/25">
              {included.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[56px_1fr] gap-4 border-b border-brand-olive/20 py-5 last:border-b-0 md:grid-cols-[80px_1fr] md:gap-6 md:py-6"
                >
                  <span className="serif-display text-3xl leading-none text-brand-maroon md:text-4xl">
                    0{index + 1}
                  </span>
                  <p className="max-w-2xl text-base leading-7 text-brand-olive/82 md:text-lg md:leading-8">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-sand px-5 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
        <div className="editorial-container">
          <div className="relative aspect-[4/3] min-h-[340px] overflow-hidden md:aspect-[16/8] md:min-h-[500px] lg:aspect-[21/9] lg:min-h-[620px]">
            <Image
              src="/images/experiences/materials.jpg"
              alt="ELÖRE hat-making materials"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-olive px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-36">
        <div className="editorial-container">
          <div className="mx-auto w-full max-w-[520px]">
            <ExperienceVideoFrame />
          </div>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
