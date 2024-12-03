import { Metadata } from "next";

import { Approach } from "./components/Approach";
import { Partnership } from "./components/Partnership";
import { AboutHero } from "./components/AboutHero";
import { PilotProjects } from "./components/PilotProjects";
import { AboutCTA } from "./components/AboutCTA";

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
