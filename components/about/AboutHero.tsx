import { GhostButton, PrimaryButton, Tag } from "@/components/common";
import Image from "next/image";

export default function AboutHero() {
    return (
        <>
            <section className="mb-24">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
                    <div className="flex flex-col text-center lg:text-left items-center lg:items-start w-full lg:w-6/12">
                        <Tag>About us</Tag>
                        <h1 className="mt-6 font-header text-4xl lg:text-5xl leading-[48px] lg:leading-[56px] font-extrabold">
                            The Mission: Empowering Through Sport
                        </h1>
                        <p className="text-base text-white/50 mt-8">
                            All In For Sport (AIFS) is a decentralized
                            autonomous organization (DAO) whose mission is to
                            create a public goods funding initiative to support
                            projects that advance inclusion and empowerment
                            through sport.
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
                            className="lg:absolute left-0 top-0 lg:min-w-[120%] h-auto"
                        />
                    </div>
                </div>
                <div className="lg:w-7/12 grid text-left grid-cols-1 lg:grid-cols-2 mt-16 lg:mt-12 gap-8">
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
                                Exploring web3 tech to create perpetual funding
                                for community initiatives, shifting power
                                dynamics.
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
            <section className="relative flex flex-col max-w-4xl text-center gap-2 py-24">
                <div className="block left-0 my-auto right-0 mx-auto w-[200px] h-[200px] rounded-full -translate-y-8 -z-20 bg-[#5A6DED] blur-[100px] absolute" />
                <h2 className="font-header text-5xl leading-[64px] font-extrabold">
                    Sprung from Krause House
                </h2>
                <p className="text-white/50">
                    AIFS was born out of Krause House, a DAO seeking to harness
                    the power of web3 to empower fans to purchase and operate an
                    NBA Team. Governed by a community of fans, the basketball
                    lovers and purists, Krause House aims to write the consensus
                    rules that will bring the first fan-governed team to the
                    NBA.
                </p>
            </section>
        </>
    );
}
