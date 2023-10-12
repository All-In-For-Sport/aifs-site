import { Project } from "@/types";
import Image from "next/image";
import { SecondaryButton } from ".";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="transition duration-300 hover:scale-[1.01] ease-out border-2 border-gray-700 p-6 rounded-3xl">
            <div className="rounded-2xl h-[200px] sm:h-[300px] relative overflow-hidden">
                <Image
                    src={project.primary_image_url}
                    alt=""
                    className="object-center object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                />
            </div>
            <div className="pt-8 md:px-8 text-center flex flex-col items-center">
                <h5 className="text-2xl font-bold font-header">
                    {project.name}
                </h5>
                <p className="text-white/50 mt-3 text-sm">
                    {project.description}
                </p>
                <div className="mt-8">
                    <SecondaryButton>Read more</SecondaryButton>
                </div>
            </div>
        </div>
    );
}
