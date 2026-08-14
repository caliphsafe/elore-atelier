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

export default function CustomPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-elore-maroon text-white">
        <div className="editorial-container grid min-h-[78svh] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-10 flex flex-col justify-end px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
            <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-white/65">Custom / ELÖRE Atelier</p>
            <h1 className="serif-display max-w-[12ch] text-[clamp(3.8rem,8vw,8.5rem)] leading-[0.78] tracking-[-0.055em]">
              A one-of-one hat shaped around your own visual language.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/78 md:text-lg">
              The custom process is designed for clients seeking something personal, intentional, and impossible to replicate.
            </p>
          </div>

          <div className="relative min-h-[54svh] lg:min-h-full">
            <Image
              src="/images/custom/hero.jpg"
              alt="ELÖRE custom hat design"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6F3035]/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#6F3035]/35 lg:to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-elore-sand text-brand-ink">
        <div className="editorial-container px-5 py-10 md:px-8 md:py-14 lg:px-12">
          <div className="grid gap-6 border-y border-black/20 py-7 md:grid-cols-[0.55fr_1.45fr] md:items-end">
            <p className="text-[10px] uppercase tracking-[0.32em]">The collaboration</p>
            <h2 className="serif-display max-w-4xl text-4xl leading-[0.92] md:text-6xl lg:text-7xl">
              Six stages. One piece shaped around you.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-elore-ivory">
        <div className="editorial-container px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-28">
          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {stages.map((stage, index) => (
              <article
                key={stage.number}
                className={`grid gap-7 border-t border-black/15 pt-6 lg:grid-cols-12 lg:items-center ${
                  index % 2 ? "lg:[&>*:first-child]:col-start-7" : ""
                }`}
              >
                <div className={`relative min-h-[430px] overflow-hidden md:min-h-[560px] lg:col-span-6 ${index % 2 ? "lg:order-2" : ""}`}>
                  <Image
                    src={stage.image}
                    alt={`ELÖRE custom process — ${stage.title.toLowerCase()}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-[1.025]"
                  />
                </div>

                <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}>
                  <p className="serif-display text-[clamp(5rem,11vw,10rem)] leading-none text-elore-maroon/25">{stage.number}</p>
                  <h3 className="-mt-3 text-[11px] uppercase tracking-[0.36em] text-brand-ink md:text-xs">{stage.title}</h3>
                  <div className="mt-7 h-px w-20 bg-elore-olive" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-elore-olive text-white" id="custom-inquiry">
        <div className="editorial-container grid gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-[10px] uppercase tracking-[0.34em] text-white/65">Begin the collaboration</p>
            <h2 className="serif-display mt-5 max-w-4xl text-5xl leading-[0.9] md:text-7xl lg:text-8xl">
              Begin your custom consultation.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/78 md:text-lg">
              Share your vision, references, timeline, and fit needs. The atelier will guide the next steps.
            </p>
          </div>

          <div className="flex flex-col justify-end gap-4 border-t border-white/25 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <Link href="/contact" className="elore-btn elore-btn--light w-fit">Submit Inquiry</Link>
            <Link href="/lookbook" className="inline-flex min-h-[44px] items-center text-[10px] uppercase tracking-[0.28em] text-white/75 hover:text-white">
              View Inspiration →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
