import Image from "next/image";
import { Project } from "@/types";

export function ProjectGoals({ project }: { project: Project }) {
  return (
    <section className="relative my-24 flex max-w-xl flex-col items-center gap-16 lg:max-w-none lg:flex-row">
      <div className="absolute left-0 right-0 -z-20 mx-auto my-auto block h-[200px] w-[200px] -translate-y-8 rounded-full bg-[#5A6DED] blur-[100px] lg:translate-x-24" />
      <div className="flex flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
        <h2 className="font-header text-4xl font-bold md:text-5xl">
          What we hope to achieve together
        </h2>
        <div className="flex max-w-md flex-col gap-4 text-white/50 lg:max-w-none">
          <p>
            Goal:{" "}
            <span className="font-bold text-primary">
              ${project.goal.toLocaleString()}
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-6 text-left">
          {project.goals.map((g) => (
            <div className="flex items-start gap-4" key={g.title}>
              <Image
                src={g.image}
                width={24}
                height={24}
                alt=""
                className="translate-y-1"
              />
              <div className="flex flex-col">
                <div className="font-semibold text-white">{g.title}</div>
                <div className="text-sm text-white/50">{g.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center lg:w-1/2 lg:justify-end">
        <Image
          src="/assets/about-approach.png"
          width={1118}
          height={956}
          className=""
          alt=""
        />
      </div>
    </section>
  );
}
