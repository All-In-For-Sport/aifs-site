import { ProjectCard } from "@/components/common";
import { Metadata } from "next";
import { mockProject } from "../mockProjects";

export const metadata: Metadata = {
  title: "Projects | All in for Sport",
  description: "A funding platform for community-led sports projects.",
};

export default async function ProjectsPage() {
  return (
    <>
      <div className="block left-0 right-0 mx-auto w-[400px] h-[300px] rounded-full -z-20 bg-[#5A6DED] blur-[100px] absolute -top-[150px]" />
      <section className="flex my-24 text-center items-center flex-col gap-12">
        <h2 className="font-bold text-4xl md:text-5xl font-header">
          All Projects
        </h2>
        <div className="flex lg:flex-row flex-col gap-8">
          <ProjectCard project={mockProject} />
        </div>
      </section>
    </>
  );
}
