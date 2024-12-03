import { Project } from "@/types";

export function ProjectAbout({ project }: { project: Project }) {
  return (
    <section className="relative flex max-w-4xl flex-col gap-2 py-24 text-center">
      <div className="absolute left-0 right-0 -z-20 mx-auto my-auto block h-[200px] w-[200px] -translate-y-8 rounded-full bg-[#5A6DED] blur-[100px]" />
      <h2 className="flex flex-col font-header text-5xl font-extrabold leading-[64px]">
        {project.about.title}
      </h2>
      <p className="flex flex-col gap-4 text-white/50">
        {project.about.description.split("\n").map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>
    </section>
  );
}
