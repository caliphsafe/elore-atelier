import Image from "next/image";
import Link from "next/link";

const stages = [
  { number: "01", title: "THE CONVERSATION", image: "/images/custom/hero.jpg" },
  { number: "02", title: "THE FORM", image: "/images/studio/process-1.jpg" },
  { number: "03", title: "THE MATERIAL", image: "/images/studio/materials.jpg" },
  { number: "04", title: "THE DETAILS", image: "/images/studio/process-2.jpg" },
  { number: "05", title: "THE MAKING", image: "/images/studio/process-3.jpg" },
  { number: "06", title: "YOUR ELÖRE", image: "/images/custom/hero.jpg" },
];

const measureSteps = [
  {
    title: "Gather your measuring tool",
    description: "Use a soft measuring tape. If you don't have one, a piece of string and a ruler will work just as well."
  },
  {
    title: "Position the tape correctly",
    description: "Wrap the tape around your head approximately 1 cm (½ inch) above your ears, passing across the center of your forehead where your hat will naturally rest."
  },
  {
    title: "Measure comfortably",
    description: "Hold the tape snug against your head without pulling it too tightly. The fit should feel secure but comfortable."
  },
  {
    title: "Record your measurement",
    description: "Read your head circumference in centimeters. If your measurement falls between two sizes, we recommend selecting the next larger size for the best fit."
  }
];

export default function CustomPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-maroon text-white">
        <div className="absolute -right-20 top-28 h-72 w-72 rounded-full bg-brand-sand/80" />
        <div className="editorial-container grid min-h-[86svh] gap-8 px-5 pb-12 pt-10 md:px-8 md:pt-12 lg:grid-cols-12 lg:px-12">
          <div className="relative z-10 flex flex-col justify-end lg:col-span-6">
            <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-brand-sand">Custom / ELÖRE Atelier</p>
            <h1 className="serif-display max-w-[10ch] text-[clamp(4.1rem,9vw,9.5rem)] leading-[0.78] tracking-[-0.065em]">
              A one-of-one piece crafted around your story.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">
              Designed exclusively for you, our custom hats are handcrafted through a collaborative process that honors both authenticity and craftsmanship.
            </p>
          </div>

          <div className="relative z-10 lg:col-span-6 lg:pt-12">
            <div className="organic-frame relative min-h-[520px] overflow-hidden md:min-h-[700px]">
              <Image
                src="/images/custom/hero.jpg"
                alt="ELÖRE custom hat design"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/52 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-bone text-brand-ink">
        <div className="editorial-container grid gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.34em] text-brand-maroon">Video / Pending final film</p>
            <h2 className="serif-display mt-5 text-5xl leading-[0.9] text-brand-olive md:text-7xl">
              See the process before you begin it.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-brand-olive/75">
              Add video — still need to film some (pending). Use the temporary process video for now until the final ELÖRE custom film is updated.
            </p>
            <Link
              href="https://drive.google.com/drive/folders/13kDt5kaS432Zk-xWnHTWENonhmBe-CE5?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="elore-btn mt-7 w-fit bg-brand-olive text-white hover:bg-brand-maroon"
            >
              Open Temporary Video
            </Link>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-brand-olive lg:col-span-7 lg:min-h-[620px]">
            <Image
              src="/images/studio/process-2.jpg"
              alt="ELÖRE custom process video placeholder"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-olive/90 via-brand-olive/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-sand">Custom Film</p>
              <p className="serif-display mt-3 max-w-xl text-4xl leading-[0.92] text-white md:text-6xl">
                The final video will live here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-sand text-brand-ink">
        <div className="editorial-container px-5 py-14 md:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-8 border-y border-brand-olive/25 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-maroon">Find Your Perfect Fit</p>
              <h2 className="serif-display mt-5 text-5xl leading-[0.9] text-brand-olive md:text-7xl">
                Every bespoke hat begins with an accurate measurement.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-brand-olive/75">
                Taking a few moments to measure your head ensures your custom piece is crafted with the fit and comfort it deserves.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.32em] text-brand-maroon">How to Measure</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {measureSteps.map((step, index) => (
                  <article key={step.title} className="border-t border-brand-olive/25 pt-4">
                    <p className="serif-display text-4xl leading-none text-brand-maroon/70">0{index + 1}</p>
                    <h4 className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-olive">{step.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-brand-olive/75">{step.description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-7 border-l border-brand-maroon/45 pl-5 text-sm leading-7 text-brand-olive/75">
                <strong className="text-brand-olive">Need Assistance?</strong> If you have any questions about sizing or would like guidance before placing your custom order, we're here to help. Contact us at:{" "}
                <a className="font-semibold underline decoration-brand-maroon underline-offset-4" href="mailto:Salome@EloreAtelier.com">Salome@EloreAtelier.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-bone text-brand-ink">
        <div className="editorial-container px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
            <p className="text-[10px] uppercase tracking-[0.32em] text-brand-maroon">The collaboration</p>
            <h2 className="serif-display max-w-5xl text-5xl leading-[0.88] text-brand-olive md:text-7xl">
              Six stages. One piece shaped around you.
            </h2>
          </div>

          <div className="space-y-16 md:space-y-24">
            {stages.map((stage, index) => (
              <article
                key={stage.number}
                className={`grid gap-7 border-t border-brand-olive/18 pt-6 lg:grid-cols-12 lg:items-center ${index % 2 ? "lg:[&>*:first-child]:col-start-7" : ""}`}
              >
                <div className={`relative min-h-[390px] overflow-hidden md:min-h-[540px] lg:col-span-6 ${index % 2 ? "lg:order-2" : ""} ${index % 3 === 1 ? "organic-frame--soft" : index % 3 === 2 ? "organic-frame--arch" : "organic-frame"}`}>
                  <Image
                    src={stage.image}
                    alt={`ELÖRE custom process — ${stage.title.toLowerCase()}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-[1.025]"
                  />
                </div>

                <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}>
                  <p className="serif-display text-[clamp(6rem,13vw,13rem)] leading-none text-brand-maroon/20">{stage.number}</p>
                  <h3 className="-mt-3 text-[11px] uppercase tracking-[0.36em] text-brand-olive md:text-xs">{stage.title}</h3>
                  <div className="mt-7 h-px w-24 bg-brand-maroon" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-olive text-white" id="custom-inquiry">
        <div className="editorial-container grid gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-[10px] uppercase tracking-[0.34em] text-brand-sand">Begin the collaboration</p>
            <h2 className="serif-display mt-5 max-w-4xl text-5xl leading-[0.9] md:text-7xl lg:text-8xl">
              Begin your custom consultation.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              Share your vision, references, timeline, and fit needs. The atelier will guide the next steps.
            </p>
          </div>

          <div className="flex flex-col justify-end gap-4 border-t border-white/25 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <Link href="/contact" className="elore-btn elore-btn--light w-fit">Submit Inquiry</Link>
            <Link href="/shop" className="inline-flex min-h-[44px] items-center text-[10px] uppercase tracking-[0.28em] text-white/75 hover:text-white">
              View the Collection →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
