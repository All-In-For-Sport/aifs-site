import Image from "next/image";
import { Project } from "@/types";
import Link from "next/link";
import { Button } from "../common";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="grid w-full gap-4 lg:grid-cols-3">
      <div className="relative h-[500px] w-full overflow-hidden rounded-2xl lg:col-span-2">
        <Image
          src={project.image}
          alt={project.name}
          className="object-cover object-center"
          width={project.imageWidth}
          height={project.imageHeight}
        />
      </div>
      <div className="flex flex-col justify-between gap-8 rounded-2xl border border-primary bg-white/5 p-8">
        {project.isActive && (
          <div className="flex flex-col gap-2">
            <div className="text-white/50">Fundraising Progress</div>

            <div className="flex items-end gap-1 font-header text-5xl font-bold text-white">
              ${project.raised.toLocaleString()}
              <div className="font-body text-lg font-medium text-white/50">
                raised
              </div>
            </div>

            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white">
              <div
                className={`h-full bg-primary`}
                style={{
                  width: `${Math.min(
                    Math.round((project.raised / project.goal) * 100),
                    100,
                  )}%`,
                }}
              />
            </div>
          </div>
        )}
        <div className="flex h-full flex-col items-center justify-center gap-2">
          <div className="font-body text-lg font-medium text-white/50">
            {project.isActive ? "Target Amount" : "Amount Raised"}
          </div>
          <div className="font-header text-6xl font-bold text-white">
            $
            {project.isActive
              ? project.goal.toLocaleString()
              : project.raised.toLocaleString()}
          </div>
        </div>
        {project.isActive && (
          <div className="flex w-full flex-col items-stretch gap-4">
            {project.donateCryptoLink && (
              <Link href={project.donateCryptoLink} target="_blank">
                <Button>Donate ETH</Button>
              </Link>
            )}
            {project.donateFiatLink && (
              <Link href={project.donateFiatLink} target="_blank">
                <Button variant="secondary">Donate USD</Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
