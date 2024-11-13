import { AboutCTA, AboutHero, PilotProjects } from "@/components/about";
import Approach from "@/components/about/Approach";
import Partnership from "@/components/about/Partnership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | All in for Sport",
  description: "A funding platform for community-led sports projects.",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <Partnership />
      <Approach />
      <PilotProjects />
      <AboutCTA />
    </>
  );
}
