import Image from "next/image";
import Link from "next/link";

const measureSteps = [
  ["01", "Gather your measuring tool", "Use a soft measuring tape. If you don't have one, a piece of string and a ruler will work just as well."],
  ["02", "Position the tape correctly", "Wrap the tape around your head approximately 1 cm (½ inch) above your ears, passing across the center of your forehead where your hat will naturally rest."],
  ["03", "Measure comfortably", "Hold the tape snug against your head without pulling it too tightly. The fit should feel secure but comfortable."],
  ["04", "Record your measurement", "Read your head circumference in centimeters. If your measurement falls between two sizes, we recommend selecting the next larger size for the best fit."]
];

const stages = [
  { n:"01", title:"THE CONVERSATION", image:"/images/custom/hero.jpg", tone:"bone" },
  { n:"02", title:"THE FORM", image:"/images/studio/process-1.jpg", tone:"olive" },
  { n:"03", title:"THE MATERIAL", image:"/images/studio/materials.jpg", tone:"sand" },
  { n:"04", title:"THE DETAILS", image:"/images/studio/process-2.jpg", tone:"bone" },
  { n:"05", title:"THE MAKING", image:"/images/studio/process-3.jpg", tone:"maroon" },
  { n:"06", title:"YOUR ELÖRE", image:"/images/custom/hero.jpg", tone:"olive" }
];

