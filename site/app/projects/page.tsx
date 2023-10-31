import { createClient } from "next-sanity";
import {
    ProjectAbout,
    ProjectCTA,
    ProjectDetails,
    ProjectGoals,
    ProjectHero,
} from "@/components/project";
import { ProjectCard } from "@/components/common";
import { Project } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | All in for Sport",
    description: "A funding platform for community-led sports projects.",
};

export default async function ProjectsPage() {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: "2022-08-31",
        useCdn: process.env.NODE_ENV === "production",
    });

    const projects = await client.fetch(
        `*[_type == "project"]{..., "image": image.asset->.url}`
    );

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
            <div className="block left-0 right-0 mx-auto w-[400px] h-[300px] rounded-full -z-20 bg-[#5A6DED] blur-[100px] absolute -top-[150px]" />
            <section className="flex my-24 text-center items-center flex-col gap-12">
                <h2 className="font-bold text-4xl md:text-5xl font-header">
                    All Projects
                </h2>
                <div className="flex lg:flex-row flex-col gap-8">
                    {projects.map((project: Project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </section>
        </main>
    );
}
