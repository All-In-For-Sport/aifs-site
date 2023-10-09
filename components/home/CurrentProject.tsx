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
        <section className="flex p-8 my-24 flex-col gap-16">
            <div className="grid grid-cols-2 gap-8 md:gap-16 lg:grid-cols-4">
                <div className="col-span-2">
                    <div className="flex items-center lg:items-start flex-col gap-6 text-center lg:text-left">
                        <div className="font-header text-gray-100 font-bold text-4xl">
                            By Any Means Basketball x All in for Sport
                        </div>
                        <div className="text-base opacity-70">
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
                <div className="col-span-2 md:col-span-1 flex h-full items-center">
                    <div className="flex gap-2 items-start w-full justify-center md:justify-end lg:justify-center">
                        <div className="text-secondary py-1">
                            <Coins />
                        </div>
                        <div className="">
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
                    <div className="flex gap-2 items-start w-full justify-center md:justify-start lg:justify-center">
                        <div className="text-primary py-1">
                            <Calendar />
                        </div>
                        <div className="">
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
            <div className="grid grid-cols-2 lg:grid-cols-4 max-w-md mx-auto lg:max-w-none">
                <div className="grid grid-cols-3 col-span-2 max-h-48">
                    <Image
                        src="/assets/shapes/shape1.png"
                        width={330}
                        height={180}
                        alt=""
                        className="col-span-2 h-full"
                    />
                    <Image
                        src="/assets/shapes/shape2.png"
                        width={180}
                        height={180}
                        alt=""
                        className="col-span-1 h-full"
                    />
                </div>
                <div className="col-span-1 flex justify-center">
                    <Image
                        src="/assets/shapes/shape3.png"
                        width={180}
                        height={180}
                        alt=""
                        className="lg:h-full lg:w-auto w-full h-auto"
                    />
                </div>
                <div className="col-span-1 flex justify-end">
                    <Image
                        src="/assets/shapes/shape4.png"
                        width={180}
                        height={180}
                        alt=""
                        className="lg:h-full lg:w-auto w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
