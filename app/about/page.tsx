import { Metadata } from "next";

import { Approach } from "./components/Approach";
import { Partnership } from "./components/Partnership";
import { AboutHero } from "./components/AboutHero";
import { BuildTogether } from "./components/BuildTogether";
import { AboutCTA } from "./components/AboutCTA";
import Contact from "../shared/Contact";

export const metadata: Metadata = {
  title: "About | All in for Sport",
  description: "A Coordi-nation for grassroots sports projects",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <Partnership />
      <Approach />
      <BuildTogether />
      <AboutCTA />
      <Contact />
    </>
  );
}
