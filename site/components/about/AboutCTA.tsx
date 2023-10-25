import Image from "next/image";
import { SmallButton } from "@/components/common";
import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="my-24 relative grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="block left-0 my-auto right-0 mx-auto w-[200px] h-[200px] rounded-full -translate-y-20 lg:-translate-y-2 -z-20 bg-[#5A6DED] blur-[75px] absolute" />
            <div className="rounded-2xl overflow-hidden shadow-lg border pr-12 border-darkText bg-background relative p-8">
                <h5 className="text-2xl mb-4">Join Our Community</h5>
                <p className="text-white/50 text-sm mb-4">
                    We invite you to come play with us and be part of this
                    transformative journey. Together, we will prove that we
                    humans are much more connected than we are different, and
                    that sport is the unifying piece that can bring us together.
                </p>
                <Link href="" className="">
                    <SmallButton className="">Join Us</SmallButton>
                </Link>
                <Image
                    className="absolute -top-28 -right-28 w-56 h-56"
                    src="/assets/shapes/shape7.png"
                    width={250}
                    height={250}
                    alt=""
                />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border pr-12 border-darkText bg-background relative p-8">
                <h5 className="text-2xl mb-4">Next Steps</h5>
                <p className="text-white/50 mb-4 text-sm">
                    Curious? Want to learn more? Join our Telegram group and say
                    hi! Everyone is welcome to join our weekly community calls
                    at 4pm EST every Thursday - it&apos;s a great way to meet
                    the team and see what we&apos;re working on right now.
                </p>
                <Link href="" className="">
                    <SmallButton className="">Join Telegram</SmallButton>
                </Link>
                <Image
                    className="absolute -top-32 -right-32 w-56 h-56"
                    src="/assets/shapes/shape8.png"
                    width={250}
                    height={250}
                    alt=""
                />
            </div>
        </section>
    );
}