export default function CustomPage(){
  return <>
    <section className="surface-bone relative overflow-hidden">
      <div className="editorial-container grid min-h-[90svh] px-5 pb-10 pt-8 md:px-8 lg:grid-cols-12 lg:px-12">
        <div className="relative z-10 flex flex-col justify-end pb-8 lg:col-span-5 lg:pb-14">
          <p className="eyebrow-olive">Custom / ELÖRE Atelier</p>
          <h1 className="serif-display mt-5 max-w-[9ch] text-[clamp(4.7rem,10vw,10rem)] leading-[.76] tracking-[-.065em] text-brand-olive">A one-of-one piece crafted around your story.</h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-brand-olive/80 md:text-lg">Designed exclusively for you, our custom hats are handcrafted through a collaborative process that honors both authenticity and craftsmanship.</p>
          <Link href="#custom-inquiry" className="btn-olive mt-8 w-fit">Begin Your Custom Hat</Link>
        </div>
        <div className="relative min-h-[560px] lg:col-span-7 lg:min-h-[780px]">
          <Image src="/images/custom/hero.jpg" alt="ELÖRE custom hat design" fill priority sizes="(max-width:1024px) 100vw,58vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#344200]/65 to-transparent p-8 pt-28 text-brand-bone md:p-10 md:pt-36"><p className="max-w-sm text-xs uppercase tracking-[.28em]">Personal / One-of-one / Hand-shaped</p></div>
        </div>
      </div>
    </section>

    <section className="surface-maroon overflow-hidden">
      <div className="editorial-container grid gap-12 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
        <div className="lg:col-span-4 lg:pt-16">
          <p className="eyebrow-light">The process in motion</p>
          <h2 className="serif-display mt-5 text-5xl leading-[.88] text-brand-bone md:text-7xl">See the hands behind the object.</h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-brand-bone/80">The temporary process video will live here until the final ELÖRE custom film is complete.</p>
          <Link href="https://drive.google.com/drive/folders/13kDt5kaS432Zk-xWnHTWENonhmBe-CE5?usp=drive_link" target="_blank" rel="noreferrer" className="btn-light mt-7 w-fit">View Temporary Video</Link>
        </div>
        <div className="relative min-h-[520px] overflow-hidden lg:col-span-8 lg:min-h-[720px]">
          <Image src="/images/studio/process-2.jpg" alt="ELÖRE custom process" fill sizes="(max-width:1024px) 100vw,66vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-maroon/75 via-transparent to-transparent" />
        </div>
      </div>
    </section>

    <section className="surface-bone">
      <div className="editorial-container px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4"><p className="eyebrow-olive">The collaboration</p></div>
          <h2 className="serif-display max-w-5xl text-5xl leading-[.88] text-brand-olive md:text-7xl lg:col-span-8">Six stages. One piece shaped around you.</h2>
        </div>
      </div>

      {stages.map((stage,index)=>{
        const dark=stage.tone==="olive"||stage.tone==="maroon";
        const bg=stage.tone==="olive"?"surface-olive":stage.tone==="maroon"?"surface-maroon":stage.tone==="sand"?"surface-sand":"surface-bone";
        return <article key={stage.n} className={`${bg} overflow-hidden`}>
          <div className={`editorial-container grid min-h-[72svh] lg:grid-cols-12 ${index%2?"":""}`}>
            <div className={`relative min-h-[440px] lg:col-span-7 lg:min-h-[72svh] ${index%2?"lg:order-2 lg:col-start-6":""}`}>
              <Image src={stage.image} alt={`ELÖRE custom process — ${stage.title.toLowerCase()}`} fill sizes="(max-width:1024px) 100vw,58vw" className="object-cover" />
            </div>
            <div className={`flex flex-col justify-between px-5 py-12 md:px-8 lg:col-span-5 lg:px-12 lg:py-16 ${index%2?"lg:order-1":""}`}>
              <p className={`serif-display text-[clamp(7rem,14vw,13rem)] leading-[.7] ${dark?"text-brand-bone/20":"text-brand-maroon/20"}`}>{stage.n}</p>
              <div>
                <p className={`text-[10px] uppercase tracking-[.34em] ${dark?"text-brand-sand":"text-brand-maroon"}`}>Custom Process</p>
                <h3 className={`serif-display mt-4 text-5xl leading-[.88] md:text-7xl ${dark?"text-brand-bone":"text-brand-olive"}`}>{stage.title}</h3>
                
              </div>
            </div>
          </div>
        </article>
      })}
    </section>

    <section className="surface-sand">
      <div className="editorial-container grid gap-12 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-20">
        <div className="lg:col-span-4">
          <p className="eyebrow-olive">Find Your Perfect Fit</p>
          <h2 className="serif-display mt-5 text-5xl leading-[.88] text-brand-olive md:text-7xl">Every bespoke hat begins with an accurate measurement.</h2>
          <p className="mt-6 text-base leading-8 text-brand-olive/80">Taking a few moments to measure your head ensures your custom piece is crafted with the fit and comfort it deserves.</p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-xs uppercase tracking-[.28em] text-brand-olive">How to Measure</p>
          <div className="mt-5 divide-y divide-brand-olive/25 border-y border-brand-olive/25">
            {measureSteps.map(([n,title,description])=><div key={n} className="grid gap-3 py-5 md:grid-cols-[70px_1fr] md:gap-6"><span className="serif-display text-4xl text-brand-maroon/70">{n}</span><div><h3 className="text-sm font-semibold uppercase tracking-[.14em] text-brand-olive">{title}</h3><p className="mt-2 text-sm leading-7 text-brand-olive/78">{description}</p></div></div>)}
          </div>
          <p className="mt-6 text-sm leading-7 text-brand-olive/80"><strong>Need Assistance?</strong> If you have any questions about sizing or would like guidance before placing your custom order, we're here to help. Contact us at: <a href="mailto:Salome@EloreAtelier.com" className="font-semibold underline underline-offset-4">Salome@EloreAtelier.com</a></p>
        </div>
      </div>
    </section>

    <section id="custom-inquiry" className="surface-olive">
      <div className="editorial-container grid gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
        <div className="lg:col-span-8"><p className="eyebrow-light">Begin the collaboration</p><h2 className="serif-display mt-5 max-w-5xl text-5xl leading-[.88] text-brand-bone md:text-7xl lg:text-8xl">Begin your custom consultation.</h2><p className="mt-7 max-w-xl text-base leading-8 text-brand-bone/80">Share your vision, references, timeline, and fit needs. The atelier will guide the next steps.</p></div>
        <div className="flex items-end lg:col-span-4"><Link href="/contact" className="btn-light w-fit">Submit Inquiry</Link></div>
      </div>
    </section>
  </>
}
