import { Hero } from "@/components/hero";
import { AtelierStory } from "@/components/home/atelier-story";
import { CustomJourney } from "@/components/home/custom-journey";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { HomeCta } from "@/components/home/home-cta";
import { LookbookPreview } from "@/components/home/lookbook-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <AtelierStory />
      <LookbookPreview />
      <CustomJourney />
      <HomeCta />
    </>
  );
}
