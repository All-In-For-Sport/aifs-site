import { Project } from "@/types";

export default function ProjectAbout({ project }: { project: Project }) {
    return (
        <section className="relative flex flex-col max-w-4xl text-center gap-2 py-24">
            <div className="block left-0 my-auto right-0 mx-auto w-[200px] h-[200px] rounded-full -translate-y-8 -z-20 bg-[#5A6DED] blur-[100px] absolute" />
            <h2 className="font-header text-5xl flex flex-col leading-[64px] font-extrabold">
                {project.about.title}
            </h2>
            <p className="text-white/50 gap-4 flex flex-col">
                {project.about.description.split("\n").map((line, i) => (
                    <span key={i} className="block">
                        {line}
                    </span>
                ))}
            </p>
        </section>
    );
}
