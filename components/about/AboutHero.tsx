import { GhostButton, PrimaryButton, Tag } from "@/components/common";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex flex-col text-center lg:text-left items-center lg:items-start w-full lg:w-6/12">
                    <Tag>About us</Tag>
                    <h1 className="mt-6 font-header text-4xl lg:text-5xl leading-[48px] lg:leading-[56px] font-extrabold">
                        The Mission: Empowering Through Sport
                    </h1>
                    <p className="text-base text-white/50 mt-8">
                        All In For Sport (AIFS) is a decentralized autonomous
                        organization (DAO) whose mission is to create a public
                        goods funding initiative to support projects that
                        advance inclusion and empowerment through sport.
                    </p>
                    <div className="flex gap-2.5 mt-12">
                        <PrimaryButton>Our Projects</PrimaryButton>
                        <GhostButton>Get updates</GhostButton>
                    </div>
                </div>
                <div className="relative w-full lg:w-6/12">
                    <Image
                        src="/assets/about-hero.png"
                        width={1261}
                        height={1040}
                        alt=""
                    />
                </div>
            </div>
            <div className="lg:w-7/12 grid text-left grid-cols-1 lg:grid-cols-2 mt-16 lg:mt-12 gap-8 lg:gap-6">
                <div className="flex gap-3">
                    <Image
                        src="/assets/icons/chip.png"
                        width={24}
                        height={24}
                        alt=""
                        className="w-auto h-8"
                    />
                    <div className="flex flex-col">
                        <p className="text-lg font-medium">
                            Innovative Funding
                        </p>
                        <p className="text-white/50 text-sm max-w-prose">
                            Exploring web3 tech to create perpetual funding for
                            community initiatives, shifting power dynamics.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Image
                        src="/assets/icons/command.png"
                        width={24}
                        height={24}
                        alt=""
                        className="w-auto h-7"
                    />
                    <div className="flex flex-col">
                        <p className="text-lg font-medium">
                            Empowering Communities
                        </p>
                        <p className="text-white/50 text-sm max-w-prose">
                            Supporting grassroots, community-led sports
                            initiatives, unlocking their true potential.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
