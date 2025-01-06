import Image from "next-export-optimize-images/image";

import { ButtonLink } from "@/app/shared/Button";

import { siteLinks } from "../../siteMeta";

export function AboutCTA() {
  return (
    <section className="page-wrap relative grid grid-cols-1 gap-8 py-24 lg:grid-cols-2">
      <div className="absolute left-0 right-0 -z-20 mx-auto my-auto block h-[200px] w-[200px] -translate-y-20 rounded-full bg-[#5A6DED] blur-[75px] lg:-translate-y-2" />
      <div className="relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-darkText bg-background p-8 pr-12 shadow-lg">
        <h5 className="text-2xl">Join Our Community</h5>
        <p className="text-sm text-white/50">
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
          className="absolute -right-28 -top-28 h-56 w-56"
          src="/assets/shapes/shape7.png"
          width={250}
          height={250}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-darkText bg-background p-8 pr-12 shadow-lg">
        <h5 className="text-2xl">Next Steps</h5>
        <p className="text-sm text-white/50">
          Curious? Want to learn more? Join our Telegram group and say hi!
          Everyone is welcome to join our weekly community calls at 4pm EST
          every Thursday - it&apos;s a great way to meet the team and see what
          we&apos;re working on right now.
        </p>
        <ButtonLink href={siteLinks.telegramJoin} variant="small">
          Join Telegram
        </ButtonLink>
        <Image
          className="absolute -right-32 -top-32 h-56 w-56"
          src="/assets/shapes/shape8.png"
          width={250}
          height={250}
          alt=""
        />
      </div>
    </section>
  );
}
