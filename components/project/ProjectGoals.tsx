import Image from "next/image";
import { Project } from "@/types";

export default function ProjectGoals({ project }: { project: Project }) {
    return (
        <section className="flex relative gap-16 flex-col max-w-xl lg:max-w-none lg:flex-row items-center my-24">
            <div className="block left-0 my-auto right-0 mx-auto w-[200px] h-[200px] rounded-full -translate-y-8 -z-20 bg-[#5A6DED] blur-[100px] absolute lg:translate-x-24" />
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-6 lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold font-header">
                    What we hope to achieve together
                </h2>
                <div className="text-white/50 max-w-md lg:max-w-none flex flex-col gap-4">
                    <p>
                        Goal:{" "}
                        <span className="text-primary font-bold">
                            ${project.goal.toLocaleString()}
                        </span>
                    </p>
                </div>
                <div className="flex flex-col text-left gap-6">
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
                                <div className="text-white font-semibold">
                                    {g.title}
                                </div>
                                <div className="text-white/50 text-sm">
                                    {g.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center lg:justify-end lg:w-1/2">
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
