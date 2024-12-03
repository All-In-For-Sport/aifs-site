import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/app/shared/Tag";

export function Partnership() {
  return (
    <section className="page-wrap flex flex-col-reverse items-center gap-16 py-12 lg:flex-row lg:py-24">
      <div className="flex w-full justify-center lg:justify-end">
        <div className="relative h-[300px] w-full md:h-[473px] md:w-[484px]">
          <Image
            src="https://images.unsplash.com/photo-1508972348941-5e2b14d04c64?auto=format&fit=crop&q=80&w=1000"
            fill
            className="rounded-3xl object-cover object-center"
            sizes="(max-width: 640px) 100vw, 50vw"
            alt=""
          />
          <Image
            src="/assets/shapes/shape5.png"
            alt=""
            width={81}
            height={83}
            className="absolute -top-10 right-4 h-auto w-16 md:w-24"
          />
          <Image
            src="/assets/shapes/shape6.png"
            alt=""
            width={180}
            height={180}
            className="absolute -bottom-16 -left-16 h-auto w-48 md:-bottom-20 md:-left-20 md:w-64"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <Tag>Partnership</Tag>
        <h2 className="font-header text-4xl font-bold md:text-5xl">
          Our Partnership with SuperBenefit
        </h2>
        <p className="max-w-md text-white/50 lg:max-w-none">
          AIFS is working closely with{" "}
          <Link
            href="https://superbenefit.org"
            className="font-bold text-primary"
          >
            SuperBenefit DAO
          </Link>{" "}
          to explore new ways of shifting power in the way capital and
          decision-making flow in communities, designing novel governance
          systems and leveraging blockchain-enabled finance and coordination
          infrastructure to address systemic inequities.
          <br />
          <br />
          Together, we are working on beta testing our ideas and understanding
          the true value <span className="font-bold text-primary">
            AIFS
          </span>{" "}
          can provide to its partners, community, and those who have not
          typically had a seat at the table in governance and decision-making.
        </p>
      </div>
    </section>
  );
}
