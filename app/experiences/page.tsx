import Image from "next/image";
import Link from "next/link";
import { ExperienceVideoFrame } from "@/components/experiences/experience-video-frame";
import { WorkshopBookingForm } from "@/components/experiences/workshop-booking-form";

const workshopFormats = [
  { number: "01", title: "Private Workshop", people: "One person", text: "A guided individual session with no prior experience needed." },
  { number: "02", title: "Couples Workshop", people: "Two people", text: "A shared two-person session centered on craft, memory, and personal style." },
  { number: "03", title: "Group Workshop", people: "Five to ten people", text: "A guided workshop for small groups, with pricing based on the final hat direction." }
];

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
      <section className="surface-bone relative overflow-hidden">
        <div className="editorial-container grid min-h-[88svh] px-5 pb-10 pt-8 md:px-8 lg:grid-cols-12 lg:px-12">
          <div className="relative z-20 flex flex-col justify-between pb-8 lg:col-span-5 lg:py-10">
            <Link href="#workshop-booking" className="btn-olive w-fit">Book an Experience</Link>
            <div className="max-w-2xl pt-20 lg:pt-28">
              <p className="eyebrow-olive">Experiences / Boston Atelier</p>
              <h1 className="serif-display mt-5 text-[clamp(4.6rem,10vw,10rem)] leading-[.76] tracking-[-.065em] text-brand-olive">
                Learn the craft of hat making inside the atelier.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-brand-olive/80 md:text-lg">
                Elöre Experiences invite guests into the timeless art of hat-making through private, couples, and group workshops. Guided by hand, each experience offers an intimate introduction to the craft, where tradition, creativity, and storytelling come together.
              </p>
            </div>
          </div>

          <div className="relative min-h-[560px] lg:col-span-7 lg:min-h-[760px]">
            <Image src="/images/experiences/hero.jpg" alt="ELÖRE Atelier hat-making experience" fill priority sizes="(max-width:1024px) 100vw,58vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f2409]/70 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-6 max-w-[9ch] serif-display text-5xl leading-[.86] text-white md:bottom-10 md:left-10 md:text-7xl">Discover the beauty of hat-making.</p>
            <div className="absolute -left-10 top-[12%] hidden h-32 w-32 rounded-full bg-brand-sand lg:block" />
          </div>
        </div>
      </section>

      <section className="surface-sand overflow-hidden">
        <div className="editorial-container grid gap-12 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-4 lg:pt-12">
            <p className="eyebrow-olive">Material / Form / Memory</p>
            <h2 className="serif-display mt-5 text-5xl leading-[.88] text-brand-olive md:text-7xl">Guided workshops that invite people into the art of making by hand.</h2>
          </div>
          <div className="relative min-h-[480px] lg:col-span-8 lg:min-h-[720px]">
            <Image src="/images/experiences/materials.jpg" alt="ELÖRE hat-making materials" fill sizes="(max-width:1024px) 100vw,66vw" className="object-cover" />
            <div className="absolute bottom-0 right-0 max-w-md bg-brand-bone p-6 text-brand-olive md:p-8">
              <p className="text-base leading-8">Each workshop is guided from beginning to end and shaped around the selected experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-bone">
        <div className="editorial-container px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="eyebrow-olive">Choose your format</p>
              <h2 className="serif-display mt-5 text-5xl leading-[.88] text-brand-olive md:text-7xl">Private, couples, and group workshops guided by the studio.</h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-brand-olive/78 lg:col-span-5 lg:col-start-8">Each workshop is guided from beginning to end and shaped around the selected experience.</p>
          </div>

          <div className="mt-14 divide-y divide-brand-olive/25 border-y border-brand-olive/25">
            {workshopFormats.map((item, index) => (
              <article key={item.title} className="grid gap-5 py-8 md:grid-cols-[140px_1fr_180px] md:items-center md:py-10">
                <p className="serif-display text-7xl leading-none text-brand-maroon/55">{item.number}</p>
                <div>
                  <p className="text-[10px] uppercase tracking-[.28em] text-brand-maroon">{item.people}</p>
                  <h3 className="serif-display mt-2 text-4xl leading-tight text-brand-olive md:text-5xl">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-olive/75 md:text-base">{item.text}</p>
                </div>
                <Link href={`#workshop-booking`} className="btn-outline-olive w-fit md:justify-self-end">Book</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-olive overflow-hidden">
        <div className="editorial-container grid gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-4 lg:pt-20">
            <p className="eyebrow-light">Atelier film</p>
            <h2 className="serif-display mt-5 text-5xl leading-[.88] text-brand-bone md:text-7xl">Discover the beauty of hat-making.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-brand-bone/80">Elöre experiences are designed for individuals, couples, and small groups who want to step inside the craft, learn the process, and create something with personal meaning.</p>
          </div>
          <div className="lg:col-span-8 lg:pl-10"><ExperienceVideoFrame /></div>
        </div>
      </section>

      <section className="surface-bone">
        <div className="editorial-container grid gap-12 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-4">
            <p className="eyebrow-olive">What Is Included</p>
            <h2 className="serif-display mt-5 text-5xl leading-[.88] text-brand-olive md:text-7xl">What Is Included</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-brand-olive/25 border-y border-brand-olive/25">
              {included.map((item, index) => (
                <div key={item} className="grid grid-cols-[70px_1fr] gap-5 py-6 md:grid-cols-[100px_1fr] md:py-7">
                  <span className="serif-display text-4xl text-brand-maroon/65">0{index + 1}</span>
                  <p className="text-base leading-8 text-brand-olive md:text-lg">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-brand-olive/70">Pricing varies based on custom hat costs, materials, and final direction.</p>
          </div>
        </div>
      </section>

      <section className="surface-maroon px-5 py-14 md:px-8 lg:px-12 lg:py-20">
        <div className="editorial-container grid gap-7 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <h2 className="serif-display max-w-4xl text-5xl leading-[.88] text-brand-bone md:text-7xl">Request a workshop date.</h2>
          <p className="max-w-xl text-base leading-8 text-brand-bone/80">Choose your workshop format and preferred date below. The atelier will confirm availability, final pricing, and next steps.</p>
        </div>
      </section>

      <WorkshopBookingForm />
    </>
  );
}
