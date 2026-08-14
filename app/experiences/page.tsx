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
        <div className="editorial-container grid gap-8 px-5 pb-12 pt-10 md:px-8 md:pt-14 lg:grid-cols-12 lg:px-12 lg:pb-16">
          <div className="flex flex-col justify-center lg:col-span-5">
            <h1 className="serif-display max-w-[10ch] text-[clamp(4.2rem,9vw,9rem)] leading-[.78] tracking-[-.065em] text-brand-olive">
              Learn the craft of hat making inside the atelier.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-brand-olive/78 md:text-lg">
              Elöre Experiences invite guests into the timeless art of hat-making through private, couples, and group workshops. Guided by hand, each experience offers an intimate introduction to the craft, where tradition, creativity, and storytelling come together.
            </p>
            <Link href="#workshop-booking" className="btn-olive mt-8 w-fit">Book an Experience</Link>
          </div>

          <div className="relative min-h-[360px] overflow-hidden md:min-h-[470px] lg:col-span-7 lg:min-h-[520px]">
            <Image src="/images/experiences/hero.jpg" alt="ELÖRE Atelier hat-making experience" fill priority sizes="(max-width:1024px) 100vw,58vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/8 to-transparent" />
            <h2 className="absolute bottom-6 left-5 max-w-[13ch] serif-display text-4xl leading-[.94] text-white md:bottom-9 md:left-9 md:text-6xl">
              Discover the beauty of hat-making.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-brand-maroon text-brand-bone">
        <div className="editorial-container grid gap-10 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:px-12 lg:py-20">
          <div className="lg:col-span-4">
            <h2 className="serif-display text-5xl leading-[.9] text-brand-bone md:text-7xl">
              An experience shaped through material, form, and personal direction.
            </h2>
          </div>
          <div className="divide-y divide-brand-bone/25 border-y border-brand-bone/25 lg:col-span-8">
            {included.map((item, index) => (
              <div key={item} className="grid gap-4 py-5 sm:grid-cols-[72px_1fr] sm:items-start md:py-6">
                <span className="serif-display text-4xl leading-none text-brand-sand">0{index + 1}</span>
                <p className="max-w-2xl text-base leading-7 text-brand-bone/84 md:text-lg md:leading-8">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bone text-brand-olive">
        <div className="editorial-container grid gap-8 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:px-12 lg:py-20">
          <div className="relative min-h-[360px] overflow-hidden md:min-h-[500px] lg:col-span-7 lg:min-h-[620px]">
            <Image src="/images/experiences/materials.jpg" alt="ELÖRE hat-making materials" fill sizes="(max-width:1024px) 100vw,58vw" className="object-cover" />
          </div>
          <div className="flex items-center lg:col-span-5">
            <div className="w-full border-y border-brand-olive/25 py-8">
              <ExperienceVideoFrame />
            </div>
          </div>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
