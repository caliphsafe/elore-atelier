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
            <p className="text-base leading-8 text-white/85 md:text-lg md:leading-9">Elöre Experiences invite guests into the timeless art of hat-making through private, couples, and group workshops. Guided by hand, each experience offers an intimate introduction to the craft, where tradition, creativity, and storytelling come together.</p>
            <Link href="#workshop-booking" className="mt-8 inline-flex min-h-[52px] items-center justify-center border border-white bg-white px-7 py-4 text-[10px] uppercase tracking-[.24em] text-brand-olive transition hover:bg-transparent hover:text-white">Book an Experience</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-olive pb-16 md:pb-24">
        <Image src="/images/bg/elorebg4.png" alt="" fill sizes="45vw" className="pointer-events-none absolute inset-y-0 right-0 z-0 object-contain object-right opacity-30 mix-blend-soft-light" aria-hidden="true" />
        <div className="editorial-container relative z-10 px-5 md:px-8 lg:px-12">
          <div className="grid gap-12 border-t border-white/20 pt-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <div>
              <h2 className="serif-display text-5xl leading-[.88] md:text-7xl">What Is Included</h2>
              <p className="mt-7 max-w-md text-base leading-8 text-white/75">An experience shaped through material, form, and personal direction.</p>
            </div>
            <div className="grid gap-0 border-t border-white/20">
              {included.map((item, index) => (
                <div key={item} className="grid grid-cols-[3rem_1fr] items-start gap-5 border-b border-white/20 py-5 md:grid-cols-[4rem_1fr] md:gap-7">
                  <span className="serif-display text-4xl leading-none text-white/50">0{index + 1}</span>
                  <p className="max-w-2xl pt-1 text-base leading-7 text-white/90 md:text-lg">{item}</p>
                </div>
              ))}
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
