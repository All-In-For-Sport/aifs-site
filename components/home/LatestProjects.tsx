import { ProjectCard } from "@/components/common";
import { Project } from "@/types";

export default function LatestProjects({ projects }: { projects: Project[] }) {
    return (
        <section className="flex my-24 text-center items-center flex-col gap-12">
            <h2 className="font-bold text-4xl md:text-5xl font-header">
                Latest Projects
            </h2>
            <div className="flex lg:flex-row flex-col gap-8">
                {projects.slice(0, 2).map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
}
