import Image from "next/image";
import { Tag } from "@/components/common";

export default function Mission() {
    return (
        <section className="flex gap-16 flex-col-reverse max-w-xl lg:max-w-none lg:flex-row items-center my-12 lg:my-24">
            <div className="w-full flex justify-center lg:justify-end">
                <div className="md:w-[484px] md:h-[473px] w-full h-[300px] relative ">
                    <Image
                        src="/assets/man-tossing-basketball-in-air.jpg"
                        fill
                        className="object-cover object-center rounded-3xl"
                        alt=""
                    />
                    <Image
                        src="/assets/shapes/shape5.png"
                        alt=""
                        width={81}
                        height={83}
                        className="w-16 md:w-24 h-auto absolute top-6 right-4"
                    />
                    <Image
                        src="/assets/shapes/shape6.png"
                        alt=""
                        width={180}
                        height={180}
                        className="w-48 md:w-64 h-auto absolute md:-left-20 md:-bottom-20 -bottom-16 -left-16"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-6">
                <Tag>Our Mission</Tag>
                <h2 className="text-4xl md:text-5xl font-bold font-header">
                    Empowering sports communities with{" "}
                    <span className="text-primary">
                        innovative fundraising tools
                    </span>
                </h2>
                <p className="text-white/50 max-w-md lg:max-w-none">
                    We're on a mission to build citizen-owned fundraising tools
                    for communities worldwide.
                    <br />
                    <br />
                    Our learning journey begins with sports-loving cities in
                    North America including{" "}
                    <span className="text-primary font-bold">
                        Oakland
                    </span>,{" "}
                    <span className="text-primary font-bold">Toronto</span> and{" "}
                    <span className="text-primary font-bold">Los Angeles</span>,
                    and international basketball communities in the{" "}
                    <span className="text-primary font-bold">Philippines</span>{" "}
                    and{" "}
                    <span className="text-primary font-bold">Guatemala</span>.
                </p>
            </div>
        </section>
    );
}
