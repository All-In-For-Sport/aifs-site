import Image from "next/image";

import { Tag } from "@/components/shared";

export function Approach() {
  return (
    <section className="page-wrap relative flex flex-col items-center gap-16 py-24 lg:flex-row">
      <div className="absolute left-0 right-0 -z-20 mx-auto my-auto block h-[200px] w-[200px] -translate-y-8 rounded-full bg-[#5A6DED] blur-[100px] lg:translate-x-24" />
      <div className="flex flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
        <Tag>Our Approach</Tag>
        <h2 className="font-header text-4xl font-bold md:text-5xl">
          Empowering Communities Globally
        </h2>
        <p className="max-w-md text-white/50 lg:max-w-none">
          We believe in meeting people where they are and supporting grassroots
          community-led initiatives. There are so many wonderful organizations
          working on the ground in communities across the world, who have the
          local knowledge, experience, and local base. Our multifaceted approach
          includes:
        </p>
        <div className="flex flex-col gap-4 text-left">
          <div className="flex gap-3">
            <Image
              src="/assets/icons/team.png"
              width={24}
              height={24}
              alt=""
              className="h-8 w-auto"
            />
            <div className="flex flex-col">
              <p className="text-lg font-medium">Governance</p>
              <p className="max-w-prose text-sm text-white/50">
                Establishing a flexible, fractal, proposal-driven governance
                model that will be resourced through a perpetual funding engine.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Image
              src="/assets/icons/user-group.png"
              width={24}
              height={24}
              alt=""
              className="h-8 w-auto"
            />
            <div className="flex flex-col">
              <p className="text-lg font-medium">Partnerships</p>
              <p className="max-w-prose text-sm text-white/50">
                Collaborating with athlete partners, corporate sponsors, and
                global communities to create unique funding opportunities.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Image
              src="/assets/icons/sliders.png"
              width={24}
              height={24}
              alt=""
              className="h-8 w-auto"
            />
            <div className="flex flex-col">
              <p className="text-lg font-medium">Community Decision-making</p>
              <p className="max-w-prose text-sm text-white/50">
                Utilizing a community proposal-first approach, where passionate
                groups from around the world can propose funding for their
                initiatives.
              </p>
            </div>
          </div>
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
