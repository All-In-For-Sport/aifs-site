import Image from "next/image";
import { Tag } from "@/components/common";
import Link from "next/link";

export default function Partnership() {
    return (
        <section className="flex gap-16 flex-col-reverse max-w-xl lg:max-w-none lg:flex-row items-center my-12 lg:my-24">
            <div className="w-full flex justify-center lg:justify-end">
                <div className="md:w-[484px] md:h-[473px] w-full h-[300px] relative ">
                    <Image
                        src="https://images.unsplash.com/photo-1508972348941-5e2b14d04c64?auto=format&fit=crop&q=80&w=1000"
                        fill
                        className="object-cover object-center rounded-3xl"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        alt=""
                    />
                    <Image
                        src="/assets/shapes/shape5.png"
                        alt=""
                        width={81}
                        height={83}
                        className="w-16 md:w-24 h-auto absolute -top-10 right-4"
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
                <Tag>Partnership</Tag>
                <h2 className="text-4xl md:text-5xl font-bold font-header">
                    Our Partnership with SuperBenefit
                </h2>
                <p className="text-white/50 max-w-md lg:max-w-none">
                    AIFS is working closely with{" "}
                    <Link
                        href="https://superbenefit.org"
                        className="text-primary font-bold"
                    >
                        SuperBenefit DAO
                    </Link>{" "}
                    to explore new ways of shifting power in the way capital and
                    decision-making flow in communities, designing novel
                    governance systems and leveraging blockchain-enabled finance
                    and coordination infrastructure to address systemic
                    inequities.
                    <br />
                    <br />
                    Together, we are working on beta testing our ideas and
                    understanding the true value{" "}
                    <span className="text-primary font-bold">AIFS</span> can
                    provide to its partners, community, and those who have not
                    typically had a seat at the table in governance and
                    decision-making.
                </p>
            </div>
        </section>
    );
}
