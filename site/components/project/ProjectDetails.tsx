import Image from "next/image";
import { Project } from "@/types";

export default function ProjectDetails({ project }: { project: Project }) {
    return (
        <section className="flex gap-16 flex-col-reverse max-w-xl lg:max-w-none lg:flex-row items-center my-12 lg:my-24">
            <div className="w-full flex justify-center lg:justify-end">
                <div className="md:w-[484px] md:h-[473px] w-full h-[300px] relative ">
                    {project.projectDetails.videoUrl ? (
                        <iframe
                            src={project.projectDetails.videoUrl}
                            title={project.name}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                            className="w-full h-full rounded-2xl relative z-10"
                            allowFullScreen
                        />
                    ) : (
                        <Image
                            src="https://images.unsplash.com/photo-1508972348941-5e2b14d04c64?auto=format&fit=crop&q=80&w=1000"
                            fill
                            className="object-cover object-center rounded-3xl"
                            sizes="(max-width: 640px) 100vw, 50vw"
                            alt=""
                        />
                    )}
                    <Image
                        src="/assets/shapes/shape5.png"
                        alt=""
                        width={81}
                        height={83}
                        className="w-16 md:w-24 h-auto absolute -top-10 right-4"
                    />
                    <Image
                        src="/assets/shapes/shape6.png"
                        alt=""
                        width={180}
                        height={180}
                        className="w-48 md:w-64 h-auto absolute md:-left-20 md:-bottom-20 -bottom-16 -left-16"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-6">
                <h2 className="text-4xl md:text-5xl font-bold font-header">
                    {project.projectDetails.title}
                </h2>
                <p className="text-white/50 flex flex-col gap-4 max-w-md lg:max-w-none">
                    {project.projectDetails.description
                        .split("\n")
                        .map((line, i) => (
                            <span key={i} className="block">
                                {line}
                            </span>
                        ))}
                </p>
            </div>
        </section>
    );
}
