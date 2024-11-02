import Image from "next/image";
import { SmallButton } from "@/components/common";
import Link from "next/link";
import { Project } from "@/types";

export default function ProjectCTA({ project }: { project: Project }) {
    return (
        <section className="my-24 relative grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="block left-0 my-auto right-0 mx-auto w-[200px] h-[200px] rounded-full -translate-y-20 lg:-translate-y-2 -z-20 bg-[#5A6DED] blur-[75px] absolute" />
            {project.donateCryptoLink && (
                <div className="rounded-2xl flex flex-col justify-between overflow-hidden shadow-lg border pr-12 border-darkText bg-background relative p-8">
                    <div>
                        <h5 className="text-2xl mb-4">Donate with crypto</h5>
                        <p className="text-white/50 text-sm mb-4">
                            Contribute to this project with crypto. Contribute
                            with ETH using the link below.
                        </p>
                    </div>
                    <Link
                        href={project.donateCryptoLink}
                        className=""
                        target="_blank"
                    >
                        <SmallButton className="">Donate with ETH</SmallButton>
                    </Link>
                    <Image
                        className="absolute -top-32 -right-28 w-56 h-56"
                        src="/assets/shapes/shape7.png"
                        width={250}
                        height={250}
                        alt=""
                    />
                </div>
            )}
            {project.donateFiatLink && (
                <div className="rounded-2xl justify-between overflow-hidden shadow-lg border pr-12 border-darkText bg-background relative p-8">
                    <div>
                        <h5 className="text-2xl mb-4">Donate with fiat</h5>
                        <p className="text-white/50 mb-4 text-sm">
                            Not in crypto? No problem. Contribute in USD using
                            the button below.
                        </p>
                    </div>
                    <Link
                        href={project.donateFiatLink}
                        className=""
                        target="_blank"
                    >
                        <SmallButton className="">Donate with USD</SmallButton>
                    </Link>
                    <Image
                        className="absolute -top-36 -right-32 w-56 h-56"
                        src="/assets/shapes/shape8.png"
                        width={250}
                        height={250}
                        alt=""
                    />
                </div>
            )}
        </section>
    );
}
