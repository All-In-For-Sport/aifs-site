import { notFound } from "next/navigation";

import { projects } from "@/app/projects";
import { ProjectHero } from "../components/ProjectHero";
import { ProjectAbout } from "../components/ProjectAbout";
import { ProjectDetails } from "../components/ProjectDetails";
import { ProjectGoals } from "../components/ProjectGoals";
import { ProjectCTA } from "../components/ProjectCTA";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = projects.find((project) => project.slug === slug);
  if (!project) return notFound();

  return {
    title: `${project.name} | All in for Sport`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = projects.find((project) => project.slug === slug);
  if (!project) return notFound();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
      <div className="absolute -top-[150px] left-0 right-0 -z-20 mx-auto block h-[300px] w-[400px] rounded-full bg-[#5A6DED] blur-[100px]" />
      <ProjectHero project={project} />
      <ProjectAbout project={project} />
      <ProjectDetails project={project} />
      <ProjectGoals project={project} />
      {project.isActive && <ProjectCTA project={project} />}
    </main>
  );
}
