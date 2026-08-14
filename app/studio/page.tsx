import Image from "next/image";
import Link from "next/link";

const steps = [
  ["01","RAW MATERIAL","Material Selection","Each element is chosen for quality, character, and its ability to endure."],
  ["02","FORM","Shaping","The crown and silhouette are sculpted by hand on wooden blocks."],
  ["03","EDGE","Brimming and Sanding","The brim is refined through cutting and sanding for softness and movement."],
  ["04","INTERIOR","Sweatband","The interior is fitted by hand for comfort, structure, and intimacy."],
  ["05","STORY","Habillage","Ribbon, embroidery, burns, stitching, and adornments complete the visual story."],
  ["06","OBJECT","Finishing Details","Final refinements establish balance, craftsmanship, and individuality."]
];

const materials = [
  ["Wooden Blocks","/images/studio/Wooden_Blocks.jpg","Handcrafted in Poland by a fourth-generation block maker, each form begins with timber and inherited knowledge."],
  ["Panama Straw","/images/studio/Panama_Straw.jpg","Woven by skilled artisans in Ecuador, authentic Panama straw is light, breathable, and remarkably refined."],
  ["Fur Felt","/images/studio/Fur_Felt.jpg","Crafted in Portugal through a centuries-old process using moisture, heat, pressure, and natural fiber."],
  ["Leather Sweatbands","/images/studio/Sweatband.jpg","Premium leather sweatbands crafted in the United States complete the interior with structure and comfort."]
];

export default function StudioPage() {
  return (
    <>
      <section className="bg-[#FAF8F2] px-5 py-10 md:px-8 md:py-16 lg:px-12">
        <div className="editorial-container">
          <div className="mb-7 flex justify-between border-b thin-border pb-4"><span className="elore-kicker">Atelier / Boston</span><span className="elore-kicker text-[#6F292B]">Craft in motion</span></div>
          <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr]">
            <div className="flex flex-col justify-between">
              <h1 className="elore-display text-[clamp(4.2rem,8vw,8.4rem)]">Where<br/>material<br/><em>becomes form.</em></h1>
              <p className="mt-10 max-w-lg text-base leading-8 text-[#241C19]/70">A creative atelier and shop in Downtown Boston where tradition is practiced, materials are transformed, and every hat is given the time it deserves.</p>
            </div>
            <div className="elore-crop relative min-h-[68vh]"><Image src="/images/studio/workspace.jpg" alt="ELÖRE Atelier workspace" fill priority sizes="(max-width:1024px) 100vw, 65vw" className="object-cover"/></div>
          </div>
        </div>
      </section>

      <section className="elore-olive px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-[.42fr_1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="elore-kicker text-white/60">The Process</p>
              <h2 className="serif-display mt-6 text-5xl leading-[.92] tracking-[-.04em] md:text-7xl">Six movements.<br/>One object.</h2>
            </div>
            <div>
              {steps.map(([n,k,t,d])=>(
                <article key={n} className="grid gap-4 border-t border-white/25 py-7 md:grid-cols-[70px_150px_1fr] md:py-9">
                  <span className="text-xs tracking-[.24em] text-white/50">{n}</span>
                  <span className="text-[10px] uppercase tracking-[.24em] text-[#D5B875]">{k}</span>
                  <div><h3 className="serif-display text-4xl md:text-5xl">{t}</h3><p className="mt-3 max-w-2xl leading-7 text-white/68">{d}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F2EBDD] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="editorial-container">
          <h2 className="elore-display mb-12 text-[clamp(4rem,8vw,8rem)]">Timeless<br/><em>materials.</em></h2>
          <div className="grid gap-x-7 gap-y-14 md:grid-cols-2">
            {materials.map(([title,img,text],i)=>(
              <article key={title} className={i%2 ? "md:mt-24" : ""}>
                <div className="elore-crop relative aspect-[4/5]"><Image src={img} alt={title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover"/></div>
                <div className="mt-5 grid grid-cols-[40px_1fr] gap-4 border-t thin-border pt-4">
                  <span className="text-[10px] tracking-[.2em]">0{i+1}</span>
                  <div><h3 className="serif-display text-4xl">{title}</h3><p className="mt-3 max-w-xl leading-7 text-[#241C19]/68">{text}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elore-oxblood px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="serif-display max-w-[12ch] text-5xl leading-[.92] tracking-[-.04em] md:text-7xl">Discover the collection or begin something personal.</h2>
          <div className="flex flex-wrap gap-3"><Link href="/shop" className="border border-white bg-white px-5 py-3 text-[10px] uppercase tracking-[.22em] text-[#241C19]">Shop Collection</Link><Link href="/custom" className="border border-white/60 px-5 py-3 text-[10px] uppercase tracking-[.22em]">Custom Commission</Link></div>
        </div>
      </section>
    </>
  );
}
