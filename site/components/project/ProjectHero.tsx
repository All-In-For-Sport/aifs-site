import Image from "next/image";
import { Project } from "@/types";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "../common";

export default function ProjectHero({ project }: { project: Project }) {
    return (
        <section className="grid lg:grid-cols-3 gap-4 w-full">
            <div className="w-full rounded-2xl overflow-hidden h-[500px] relative lg:col-span-2">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="rounded-2xl p-8 border-primary border flex justify-between gap-8 flex-col bg-white/5">
                {project.isActive && (
                    <div className="flex flex-col gap-2">
                        <div className="text-white/50">
                            Fundraising Progress
                        </div>

                        <div className="flex items-end text-5xl font-header font-bold gap-1 text-white">
                            ${project.raised.toLocaleString()}
                            <div className="text-white/50 text-lg font-body font-medium">
                                raised
                            </div>
                        </div>

                        <div className="bg-white h-2 mt-2 w-full overflow-hidden rounded-full">
                            <div
                                className={`bg-primary h-full`}
                                style={{
                                    width: `${Math.min(
                                        Math.round(
                                            (project.raised / project.goal) *
                                                100
                                        ),
                                        100
                                    )}%`,
                                }}
                            />
                        </div>
                    </div>
                )}
                <div className="h-full items-center justify-center flex flex-col gap-2">
                    <div className="text-white/50 text-lg font-body font-medium">
                        {project.isActive ? "Target Amount" : "Amount Raised"}
                    </div>
                    <div className="text-6xl font-header font-bold text-white">
                        $
                        {project.isActive
                            ? project.goal.toLocaleString()
                            : project.raised.toLocaleString()}
                    </div>
                </div>
                {project.isActive && (
                    <div className="w-full items-stretch flex gap-4 flex-col">
                        {project.donateCryptoLink && (
                            <Link
                                href={project.donateCryptoLink}
                                target="_blank"
                            >
                                <PrimaryButton>Donate ETH</PrimaryButton>
                            </Link>
                        )}
                        {project.donateFiatLink && (
                            <Link href={project.donateFiatLink} target="_blank">
                                <SecondaryButton>Donate USD</SecondaryButton>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
