import { ButtonLink } from "@/components/common/Button";
import { ArrowRight } from "@/components/common";

export default function Hero() {
  return (
    <section className="page-wrap text-center relative mx-auto flex flex-col items-center pt-6 md:pt-12 lg:pt-24">
      <h1 className="max-w-3xl font-header text-4xl leading-snug sm:text-5xl sm:leading-normal md:text-6xl lg:text-7xl md:leading-[3.8rem] lg:leading-[5.5rem] font-extrabold">
        A <span className="text-primary">funding platform</span> for
        community-led sports projects.
      </h1>
      <p className="text-base text-white/50 mt-8 max-w-xl">
        We&apos;re starting a new public goods funding initiative to support
        projects that advance inclusion and empowerment through sport.
      </p>
      <div className="flex  flex-col sm:flex-row gap-2.5 justify-center mt-12 w-full max-w-96">
        <ButtonLink href="/projects" rightIcon={<ArrowRight />}>
          Our Projects
        </ButtonLink>
        <ButtonLink href="/about" variant="secondary">
          Our Story
        </ButtonLink>
      </div>
    </section>
  );
}
