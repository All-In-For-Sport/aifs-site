import Image from "next/image";

import { ButtonLink } from "./Button";
import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="transition w-full duration-300 flex flex-col hover:scale-[1.01] ease-out border-2 border-gray-700 p-6 rounded-3xl">
      <div className="rounded-2xl h-[200px] sm:h-[300px] relative overflow-hidden">
        <Image
          src={project.image}
          alt=""
          className="object-center object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>
      <div className="pt-8 justify-between flex-1 md:px-8 text-center flex flex-col items-center">
        <div>
          <h5 className="text-2xl font-bold font-header">{project.name}</h5>
          <p className="text-white/50 mt-3 text-sm">{project.description}</p>
        </div>
        <div className="mt-8">
          <ButtonLink href={`/projects/${project.slug}`} variant="secondary">
            Read more
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
