import { PrimaryButton, SecondaryButton } from "@/components/common/Button";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <h1 className="font-header text-5xl md:text-6xl lg:text-7xl leading-[64px] md:leading-[72px] lg:leading-[84px] font-extrabold">
                A <span className="text-primary">funding platform</span> for
                community-led sports projects.
            </h1>
            <p className="text-base opacity-70 mt-8 max-w-xl">
                We're starting a new public goods funding initiative to support
                projects that advance inclusion and empowerment through sport.
            </p>
            <div className="mt-12 flex gap-2.5">
                <PrimaryButton
                    icon={
                        <Image
                            src="/assets/icons/arrow-right.svg"
                            width={17}
                            height={11}
                            alt=""
                        />
                    }
                >
                    Our Projects
                </PrimaryButton>
                <SecondaryButton>Our Story</SecondaryButton>
            </div>
        </div>
    );
}
