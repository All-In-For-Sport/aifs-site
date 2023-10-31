import {
    Contact,
    CurrentProject,
    Hero,
    LatestProjects,
    Mission,
    Video,
} from "@/components/home";
import { createClient } from "next-sanity";

export default async function Home() {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: "2022-08-31",
        useCdn: process.env.NODE_ENV === "production",
    });

    const projects = await client.fetch(`*[_type == "project"]{
        ...,
        "image": image.asset->.url,
        "slug": slug.current
    }`);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
            <Hero />
            <Video />
            {projects.sort(
                (
                    a: { startDate: string | number | Date },
                    b: { startDate: string | number | Date }
                ) =>
                    new Date(b.startDate).getTime() -
                    new Date(a.startDate).getTime()
            )[0] && <CurrentProject project={projects[0]} />}
            <Mission />
            <LatestProjects projects={projects} />
            <Contact />
        </main>
    );
}
