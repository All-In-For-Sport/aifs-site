import Image from "next/image";
import { Project } from "@/types";

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <section className="my-12 flex max-w-xl flex-col-reverse items-center gap-16 lg:my-24 lg:max-w-none lg:flex-row">
      <div className="flex w-full justify-center lg:justify-end">
        <div className="relative h-[300px] w-full md:h-[473px] md:w-[484px]">
          {project.projectDetails.videoUrl ? (
            <iframe
              src={project.projectDetails.videoUrl}
              title={project.name}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
              className="relative z-10 h-full w-full rounded-2xl"
              allowFullScreen
            />
          ) : (
            <Image
              src="https://images.unsplash.com/photo-1508972348941-5e2b14d04c64?auto=format&fit=crop&q=80&w=1000"
              fill
              className="rounded-3xl object-cover object-center"
              sizes="(max-width: 640px) 100vw, 50vw"
              alt=""
            />
          )}
          <Image
            src="/assets/shapes/shape5.png"
            alt=""
            width={81}
            height={83}
            className="absolute -top-10 right-4 h-auto w-16 md:w-24"
          />
          <Image
            src="/assets/shapes/shape6.png"
            alt=""
            width={180}
            height={180}
            className="absolute -bottom-16 -left-16 h-auto w-48 md:-bottom-20 md:-left-20 md:w-64"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <h2 className="font-header text-4xl font-bold md:text-5xl">
          {project.projectDetails.title}
        </h2>
        <p className="flex max-w-md flex-col gap-4 text-white/50 lg:max-w-none">
          {project.projectDetails.description.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
