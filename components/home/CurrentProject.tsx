import Image from "next/image";
import { ArrowRight, Calendar, Coins } from "@/components/shared";
import { Project } from "@/types";
import Link from "next/link";

export default function CurrentProject({ project }: { project: Project }) {
  return (
    <section className="my-12 flex flex-col gap-16 md:p-8 lg:my-24">
      <div className="grid grid-cols-2 gap-8 md:gap-16 lg:grid-cols-5">
        <div className="col-span-3">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <div className="max-w-lg font-header text-4xl font-bold text-gray-100 lg:max-w-none">
              {project.name}
            </div>
            <div className="text-base text-white/50">{project.description}</div>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              {project.donateFiatLink && (
                <Link href={project.donateFiatLink}>
                  button
                  {/* <PrimaryButton icon={<ArrowRight />}>
                    Pledge your support
                  </PrimaryButton> */}
                </Link>
              )}
              <Link href={`/projects${project.slug}`}>
                {/* <SecondaryButton>Learn more</SecondaryButton> */}
                button
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex w-full flex-row items-center justify-center gap-12 lg:col-span-2 lg:flex-col lg:gap-2 xl:flex-row xl:gap-12">
          <div className="flex h-full items-center">
            <div className="flex w-full flex-col items-center justify-center md:justify-end lg:flex-row lg:items-start lg:justify-center lg:gap-2">
              <div className="py-1 text-secondary">
                <Coins />
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="whitespace-nowrap font-header text-2xl font-bold text-gray-100">
                  ${project.goal}
                </div>
                <div className="font-body text-base opacity-70">to raise</div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex h-full items-center md:col-span-1">
            <div className="flex w-full flex-col items-center justify-center md:justify-end lg:flex-row lg:items-start lg:justify-center lg:gap-2">
              <div className="py-1 text-primary">
                <Calendar />
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="whitespace-nowrap font-header text-2xl font-bold text-gray-100">
                  {new Date(project.endDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="font-body text-base opacity-70">
                  campaign ends
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group mx-auto flex w-full max-w-md flex-col justify-center lg:max-w-none lg:flex-row">
        <div className="flex max-h-48">
          <Image
            src="/assets/shapes/shape1.png"
            width={330}
            height={180}
            alt=""
            className="h-auto w-2/3"
          />
          <Image
            src="/assets/shapes/shape2.png"
            width={180}
            height={180}
            alt=""
            className="h-auto w-1/3"
          />
        </div>
        <div className="flex flex-1 flex-row justify-between gap-0">
          <Image
            src="/assets/shapes/shape3.png"
            width={180}
            height={180}
            alt=""
            className="w-3/8 h-auto"
          />

          <Image
            src="/assets/shapes/shape4.png"
            width={180}
            height={180}
            alt=""
            className="w-3/8 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
