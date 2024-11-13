import {
  Contact,
  CurrentProject,
  Hero,
  LatestProjects,
  Mission,
  Video,
} from "@/components/home";

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
