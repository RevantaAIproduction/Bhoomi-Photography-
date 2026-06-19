import { HeroFilm } from "@/components/hero/HeroFilm";
import { StoryIntroduction } from "@/components/home/StoryIntroduction";
import { FeaturedMoments } from "@/components/home/FeaturedMoments";
import { AlbumPreview } from "@/components/album/AlbumPreview";
import { FeaturedFilm } from "@/components/film/FeaturedFilm";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroFilm />
      <StoryIntroduction />
      <FeaturedMoments />
      <AlbumPreview />
      <FeaturedFilm />
      <FinalCTA />
      <Footer />
    </div>
  );
}

