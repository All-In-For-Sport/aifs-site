import Image from "next/image";
import { Tag } from "@/components/common";
import Link from "next/link";

export default function Approach() {
    return (
        <section className="flex relative gap-16 flex-col max-w-xl lg:max-w-none lg:flex-row items-center my-24">
            <div className="block left-0 my-auto right-0 mx-auto w-[200px] h-[200px] rounded-full -translate-y-8 -z-20 bg-[#5A6DED] blur-[100px] absolute lg:translate-x-24" />
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-6 lg:w-1/2">
                <Tag>Our Approach</Tag>
                <h2 className="text-4xl md:text-5xl font-bold font-header">
                    Empowering Communities Globally
                </h2>
                <p className="text-white/50 max-w-md lg:max-w-none">
                    We believe in meeting people where they are and supporting
                    grassroots community-led initiatives. There are so many
                    wonderful organizations working on the ground in communities
                    across the world, who have the local knowledge, experience,
                    and local base. Our multifaceted approach includes:
                </p>
                <div className="flex flex-col text-left gap-4">
                    <div className="flex gap-3">
                        <Image
                            src="/assets/icons/team.png"
                            width={24}
                            height={24}
                            alt=""
                            className="w-auto h-8"
                        />
                        <div className="flex flex-col">
                            <p className="text-lg font-medium">Governance</p>
                            <p className="text-white/50 text-sm max-w-prose">
                                Establishing a flexible, fractal,
                                proposal-driven governance model that will be
                                resourced through a perpetual funding engine.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Image
                            src="/assets/icons/user-group.png"
                            width={24}
                            height={24}
                            alt=""
                            className="w-auto h-8"
                        />
                        <div className="flex flex-col">
                            <p className="text-lg font-medium">Partnerships</p>
                            <p className="text-white/50 text-sm max-w-prose">
                                Collaborating with athlete partners, corporate
                                sponsors, and global communities to create
                                unique funding opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Image
                            src="/assets/icons/sliders.png"
                            width={24}
                            height={24}
                            alt=""
                            className="w-auto h-8"
                        />
                        <div className="flex flex-col">
                            <p className="text-lg font-medium">
                                Community Decision-making
                            </p>
                            <p className="text-white/50 text-sm max-w-prose">
                                Utilizing a community proposal-first approach,
                                where passionate groups from around the world
                                can propose funding for their initiatives.
                            </p>
                        </div>
                    </div>
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
