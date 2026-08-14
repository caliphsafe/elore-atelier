import Image from "next/image";
import Link from "next/link";
import { AboutGalleryCarousel } from "@/components/about/about-gallery-carousel";

const storyCards = [
  {
    description:
      "Born in Cameroon and raised in Paris, Salomé's creative perspective was shaped by a life immersed in culture, fashion, and artistry. As a former model, she experienced the fashion world from within, developing an appreciation for the relationship between clothing, identity, and self-expression. Those early experiences continue to influence her approach to design—one that values both beauty and meaning."
  },
  {
    description:
      "For Salomé, hat-making was never simply about creating an accessory, it became a language of craft. After studying Fashion Design in Boston, a hat-making class in New York unexpectedly changed the course of her creative journey. Drawn to the rhythm of shaping felt by hand, she continued her training at Schola Academy in Florence, Italy, where she immersed herself in the traditions of European design and developed a deep respect for the generations of artisans who came before her. That experience became the foundation of Elöre Atelier."
  },
  {
    description:
      "Named after the idea of \"moving forward,\" Elöre reflects that tradition not only deserves to be preserved but is something to carry into the present with intention. Every hat is thoughtfully shaped by hand using Elöre's signature wooden hat blocks, honoring time-honored techniques while embracing a contemporary perspective."
  },
  {
    description:
      "Today, her work extends beyond creating hats. Through collections, workshops, and collaborations, Salomé is committed to keeping the art of hat-making alive—inviting others to slow down, appreciate the beauty of handmade objects, and reconnect with the stories woven into every piece. Each creation is a quiet reminder that craftsmanship is a living tradition, one that continues to evolve with every hand that shapes it."
  }
];

