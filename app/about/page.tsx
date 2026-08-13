import Image from "next/image";
import Link from "next/link";
import { AboutGalleryCarousel } from "@/components/about/about-gallery-carousel";

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
      <section className="section-pad pt-12 md:pt-14">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="max-w-4xl">
              <p className="eyebrow">About ELÖRE</p>
              <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
                Meet the designer behind the craft
              </h1>
            </div>

            <div className="mt-8 space-y-5 text-base leading-8 text-brand-ink/75 md:text-lg">
              <p>
                Elöre Atelier was founded by designer{" "}
                <strong className="font-semibold text-brand-ink">Salomé Kopasz</strong>,
                whose work is rooted in the belief that traditional craftsmanship
                has the power to preserve stories, connect generations, and move
                tradition forward.
              </p>

              <p>
                Born in Cameroon and raised in Paris, Salomé&apos;s creative perspective
                was shaped by a life immersed in culture, fashion, and artistry. As
                a former model, she experienced the fashion world from within,
                developing an appreciation for the relationship between clothing,
                identity, and self-expression. Those early experiences continue to
                influence her approach to design—one that values both beauty and
                meaning.
              </p>

              <p>
                For Salomé, hat-making was never simply about creating an accessory,
                it became a language of craft. After studying Fashion Design in
                Boston, a hat-making class in New York unexpectedly changed the
                course of her creative journey. Drawn to the rhythm of shaping felt
                by hand, she continued her training at Schola Academy in Florence,
                Italy, where she immersed herself in the traditions of European
                design and developed a deep respect for the generations of artisans
                who came before her. That experience became the foundation of Elöre
                Atelier.
              </p>

              <p>
                Named after the idea of &quot;moving forward,&quot; Elöre reflects that
                tradition not only deserves to be preserved but is something to carry
                into the present with intention. Every hat is thoughtfully shaped by
                hand using Elöre&apos;s signature wooden hat blocks, honoring time-honored
                techniques while embracing a contemporary perspective.
              </p>

              <p>
                Today, her work extends beyond creating hats. Through collections,
                workshops, and collaborations, Salomé is committed to keeping the art
                of hat-making alive—inviting others to slow down, appreciate the
                beauty of handmade objects, and reconnect with the stories woven into
                every piece. Each creation is a quiet reminder that craftsmanship is
                a living tradition, one that continues to evolve with every hand that
                shapes it.
              </p>
            </div>
          </div>

          <AboutGalleryCarousel />
        </div>
      </section>

      <section className="section-pad pt-0">
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

              <div className="mt-8 space-y-5 text-base leading-8 text-brand-ink/75 md:text-lg">
                <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                  Our Philosophy
                </h3>

                <p>
                  Elöre is built on the belief that tradition should never be left
                  behind—it should be carried forward into the next generation.
                </p>

                <p>
                  The two dots above the Ö are a quiet symbol of that journey. The
                  first dot represents the craft: the enduring artistry of hat-making,
                  shaped by hand and preserved through generations of makers. The
                  second represents movement: the stories we continue to tell, the
                  evolution of design, and the responsibility to bring heritage into
                  the present.
                </p>

                <p>
                  As artisans, we believe we are storytellers. Every hat carries the
                  knowledge of those who came before us while becoming part of the
                  story of the person who wears it. In a world increasingly driven by
                  automation and fast production, choosing to make by hand is an act
                  of preservation. It is our commitment to keeping the art of
                  hat-making alive and forever evolving.
                </p>

                <p>
                  The Ö in Elöre serves as a confident reminder that every step
                  forward begins with honoring the roots of where we came from and how
                  it&apos;s carried forward.
                </p>
              </div>

              <div className="mt-10 space-y-5 text-base leading-8 text-brand-ink/75 md:text-lg">
                <h3 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                  Our Manifesto
                </h3>

                <p>
                  We believe the finest things cannot be rushed. At Elöre Atelier,
                  every hat begins with a story. We embrace a slower rhythm of
                  making—one that values skilled hands, intentional design, and the
                  discipline of craftsmanship over speed and mass production.
                </p>

                <p>
                  Rooted in Boston and inspired by a global tradition of hat-making,
                  our atelier exists to preserve a craft that has shaped generations
                  of makers. We work with natural materials sourced from trusted
                  artisans around the world, transforming them by hand into pieces
                  that honor their origins while embracing a contemporary perspective.
                </p>

                <p>
                  Sustainability is not a trend—it is a responsibility. By crafting
                  each hat made to order, reducing unnecessary waste, and choosing
                  recycled, plastic-free packaging, we create with care for both the
                  object and the world it enters.
                </p>

                <p>
                  Elöre is a place where heritage is practiced, stories are shared,
                  and craftsmanship continues to evolve. Every piece we create is a
                  celebration of slow making, cultural exchange, and the belief that
                  the traditions worth preserving are the ones we continue to live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
            >
              <div className="relative min-h-[280px] overflow-hidden bg-[#f7f1ea] md:min-h-[340px]">
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

      <section className="section-pad pt-0">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/about/about-perspective.jpg"
                alt="ELÖRE Atelier handcrafted hat"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow">The ELÖRE Perspective</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Signature blocks, sculptural form, and a clear sense of identity.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Each Elöre piece is shaped on custom signature blocks unique to
                the brand, blending artistry and identity through proportions,
                elegance, and sculptural character.
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                Through collaborations and workshops, Salome continues to share
                her craft and create a space where tradition, creativity, and
                community move forward together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <p className="eyebrow">Continue Exploring</p>
                <h2 className="serif-display mt-4 max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Discover the collection or step inside the studio.
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
                  className="inline-flex w-fit text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
                >
                  Enter the Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
