import Contact from "@/app/home/components/Contact";
import Hero from "@/app/home/components/Hero";
import Mission from "@/app/home/components/Mission";
import Video from "@/app/home/components/Video";
import FeaturedUpdates from "./home/components/FeaturedUpdates";

export default async function Home() {
  return (
    <>
      <Hero />
      <Video />
      <Mission />
      <FeaturedUpdates />
      <Contact />
    </>
  );
}
