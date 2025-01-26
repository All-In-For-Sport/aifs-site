import Contact from "@/app/shared/Contact";
import Hero from "@/app/home/components/Hero";
import Mission from "@/app/home/components/Mission";
import Video from "@/app/home/components/Video";
import FeaturedUpdates from "./home/components/FeaturedUpdates";
import { getFeatures } from "./features/getFeatures";
import { Metadata } from "next";
import { siteLinks } from "./siteMeta";

export const metadata: Metadata = {
  metadataBase: new URL(siteLinks.siteUrl),
  title: "All in for Sport",
  description: "A Coordi-nation for grassroots sports projects",
};

export default async function Home() {
  return (
    <>
      <Hero />
      <Video />
      <Mission />
      {getFeatures().BLOG && <FeaturedUpdates />}
      <Contact />
    </>
  );
}
