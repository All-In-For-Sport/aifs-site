import { ProjectCard } from "@/components/common";

export default function LatestProjects() {
    return (
        <section className="flex my-24 text-center items-center flex-col gap-12">
            <h2 className="font-bold text-4xl md:text-5xl font-header">
                Latest Projects
            </h2>
            <div className="flex lg:flex-row flex-col gap-8">
                <ProjectCard
                    project={{
                        name: "Supporting a Community of Hoopers in the Philippines",
                        description:
                            "The Grow the Game Manila project aimss to provide young athletes in the city with improved courts to play on, and...",
                        primary_image_url:
                            "https://images.unsplash.com/photo-1645109500794-c23ac64879b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
                    }}
                />
                <ProjectCard
                    project={{
                        name: "Raising for a Youth Basketball Camp in Sitka, Alaska",
                        description:
                            "Our first crowdfunding campaign brought together All In For Sport, Krause House, Project Backboard, Word 2 The Wise...",
                        primary_image_url:
                            "https://images.unsplash.com/photo-1590227632180-80a3bf110871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2553&q=80",
                    }}
                />
            </div>
        </section>
    );
}
