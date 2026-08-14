import { Hero } from "@/components/hero";
import { AtelierStory } from "@/components/home/atelier-story";
import { CoverageMarquee } from "@/components/home/coverage-marquee";
import { ExperiencesPreview } from "@/components/home/experiences-preview";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { HomeCta } from "@/components/home/home-cta";
import { LookbookPreview } from "@/components/home/lookbook-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="elore-oxblood px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="editorial-container grid gap-10 lg:grid-cols-[.35fr_1fr]">
          <p className="elore-kicker pt-2 text-white/65">01 / The House</p>
          <h2 className="serif-display max-w-[14ch] text-5xl leading-[.95] tracking-[-.04em] md:text-7xl lg:text-[6rem]">
            A hat should not finish a look. It should begin a conversation.
          </h2>
        </div>
      </section>
      <AtelierStory />
      <FeaturedCollections />
      <LookbookPreview />
      <ExperiencesPreview />
      <HomeCta />
      <CoverageMarquee />
    </>
  );
}
