import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types";
import { Button } from "@/app/shared/Button";

export function ProjectCTA({ project }: { project: Project }) {
  return (
    <section className="relative my-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="absolute left-0 right-0 -z-20 mx-auto my-auto block h-[200px] w-[200px] -translate-y-20 rounded-full bg-[#5A6DED] blur-[75px] lg:-translate-y-2" />
      {project.donateCryptoLink && (
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-darkText bg-background p-8 pr-12 shadow-lg">
          <div>
            <h5 className="mb-4 text-2xl">Donate with crypto</h5>
            <p className="mb-4 text-sm text-white/50">
              Contribute to this project with crypto. Contribute with ETH using
              the link below.
            </p>
          </div>
          <Link href={project.donateCryptoLink} className="" target="_blank">
            <Button variant="small">Donate with ETH</Button>
          </Link>
          <Image
            className="absolute -right-28 -top-32 h-56 w-56"
            src="/assets/shapes/shape7.png"
            width={250}
            height={250}
            alt=""
          />
        </div>
      )}
      {project.donateFiatLink && (
        <div className="relative justify-between overflow-hidden rounded-2xl border border-darkText bg-background p-8 pr-12 shadow-lg">
          <div>
            <h5 className="mb-4 text-2xl">Donate with fiat</h5>
            <p className="mb-4 text-sm text-white/50">
              Not in crypto? No problem. Contribute in USD using the button
              below.
            </p>
          </div>
          <Link href={project.donateFiatLink} className="" target="_blank">
            <Button>Donate with USD</Button>
          </Link>
          <Image
            className="absolute -right-32 -top-36 h-56 w-56"
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
