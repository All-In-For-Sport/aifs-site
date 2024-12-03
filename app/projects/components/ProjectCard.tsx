import Image from "next/image";

import { ButtonLink } from "../../shared/Button";
import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex w-full flex-col rounded-3xl border-2 border-gray-700 p-6 transition duration-300 ease-out hover:scale-[1.01]">
      <div className="relative h-[200px] overflow-hidden rounded-2xl sm:h-[300px]">
        <Image
          src={project.image}
          alt=""
          className="object-cover object-center"
          fill
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between pt-8 text-center md:px-8">
        <div>
          <h5 className="font-header text-2xl font-bold">{project.name}</h5>
          <p className="mt-3 text-sm text-white/50">{project.description}</p>
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
