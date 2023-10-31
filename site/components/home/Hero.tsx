import { PrimaryButton, SecondaryButton } from "@/components/common/Button";
import { ArrowRight } from "@/components/common";

export default function Hero() {
    return (
        <section className="text-center max-w-3xl relative mx-auto flex flex-col items-center">
            <h1 className="font-header text-5xl md:text-6xl lg:text-7xl leading-[64px] md:leading-[72px] lg:leading-[84px] font-extrabold">
                A <span className="text-primary">funding platform</span> for
                community-led sports projects.
            </h1>
            <p className="text-base text-white/50 mt-8 max-w-xl">
                We're starting a new public goods funding initiative to support
                projects that advance inclusion and empowerment through sport.
            </p>
            <div className="mt-12 min-w-[400px] flex flex-col sm:flex-row gap-2.5">
                <PrimaryButton icon={<ArrowRight />}>
                    Our Projects
                </PrimaryButton>
                <SecondaryButton>Our Story</SecondaryButton>
            </div>
        </section>
    );
}
