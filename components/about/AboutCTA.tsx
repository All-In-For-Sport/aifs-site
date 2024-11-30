import Image from "next/image";

import { ButtonLink } from "@/components/common/Button";

import { telegramJoinLink } from "../siteMeta";

export default function AboutCTA() {
  return (
    <section className="page-wrap py-24 relative grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="block left-0 my-auto right-0 mx-auto w-[200px] h-[200px] rounded-full -translate-y-20 lg:-translate-y-2 -z-20 bg-[#5A6DED] blur-[75px] absolute" />
      <div className="rounded-2xl overflow-hidden shadow-lg border pr-12 border-darkText bg-background relative p-8 flex flex-col gap-4 items-start">
        <h5 className="text-2xl">Join Our Community</h5>
        <p className="text-white/50 text-sm">
          We invite you to come play with us and be part of this transformative
          journey. Together, we will prove that we humans are much more
          connected than we are different, and that sport is the unifying piece
          that can bring us together.
        </p>
        <ButtonLink
          href="https://discord.com/invite/HyeK5hf4vR"
          variant="small"
        >
          Join Us
        </ButtonLink>

        <Image
          className="absolute -top-28 -right-28 w-56 h-56"
          src="/assets/shapes/shape7.png"
          width={250}
          height={250}
          alt=""
        />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg border pr-12 border-darkText bg-background relative p-8 flex flex-col gap-4 items-start">
        <h5 className="text-2xl">Next Steps</h5>
        <p className="text-white/50 text-sm">
          Curious? Want to learn more? Join our Telegram group and say hi!
          Everyone is welcome to join our weekly community calls at 4pm EST
          every Thursday - it&apos;s a great way to meet the team and see what
          we&apos;re working on right now.
        </p>
        <ButtonLink href={telegramJoinLink} variant="small">
          Join Telegram
        </ButtonLink>
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
