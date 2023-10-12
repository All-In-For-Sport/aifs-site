import Image from "next/image";
import {
    ArrowRight,
    Calendar,
    Coins,
    PrimaryButton,
    SecondaryButton,
} from "@/components/common";

export default function CurrentProject() {
    return (
        <section className="flex md:p-8 my-12 lg:my-24 flex-col gap-16">
            <div className="grid grid-cols-2 gap-8 md:gap-16 lg:grid-cols-5">
                <div className="col-span-3">
                    <div className="flex items-center lg:items-start flex-col gap-6 text-center lg:text-left">
                        <div className="font-header max-w-lg lg:max-w-none text-gray-100 font-bold text-4xl">
                            By Any Means Basketball x All in for Sport
                        </div>
                        <div className="text-base text-white/50">
                            Supporting a community of hoopers in the
                            Philippines.
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2.5">
                            <PrimaryButton icon={<ArrowRight />}>
                                Pledge your support
                            </PrimaryButton>
                            <SecondaryButton>Learn more</SecondaryButton>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 lg:col-span-2 flex flex-row justify-center gap-12 w-full lg:gap-2 xl:gap-12 lg:flex-col items-center xl:flex-row">
                    <div className="flex h-full items-center">
                        <div className="flex lg:gap-2 flex-col lg:flex-row items-center lg:items-start w-full justify-center md:justify-end lg:justify-center">
                            <div className="text-secondary py-1">
                                <Coins />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="text-gray-100 whitespace-nowrap font-bold text-2xl font-header">
                                    $15,000
                                </div>
                                <div className="text-base font-body opacity-70">
                                    to raise
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex h-full items-center">
                        <div className="flex lg:gap-2 flex-col lg:flex-row items-center lg:items-start w-full justify-center md:justify-end lg:justify-center">
                            <div className="text-primary py-1">
                                <Calendar />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="text-gray-100 whitespace-nowrap text-2xl font-bold font-header">
                                    October 18th
                                </div>
                                <div className="text-base font-body opacity-70">
                                    campaign ends
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center group flex-col lg:flex-row w-full max-w-md mx-auto lg:max-w-none">
                <div className="flex max-h-48">
                    <Image
                        src="/assets/shapes/shape1.png"
                        width={330}
                        height={180}
                        alt=""
                        className="w-2/3 h-auto"
                    />
                    <Image
                        src="/assets/shapes/shape2.png"
                        width={180}
                        height={180}
                        alt=""
                        className="w-1/3 h-auto"
                    />
                </div>
                <div className="flex flex-1 gap-0 flex-row justify-between">
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
