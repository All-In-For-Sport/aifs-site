import Image from "next-export-optimize-images/image";

import { Tag } from "@/app/shared/Tag";

export default function Mission() {
  return (
    <section>
      <div className="page-wrap flex flex-col-reverse items-center gap-16 py-12 lg:flex-row lg:py-24">
        <div className="flex w-full justify-center lg:justify-end">
          <div className="relative h-[300px] w-full md:h-[473px] md:w-[484px]">
            <Image
              src="/assets/man-tossing-basketball-in-air.jpg"
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
              className="absolute right-4 top-6 h-auto w-16 md:w-24"
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
          <Tag>Our Mission</Tag>
          <h2 className="font-header text-4xl font-bold md:text-5xl">
            Helping local communities use{" "}
            <span className="font-bold text-primary">
              sport for social change
            </span>
          </h2>
          <p className="max-w-md text-white/50 lg:max-w-none">
            We&apos;re on a mission to bring collaborative governance and
            innovative fundraising tools to sports communities worldwide.
            <br />
            <br />
            Our learning journey begins with sports-loving cities in North
            America including Our journey begins by convening a network of{" "}
            <span className="font-bold text-primary">
              individuals, organizations and grassroots groups
            </span>
            , united by{" "}
            <span className="font-bold text-primary">shared values</span> and a{" "}
            <span className="font-bold text-primary">common purpose</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
