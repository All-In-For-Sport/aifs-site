import { createClient } from "next-sanity";
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
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: "2022-08-31",
        useCdn: process.env.NODE_ENV === "production",
    });

    const project = (
        await client.fetch(
            `*[_type == "project" && slug.current == $slug]{..., "image": image.asset->.url, "goals": goals[] {..., "image": image.asset->.url}}`,
            { slug: "/" + params.slug }
        )
    )[0];

    return {
        title: `${project.name} | All in for Sport`,
        description: project.description,
    };
}

export async function generateStaticParams() {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: "2022-08-31",
        useCdn: process.env.NODE_ENV === "production",
    });
    const projects = await client.fetch(`*[_type == "project"]{slug}`);

    return projects.map((project: { slug: string }) => ({
        params: { slug: project.slug },
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: { slug: string };
}) {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: "2022-08-31",
        useCdn: process.env.NODE_ENV === "production",
    });

    const project = (
        await client.fetch(
            `*[_type == "project" && slug.current == $slug]{..., "image": image.asset->.url, "goals": goals[] {..., "image": image.asset->.url}}`,
            { slug: "/" + params.slug }
        )
    )[0];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
            <div className="block left-0 right-0 mx-auto w-[400px] h-[300px] rounded-full -z-20 bg-[#5A6DED] blur-[100px] absolute -top-[150px]" />
            <ProjectHero project={project} />
            <ProjectAbout project={project} />
            <ProjectDetails project={project} />
            <ProjectGoals project={project} />
            {project.isActive && <ProjectCTA project={project} />}
        </main>
    );
}
