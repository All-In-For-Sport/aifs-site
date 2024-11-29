import { PrimaryButton, SecondaryButton } from "@/components/common/Button";
import { ArrowRight } from "@/components/common";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="page-wrap text-center max-w-3xl relative mx-auto flex flex-col items-center pt-6 md:pt-12 lg:pt-24">
      <h1 className="font-header text-5xl md:text-6xl lg:text-7xl leading-[64px] md:leading-[72px] lg:leading-[84px] font-extrabold">
        A <span className="text-primary">funding platform</span> for
        community-led sports projects.
      </h1>
      <p className="text-base text-white/50 mt-8 max-w-xl">
        We&apos;re starting a new public goods funding initiative to support
        projects that advance inclusion and empowerment through sport.
      </p>
      <div className="mt-12 w-full flex flex-col sm:flex-row gap-2.5">
        <Link href="/projects">
          <PrimaryButton icon={<ArrowRight />}>Our Projects</PrimaryButton>
        </Link>
        <Link href="/about">
          <SecondaryButton>Our Story</SecondaryButton>
        </Link>
      </div>
    </section>
  );
}
