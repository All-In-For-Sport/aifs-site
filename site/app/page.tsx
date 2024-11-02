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
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
      <Hero />
      <Video />
      {/* {projects.sort(
                (
                    a: { startDate: string | number | Date },
                    b: { startDate: string | number | Date }
                ) =>
                    new Date(b.startDate).getTime() -
                    new Date(a.startDate).getTime()
            )[0] && <CurrentProject project={projects[0]} />} */}
      <Mission />
      {/* <LatestProjects projects={projects} /> */}
      <Contact />
    </main>
  );
}
