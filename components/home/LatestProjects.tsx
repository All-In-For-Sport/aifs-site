import { ProjectCard } from "@/components/shared";
import { Project } from "@/types";

export default function LatestProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="my-24 flex flex-col items-center gap-12 text-center">
      <h2 className="font-header text-4xl font-bold md:text-5xl">
        Latest Projects
      </h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
