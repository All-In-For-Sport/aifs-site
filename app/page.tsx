import { Contact, Hero, Mission } from "@/components/home";

import { Video } from "@/components/home/Video";

export default async function Home() {
  return (
    <>
      <Hero />
      <Video />

      <Mission />
      {/* <LatestProjects projects={projects} /> */}
      <Contact />
    </>
  );
}
