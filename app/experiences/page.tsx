import Image from "next/image";
import Link from "next/link";
import { ExperienceVideoFrame } from "@/components/experiences/experience-video-frame";
import { WorkshopBookingForm } from "@/components/experiences/workshop-booking-form";

const included = [
  "Guided instruction inside the atelier","Hands-on making and finishing process",
  "Material, color, and silhouette guidance","Private, couples, and group formats available",
  "No previous experience needed","Pricing varies based on custom hat costs"
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="bg-[#D5B875] px-5 py-10 md:px-8 md:py-16 lg:px-12">
        <div className="editorial-container">
          <Link href="#workshop-booking" className="elore-btn-dark">Book an Experience</Link>
          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_.38fr] lg:items-end">
            <h1 className="elore-display text-[clamp(4.5rem,10vw,10rem)]">Learn the<br/><em>craft.</em></h1>
            <p className="max-w-md pb-2 text-base leading-8 text-[#241C19]/72">Enter the atelier for an intimate introduction to hat-making, where tradition, creativity, material, and storytelling come together by hand.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F2] px-5 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="editorial-container">
          <div className="elore-crop relative min-h-[65vh]">
            <Image src="/images/experiences/hero.jpg" alt="ELÖRE Atelier hat-making experience" fill priority sizes="100vw" className="object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"/>
            <h2 className="serif-display absolute bottom-7 left-5 max-w-[13ch] text-5xl leading-[.9] tracking-[-.04em] text-white md:bottom-10 md:left-10 md:text-7xl">Discover the beauty of making something with your own hands.</h2>
          </div>
        </div>
      </section>

      <section className="elore-oxblood px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_.7fr]">
            <div>
              <p className="elore-kicker text-white/55">What is included</p>
              <h2 className="serif-display mt-6 max-w-[12ch] text-5xl leading-[.92] tracking-[-.04em] md:text-7xl">An experience shaped through material, form, and personal direction.</h2>
              <div className="mt-10">
                {included.map((item,i)=><div key={item} className="grid grid-cols-[45px_1fr] border-t border-white/25 py-4"><span className="text-[10px] text-white/45">0{i+1}</span><p className="text-sm leading-6 text-white/75 md:text-base">{item}</p></div>)}
              </div>
            </div>
            <div className="self-start lg:sticky lg:top-28"><ExperienceVideoFrame /></div>
          </div>
        </div>
      </section>

      <section className="bg-[#596044] px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="editorial-container">
          <div className="mb-6 flex justify-between border-b border-white/25 pb-4 text-[#FAF8F2]"><span className="elore-kicker">Material study</span><span className="elore-kicker opacity-55">Touch / Shape / Finish</span></div>
          <div className="elore-crop relative min-h-[55vh]"><Image src="/images/experiences/materials.jpg" alt="ELÖRE hat-making materials" fill sizes="100vw" className="object-cover"/></div>
        </div>
      </section>
      <WorkshopBookingForm />
    </>
  );
}
