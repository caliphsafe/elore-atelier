import Image from "next/image";
import Link from "next/link";

const stages = [
  "THE CONVERSATION",
  "THE FORM",
  "THE MATERIAL",
  "THE DETAILS",
  "THE MAKING",
  "YOUR ELÖRE"
];

const measureSteps = [
  ["01", "Gather your measuring tool", "Use a soft measuring tape. If you don't have one, a piece of string and a ruler will work just as well."],
  ["02", "Position the tape correctly", "Wrap the tape around your head approximately 1 cm (½ inch) above your ears, passing across the center of your forehead where your hat will naturally rest."],
  ["03", "Measure comfortably", "Hold the tape snug against your head without pulling it too tightly. The fit should feel secure but comfortable."],
  ["04", "Record your measurement", "Read your head circumference in centimeters. If your measurement falls between two sizes, we recommend selecting the next larger size for the best fit."]
];

export default function CustomPage() {
  return (
    <>
      <section className="bg-brand-bone text-brand-olive">
        <div className="editorial-container grid gap-8 px-5 pb-12 pt-10 md:px-8 md:pt-14 lg:grid-cols-12 lg:px-12 lg:pb-16">
          <div className="flex flex-col justify-center lg:col-span-5">
            <h1 className="serif-display max-w-[10ch] text-[clamp(4.3rem,9vw,9rem)] leading-[.78] tracking-[-.065em] text-brand-olive">
              A one-of-one piece crafted around your story.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-brand-olive/80 md:text-lg">
              Designed exclusively for you, our custom hats are handcrafted through a collaborative process that honors both authenticity and craftsmanship.
            </p>
            <Link href="#custom-inquiry" className="btn-olive mt-8 w-fit">Begin Your Custom Hat</Link>
          </div>
          <div className="relative min-h-[400px] overflow-hidden md:min-h-[520px] lg:col-span-7 lg:min-h-[620px]">
            <Image src="/images/custom/hero.jpg" alt="ELÖRE custom hat design" fill priority sizes="(max-width:1024px) 100vw,58vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-brand-maroon text-brand-bone">
        <div className="editorial-container grid gap-10 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:px-12 lg:py-20">
          <div className="lg:col-span-5">
            <h2 className="serif-display text-5xl leading-[.9] text-brand-bone md:text-7xl">Six stages. One piece shaped around you.</h2>
            <Link href="https://drive.google.com/drive/folders/13kDt5kaS432Zk-xWnHTWENonhmBe-CE5?usp=drive_link" target="_blank" rel="noreferrer" className="btn-light mt-8 w-fit">View Current Process Video</Link>
          </div>
          <div className="divide-y divide-brand-bone/25 border-y border-brand-bone/25 lg:col-span-7">
            {stages.map((stage, index) => (
              <div key={stage} className="grid grid-cols-[64px_1fr] items-center gap-4 py-5 md:grid-cols-[90px_1fr] md:py-6">
                <span className="serif-display text-4xl leading-none text-brand-sand md:text-5xl">0{index + 1}</span>
                <h3 className="serif-display text-3xl leading-tight text-brand-bone md:text-4xl">{stage}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-sand text-brand-olive">
        <div className="editorial-container grid gap-10 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:px-12 lg:py-20">
          <div className="lg:col-span-4">
            <h2 className="serif-display text-5xl leading-[.9] text-brand-olive md:text-7xl">Find Your Perfect Fit</h2>
            <p className="mt-6 text-base leading-8 text-brand-olive/80">Every bespoke hat begins with an accurate measurement. Taking a few moments to measure your head ensures your custom piece is crafted with the fit and comfort it deserves.</p>
          </div>
          <div className="divide-y divide-brand-olive/25 border-y border-brand-olive/25 lg:col-span-7 lg:col-start-6">
            {measureSteps.map(([number, title, description]) => (
              <div key={number} className="grid gap-3 py-5 sm:grid-cols-[64px_1fr] sm:gap-5">
                <span className="serif-display text-4xl text-brand-maroon/75">{number}</span>
                <div>
                  <h3 className="serif-display text-2xl leading-tight text-brand-olive md:text-3xl">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-olive/78 md:text-base">{description}</p>
                </div>
              </div>
            ))}
            <div className="py-5">
              <h3 className="serif-display text-3xl text-brand-olive">Need Assistance?</h3>
              <p className="mt-3 text-sm leading-7 text-brand-olive/80 md:text-base">If you have any questions about sizing or would like guidance before placing your custom order, we're here to help. Contact us at: <a href="mailto:Salome@EloreAtelier.com" className="font-semibold underline underline-offset-4">Salome@EloreAtelier.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="custom-inquiry" className="bg-brand-olive text-brand-bone">
        <div className="editorial-container grid gap-8 px-5 py-14 md:px-8 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-20">
          <h2 className="serif-display max-w-4xl text-5xl leading-[.9] text-brand-bone md:text-7xl lg:col-span-8">Begin your custom consultation.</h2>
          <div className="lg:col-span-4 lg:justify-self-end"><Link href="/contact" className="btn-light">Submit Inquiry</Link></div>
        </div>
      </section>
    </>
  );
}