const principles = [
  {
    title: "Natural Material",
    image: "/images/about/natural.jpg",
    alt: "Natural materials used in ELÖRE Atelier hat-making",
    description:
      "We believe exceptional craftsmanship begins with authentic materials. Every Elöre hat is made using thoughtfully sourced natural and raw elements, selected for their quality, longevity, and connection to its origin. By honoring the integrity of each material, we create pieces designed to be worn, treasured, and passed down to the next generation of artisans."
  },
  {
    title: "Crafted in Boston",
    image: "/images/about/crafter.jpg",
    alt: "ELÖRE Atelier hat-making craft in Boston",
    description:
      "Every Elöre hat is shaped by hand in our Boston atelier using excellent hat-making techniques. Made-to-order rather than mass produced, each piece is shaped, finished, and refined by hand—embracing a slower process that allows craft's individuality to define every part of the hat."
  },
  {
    title: "Packaged with Purpose",
    image: "/images/about/packaged.jpg",
    alt: "ELÖRE Atelier packaging with purpose",
    description:
      "Thoughtful making extends beyond the hat itself. From our slow fashion model to recycled, plastic-free packaging, every decision reflects our commitment to reducing waste and creating responsibly. We believe lasting craftsmanship and conscious practices keep the craft sacred."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-bone text-brand-ink">
        <div className="absolute -left-20 top-28 h-80 w-80 rounded-full bg-brand-sand/75" />

        <div className="editorial-container grid min-h-[86svh] gap-8 px-5 pb-12 pt-10 md:px-8 md:pt-12 lg:grid-cols-12 lg:px-12">
          <div className="relative z-10 flex flex-col justify-end lg:col-span-5">
            <h1 className="serif-display max-w-[9ch] text-[clamp(4.4rem,10vw,10.5rem)] leading-[0.76] tracking-[-0.07em] text-brand-olive">
              Meet the designer behind the craft
            </h1>
            <div className="mt-8 max-w-xl space-y-5 border-l border-brand-maroon/35 pl-5 text-base leading-8 text-brand-olive/75 md:text-lg">
              <p>
                Elöre Atelier was founded by designer <strong className="font-semibold text-brand-olive">Salomé Kopasz</strong>, whose work is rooted in the belief that traditional craftsmanship has the power to preserve stories, connect generations, and move tradition forward.
              </p>
            </div>
          </div>

          <div className="relative z-10 lg:col-span-7 lg:pt-10">
            <div className="elore-collage elore-collage--olive">
              <AboutGalleryCarousel
                className="min-h-[520px] md:min-h-[690px]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-maroon text-white">
        <div className="editorial-container px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="serif-display text-5xl leading-[0.88] md:text-7xl">
                Meet the designer behind the craft
              </h2>
            </div>
            <div className="grid gap-5 lg:col-span-8">
              {storyCards.map((card, index) => (
                <article key={index} className={`grid gap-5 border-t border-white/24 pt-6 md:grid-cols-[0.35fr_1fr] ${index % 2 ? "md:ml-20" : ""}`}>
                  <p className="serif-display text-7xl leading-none text-brand-sand/60">0{index + 1}</p>
                  <div>
                    <p className="max-w-3xl text-base leading-8 text-white/82 md:text-lg md:leading-9">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-brand-bone text-brand-ink">
        <div className="editorial-container grid gap-8 px-5 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="relative min-h-[420px] overflow-hidden lg:col-span-5 lg:min-h-[720px]">
            <Image
              src="/images/about/manifesto.jpg"
              alt="ELÖRE Atelier philosophy and manifesto"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover elore-slant"
            />
          </div>

          <div className="lg:col-span-7">
            <h2 className="serif-display text-5xl leading-[0.88] text-brand-olive md:text-7xl lg:text-8xl">
              Philosophy and Manifesto
            </h2>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="relative border-l border-brand-maroon/35 pl-6">
                <span className="absolute -left-3 top-0 h-5 w-5 rounded-full bg-brand-sand" />
                <h3 className="serif-display text-4xl leading-tight text-brand-olive">Our Philosophy</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-brand-olive/75 md:text-base md:leading-8">
                  <p>Elöre is built on the belief that tradition should never be left behind—it should be carried forward into the next generation.</p>
                  <p>The two dots above the Ö are a quiet symbol of that journey. The first dot represents the craft: the enduring artistry of hat-making, shaped by hand and preserved through generations of makers. The second represents movement: the stories we continue to tell, the evolution of design, and the responsibility to bring heritage into the present.</p>
                  <p>As artisans, we believe we are storytellers. Every hat carries the knowledge of those who came before us while becoming part of the story of the person who wears it. In a world increasingly driven by automation and fast production, choosing to make by hand is an act of preservation. It is our commitment to keeping the art of hat-making alive and forever evolving.</p>
                  <p>The Ö in Elöre serves as a confident reminder that every step forward begins with honoring the roots of where we came from and how it's carried forward.</p>
                </div>
              </div>
              <div className="relative border-l border-brand-maroon/35 pl-6 lg:mt-24">
                <span className="absolute -left-3 top-0 h-5 w-5 rounded-full bg-brand-maroon" />
                <h3 className="serif-display text-4xl leading-tight text-brand-olive">Our Manifesto</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-brand-olive/75 md:text-base md:leading-8">
                  <p>We believe the finest things cannot be rushed. At Elöre Atelier, every hat begins with a story. We embrace a slower rhythm of making—one that values skilled hands, intentional design, and the discipline of craftsmanship over speed and mass production.</p>
                  <p>Rooted in Boston and inspired by a global tradition of hat-making, our atelier exists to preserve a craft that has shaped generations of makers. We work with natural materials sourced from trusted artisans around the world, transforming them by hand into pieces that honor their origins while embracing a contemporary perspective.</p>
                  <p>Sustainability is not a trend—it is a responsibility. By crafting each hat made to order, reducing unnecessary waste, and choosing recycled, plastic-free packaging, we create with care for both the object and the world it enters.</p>
                  <p>Elöre is a place where heritage is practiced, stories are shared, and craftsmanship continues to evolve. Every piece we create is a celebration of slow making, cultural exchange, and the belief that the traditions worth preserving are the ones we continue to live.</p>
                </div>
              </div>
            </div>

            <p className="mt-10 max-w-4xl border-t border-brand-olive/25 pt-6 text-base leading-8 text-brand-olive/75 md:text-lg">
              As artisans, we believe we are storytellers. Every hat carries the knowledge of those who came before us while becoming part of the story of the person who wears it. Elöre is a place where heritage is practiced, stories are shared, and craftsmanship continues to evolve.
            </p>
          </div>
        </div>
      </section>

      <section className="surface-sand overflow-hidden">
        <div className="editorial-container px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <h2 className="serif-display text-5xl leading-[0.88] text-brand-olive md:text-7xl">Natural Material. Crafted in Boston. Packaged with Purpose.</h2>
            </div>

          </div>

          <div className="mt-14 space-y-16 md:space-y-24">
            {principles.map((principle, index) => (
              <article key={principle.title} className="grid gap-7 border-t border-brand-olive/25 pt-7 lg:grid-cols-12 lg:items-center">
                <div className={`relative min-h-[340px] overflow-hidden md:min-h-[500px] lg:col-span-7 ${index % 2 ? "lg:order-2 lg:col-start-6" : ""}`}>
                  <Image
                    src={principle.image}
                    alt={principle.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
                <div className={`lg:col-span-4 ${index % 2 ? "lg:order-1" : "lg:col-start-9"}`}>
                  <p className="serif-display text-7xl leading-none text-brand-maroon/28">0{index + 1}</p>
                  <h3 className="serif-display mt-2 text-4xl leading-tight text-brand-olive md:text-5xl">{principle.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-brand-olive/78 md:text-base md:leading-8">{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-sand text-brand-ink">
        <div className="editorial-container grid gap-7 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-20">
          <h2 className="serif-display max-w-3xl text-5xl leading-[0.9] text-brand-olive md:text-7xl">
            Discover the collection or step inside the atelier.
          </h2>
          <div className="flex flex-col justify-center gap-4">
            <p className="max-w-xl text-base leading-8 text-brand-olive/75">
              Explore handcrafted pieces, learn more about the making process, or begin a custom design conversation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop" className="elore-btn bg-brand-olive text-white">Shop the Collection</Link>
              <Link href="/custom" className="elore-btn border border-brand-olive text-brand-olive">Begin a Custom Hat</Link>
              <Link href="/studio" className="elore-btn border border-brand-olive text-brand-olive">Enter the Atelier</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
