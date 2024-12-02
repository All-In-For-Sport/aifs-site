// import { mockProject } from "@/app/mockProjects";
import {
  ProjectAbout,
  ProjectCTA,
  ProjectDetails,
  ProjectGoals,
  ProjectHero,
} from "@/components/project";
import { notFound } from "next/navigation";

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   return {
//     title: `${mockProject.name} | All in for Sport`,
//     description: mockProject.description,
//   };
// }

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  return notFound();
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
  //     <div className="absolute -top-[150px] left-0 right-0 -z-20 mx-auto block h-[300px] w-[400px] rounded-full bg-[#5A6DED] blur-[100px]" />
  //     <ProjectHero project={mockProject} />
  //     <ProjectAbout project={mockProject} />
  //     <ProjectDetails project={mockProject} />
  //     <ProjectGoals project={mockProject} />
  //     {mockProject.isActive && <ProjectCTA project={mockProject} />}
  //   </main>
  // );
}
