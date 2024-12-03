import { ButtonLink } from "@/app/shared/Button";
import { ArrowRight } from "@/app/shared/Icons";

export default function Hero() {
  return (
    <section className="page-wrap relative mx-auto flex flex-col items-center pt-6 text-center md:pt-12 lg:pt-24">
      <h1 className="max-w-3xl font-header text-4xl font-extrabold leading-snug sm:text-5xl sm:leading-normal md:text-6xl md:leading-[3.8rem] lg:text-7xl lg:leading-[5.5rem]">
        A <span className="text-primary">funding platform</span> for
        community-led sports projects.
      </h1>
      <p className="mt-8 max-w-xl text-base text-white/50">
        We&apos;re starting a new public goods funding initiative to support
        projects that advance inclusion and empowerment through sport.
      </p>
      <div className="mt-12 flex w-full max-w-96 flex-col justify-center gap-2.5 sm:flex-row">
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
