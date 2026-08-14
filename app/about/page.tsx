import Image from "next/image";
import Link from "next/link";
import { AboutGalleryCarousel } from "@/components/about/about-gallery-carousel";

const storyCards = [
  {
    title: "A life shaped by culture",
    description:
      "Born in Cameroon and raised in Paris, Salomé's creative perspective was shaped by a life immersed in culture, fashion, and artistry. As a former model, she experienced the fashion world from within, developing an appreciation for the relationship between clothing, identity, and self-expression. Those early experiences continue to influence her approach to design—one that values both beauty and meaning."
  },
  {
    title: "A craft discovered by hand",
    description:
      "For Salomé, hat-making was never simply about creating an accessory, it became a language of craft. After studying Fashion Design in Boston, a hat-making class in New York unexpectedly changed the course of her creative journey. Drawn to the rhythm of shaping felt by hand, she continued her training at Schola Academy in Florence, Italy."
  },
  {
    title: "Moving tradition forward",
    description:
      "Named after the idea of moving forward, Elöre reflects that tradition not only deserves to be preserved but is something to carry into the present with intention. Every hat is thoughtfully shaped by hand using Elöre's signature wooden hat blocks, honoring time-honored techniques while embracing a contemporary perspective."
  },
  {
    title: "A living tradition",
    description:
      "Today, her work extends beyond creating hats. Through collections, workshops, and collaborations, Salomé is committed to keeping the art of hat-making alive—inviting others to slow down, appreciate the beauty of handmade objects, and reconnect with the stories woven into every piece."
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
      <section className="px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-12 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col justify-center rounded-luxe border thin-border bg-white/78 p-6 shadow-soft backdrop-blur md:p-8 lg:p-10">
              <h1 className="serif-display text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
                Meet the designer behind the craft
              </h1>

              <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-brand-ink/75 md:text-lg">
                <p>
                  Elöre Atelier was founded by designer{" "}
                  <strong className="font-semibold text-brand-ink">Salomé Kopasz</strong>,
                  whose work is rooted in the belief that traditional craftsmanship
                  has the power to preserve stories, connect generations, and move
                  tradition forward.
                </p>

                <p>
                  Each creation is a quiet reminder that craftsmanship is a living
                  tradition, one that continues to evolve with every hand that shapes it.
                </p>
              </div>
            </div>

            <AboutGalleryCarousel
              className="min-h-[420px] md:min-h-[560px] lg:min-h-[640px]"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="rounded-luxe border thin-border bg-[#f7f1ea] p-6 shadow-soft md:p-8 lg:sticky lg:top-28">
              <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-5xl">
                Salomé's path into hat-making.
              </h2>
              <p className="mt-5 text-base leading-8 text-brand-ink/72 md:text-lg">
                Her story moves through culture, fashion, handwork, and a deep
                respect for the artisans who preserve craft across generations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {storyCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.5rem] border thin-border bg-white p-6 shadow-soft md:p-7"
                >
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] lg:min-h-full">
              <Image
                src="/images/about/manifesto.jpg"
                alt="ELÖRE Atelier philosophy and manifesto"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
                Philosophy and Manifesto
              </h2>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/72 p-5 md:p-6">
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                    Our Philosophy
                  </h3>

                  <div className="mt-5 space-y-4 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
                    <p>
                      Elöre is built on the belief that tradition should never be
                      left behind—it should be carried forward into the next generation.
                    </p>

                    <p>
                      The two dots above the Ö are a quiet symbol of that journey.
                      The first dot represents the craft: the enduring artistry of
                      hat-making, shaped by hand and preserved through generations
                      of makers. The second represents movement: the stories we
                      continue to tell, the evolution of design, and the
                      responsibility to bring heritage into the present.
                    </p>

                    <p>
                      The Ö in Elöre serves as a confident reminder that every step
                      forward begins with honoring the roots of where we came from
                      and how it's carried forward.
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-white/72 p-5 md:p-6">
                  <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                    Our Manifesto
                  </h3>

                  <div className="mt-5 space-y-4 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
                    <p>
                      We believe the finest things cannot be rushed. At Elöre
                      Atelier, every hat begins with a story. We embrace a slower
                      rhythm of making—one that values skilled hands, intentional
                      design, and the discipline of craftsmanship over speed and
                      mass production.
                    </p>

                    <p>
                      Rooted in Boston and inspired by a global tradition of
                      hat-making, our atelier exists to preserve a craft that has
                      shaped generations of makers.
                    </p>

                    <p>
                      Sustainability is not a trend—it is a responsibility. By
                      crafting each hat made to order, reducing unnecessary waste,
                      and choosing recycled, plastic-free packaging, we create with
                      care for both the object and the world it enters.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 rounded-[1.5rem] bg-white/72 p-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
                As artisans, we believe we are storytellers. Every hat carries the
                knowledge of those who came before us while becoming part of the story
                of the person who wears it. Elöre is a place where heritage is
                practiced, stories are shared, and craftsmanship continues to evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="editorial-container grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
            >
              <div className="relative min-h-[240px] overflow-hidden bg-[#f7f1ea] md:min-h-[300px]">
                <Image
                  src={principle.image}
                  alt={principle.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-7">
                <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                  {principle.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10 lg:px-12">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <h2 className="serif-display max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Discover the collection or step inside the atelier.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Explore handcrafted pieces, learn more about the making
                  process, or begin a custom design conversation.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex w-fit rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
                >
                  Shop the Collection
                </Link>
                <Link
                  href="/custom"
                  className="inline-flex w-fit rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Begin a Custom Hat
                </Link>
                <Link
                  href="/studio"
                  className="inline-flex w-fit rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Enter the Atelier
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
