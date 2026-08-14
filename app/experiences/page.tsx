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
      <section className="relative overflow-hidden bg-brand-bone text-brand-ink">
        <div className="absolute left-[9%] top-24 hidden h-44 w-44 rounded-full bg-brand-sand/80 md:block" />
        <div className="absolute -right-16 top-40 hidden h-72 w-72 rounded-full border border-brand-maroon/35 lg:block" />

        <div className="editorial-container grid min-h-[86svh] gap-8 px-5 pb-12 pt-10 md:px-8 md:pt-12 lg:grid-cols-12 lg:px-12">
          <div className="relative z-10 flex flex-col justify-between lg:col-span-5">
            <Link
              href="#workshop-booking"
              className="w-fit bg-brand-olive px-7 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-maroon"
            >
              Book an Experience
            </Link>

            <div className="pb-3 pt-20 lg:pt-0">
              <p className="mb-5 text-[10px] uppercase tracking-[0.36em] text-brand-maroon">Atelier Experience / Boston</p>
              <h1 className="serif-display max-w-[9ch] text-[clamp(4.4rem,10vw,10.5rem)] leading-[0.76] tracking-[-0.07em] text-brand-olive">
                Learn the craft of hat making inside the atelier.
              </h1>
              <div className="mt-8 max-w-xl border-l border-brand-maroon/40 pl-5 text-base leading-8 text-brand-olive/75 md:text-lg">
                Elöre Experiences invite guests into the timeless art of hat-making through private, couples, and group workshops. Guided by hand, each experience offers an intimate introduction to the craft, where tradition, creativity, and storytelling come together.
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-7 lg:pt-10">
            <div className="elore-collage elore-collage--wine relative min-h-[520px] overflow-hidden md:min-h-[690px]">
              <Image
                src="/images/experiences/hero.jpg"
                alt="ELÖRE Atelier hat-making experience"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/12 to-transparent" />
              <h2 className="absolute bottom-7 left-5 max-w-[11ch] serif-display text-5xl leading-[0.86] text-white md:bottom-10 md:left-10 md:text-7xl">
                Discover the beauty of hat-making.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-brand-maroon text-white">
        <div className="editorial-container grid gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-sand">What happens inside</p>
            <h2 className="serif-display mt-6 text-5xl leading-[0.88] md:text-7xl">
              An experience shaped through material, form, and personal direction.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {included.map((item, index) => (
              <article key={item} className={`relative min-h-[160px] border border-white/22 p-5 ${index % 3 === 1 ? "sm:translate-y-8" : ""}`}>
                <p className="serif-display text-6xl leading-none text-brand-sand/55">0{index + 1}</p>
                <p className="mt-5 max-w-sm text-base leading-7 text-white/80">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bone text-brand-ink">
        <div className="editorial-container grid gap-8 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="relative min-h-[430px] overflow-hidden lg:col-span-7 lg:min-h-[720px]">
            <Image
              src="/images/experiences/materials.jpg"
              alt="ELÖRE hat-making materials"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover elore-portrait-cut"
            />
          </div>

          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="elore-stitch text-brand-maroon" />
            <div className="my-10">
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-maroon">Material / Form / Memory</p>
              <h2 className="serif-display mt-5 text-5xl leading-[0.88] text-brand-olive md:text-7xl">
                Come close enough to see how the object becomes personal.
              </h2>
              <p className="mt-7 max-w-lg text-base leading-8 text-brand-olive/75 md:text-lg">
                The page is designed to move guests toward booking by making the workshop feel tactile before they ever enter the atelier: the materials, the hands, the form, the finished object, and the memory of making it.
              </p>
            </div>
            <Link href="#workshop-booking" className="elore-btn w-fit bg-brand-olive text-white hover:bg-brand-maroon">Reserve Your Experience</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-olive text-white">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-sand/70" />
        <div className="editorial-container grid gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="relative z-10 lg:col-span-5 lg:pt-14">
            <p className="text-[10px] uppercase tracking-[0.34em] text-brand-sand">Atelier film</p>
            <h2 className="serif-display mt-5 text-5xl leading-[0.88] md:text-7xl">
              A moving invitation into the private world of ELÖRE.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/80 md:text-lg">
              The vertical film moment keeps the experience intimate and human, while the booking form below remains direct and easy to complete.
            </p>
          </div>
          <div className="relative z-10 lg:col-span-7">
            <ExperienceVideoFrame />
          </div>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
