import Image from "next-export-optimize-images/image";

import { Button, ButtonLink } from "@/app/shared/Button";
import { Tag } from "@/app/shared/Tag";

export function AboutHero() {
  return (
    <>
      <section className="page-wrap page-section-padding">
        <div className="flex flex-col justify-between gap-16 lg:flex-row lg:gap-8">
          <div className="flex w-full flex-col items-center text-center lg:w-6/12 lg:items-start lg:text-left">
            <Tag>About us</Tag>
            <h1 className="mt-6 font-header text-4xl font-extrabold leading-[48px] lg:text-5xl lg:leading-[56px]">
              The Mission: Empowering Through Sport
            </h1>
            <p className="mt-8 text-base text-white/50">
              All In For Sport (AIFS) is a decentralized autonomous organization
              (DAO) whose mission is to create a coordi-nation to support
              projects that advance inclusion and empowerment through sport.
            </p>
          </div>
          <div className="relative w-full lg:w-6/12">
            <Image
              priority={true}
              src="/assets/about-hero.png"
              width={1261}
              height={1040}
              alt=""
              className="left-0 top-0 h-auto lg:absolute lg:min-w-[120%]"
            />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 text-left lg:mt-32 lg:w-7/12 lg:grid-cols-2">
          <div className="flex gap-3">
            <Image
              priority={true}
              src="/assets/icons/chip.png"
              width={24}
              height={24}
              alt=""
              className="h-8 w-auto"
            />
            <div className="flex flex-col">
              <p className="text-lg font-medium">Innovative Funding</p>
              <p className="max-w-prose text-sm text-white/50">
                Exploring web3 tech to create perpetual funding for community
                initiatives, shifting power dynamics.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Image
              priority={true}
              src="/assets/icons/command.png"
              width={24}
              height={24}
              alt=""
              className="h-7 w-auto"
            />
            <div className="flex flex-col">
              <p className="text-lg font-medium">Empowering Communities</p>
              <p className="max-w-prose text-sm text-white/50">
                Supporting grassroots, community-led sports initiatives,
                unlocking their true potential.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-wrap relative flex max-w-4xl flex-col gap-2 py-24 text-center">
        <div className="absolute left-0 right-0 -z-20 mx-auto my-auto block h-[200px] w-[200px] -translate-y-8 rounded-full bg-[#5A6DED] blur-[100px]" />
        <h2 className="font-header text-5xl font-extrabold leading-[64px]">
          Sprung from Krause House
        </h2>
        <p className="text-white/50">
          AIFS was born out of Krause House, a DAO seeking to harness the power
          of web3 to empower fans to purchase and operate an NBA Team. Governed
          by a community of fans, the basketball lovers and purists, Krause
          House aims to write the consensus rules that will bring the first
          fan-governed team to the NBA.
        </p>
      </section>
    </>
  );
}
