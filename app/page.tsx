import { Hero } from "@/components/hero";
import { AtelierStory } from "@/components/home/atelier-story";
import { CoverageMarquee } from "@/components/home/coverage-marquee";
import { ExperiencesPreview } from "@/components/home/experiences-preview";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { HomeCta } from "@/components/home/home-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AtelierStory />
      <FeaturedCollections />
      <ExperiencesPreview />
      <HomeCta />
      <CoverageMarquee />
    </>
  );
}
