import { ProjectCard } from "@/components/common";
import { Metadata } from "next";
import { mockProjects } from "../mockProjects";

export const metadata: Metadata = {
  title: "Projects | All in for Sport",
  description: "A funding platform for community-led sports projects.",
};

export default async function ProjectsPage() {
  return (
    <section className="page-wrap my-24 flex w-full flex-col items-center gap-12 text-center">
      <h2 className="font-header text-4xl font-bold md:text-5xl">
        All Projects
      </h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        {mockProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
