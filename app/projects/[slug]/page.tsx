import { mockProject } from "@/app/mockProjects";
import {
  ProjectAbout,
  ProjectCTA,
  ProjectDetails,
  ProjectGoals,
  ProjectHero,
} from "@/components/project";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `${mockProject.name} | All in for Sport`,
    description: mockProject.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
      <div className="block left-0 right-0 mx-auto w-[400px] h-[300px] rounded-full -z-20 bg-[#5A6DED] blur-[100px] absolute -top-[150px]" />
      <ProjectHero project={mockProject} />
      <ProjectAbout project={mockProject} />
      <ProjectDetails project={mockProject} />
      <ProjectGoals project={mockProject} />
      {mockProject.isActive && <ProjectCTA project={mockProject} />}
    </main>
  );
}
