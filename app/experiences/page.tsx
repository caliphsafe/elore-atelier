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
    <main className="experience-page bg-brand-olive text-white">
      <section className="relative overflow-hidden bg-brand-olive">
        <Image src="/images/bg/elorebg4.png" alt="" fill sizes="45vw" className="pointer-events-none absolute inset-y-0 right-0 z-0 object-contain object-right opacity-30 mix-blend-soft-light" aria-hidden="true" />
        <div className="editorial-container relative z-10 grid min-h-[62svh] items-end gap-12 px-5 pb-14 pt-24 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-12 lg:pb-20">
          <div className="max-w-4xl">
            <h1 className="serif-display text-[clamp(4rem,8vw,8rem)] leading-[.8] tracking-[-.06em]">Discover the beauty of hat-making.</h1>
          </div>
          <div className="max-w-xl lg:pb-2">
            <p className="text-base leading-8 text-white/85 md:text-lg md:leading-9">ELÖRE Experiences invite guests into the timeless art of hat-making through private, couples, and group workshops. Guided by hand, each experience offers an intimate introduction to the craft, where tradition, creativity, and storytelling come together.</p>
            <Link href="#workshop-booking" className="mt-8 inline-flex min-h-[52px] items-center justify-center border border-white bg-white px-7 py-4 text-[10px] uppercase tracking-[.24em] text-brand-olive transition hover:bg-transparent hover:text-white">Book an Experience</Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-bone text-brand-ink">
        <div className="editorial-container grid gap-8 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-12 lg:px-12 lg:py-20">
          <div className="relative min-h-[460px] overflow-hidden bg-brand-olive md:min-h-[600px]">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-45"
              src="/video/custom1.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="ELÖRE ATELIER hat-making process"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-brand-olive/45 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>

          <div className="relative overflow-hidden py-2 lg:py-4">
            <Image src="/images/bg/elorebg4.png" alt="" fill sizes="40vw" className="pointer-events-none absolute inset-y-0 right-0 z-0 object-contain object-right opacity-30 mix-blend-multiply" aria-hidden="true" />
            <div className="relative z-10">
              <h2 className="serif-display text-5xl leading-[.88] text-brand-olive md:text-7xl">What Is Included</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-brand-olive/70 md:text-lg">An experience shaped through material, form, and personal direction.</p>
              <div className="mt-8 border-t border-brand-ink/15">
                {included.map((item, index) => (
                  <div key={item} className="grid grid-cols-[3rem_1fr] items-start gap-5 border-b border-brand-ink/15 py-4 md:grid-cols-[4rem_1fr] md:gap-7">
                    <span className="serif-display text-4xl leading-none text-brand-olive/45">0{index + 1}</span>
                    <p className="pt-1 text-base leading-7 text-brand-ink/80 md:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="workshop-booking" className="bg-brand-bone text-brand-ink">
        <WorkshopBookingForm />
      </div>
    </main>
  );
}
