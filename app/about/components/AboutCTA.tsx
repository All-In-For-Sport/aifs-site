import Image from "next-export-optimize-images/image";

import { ButtonLink } from "@/app/shared/Button";

import { siteLinks } from "../../siteMeta";
import { ReactNode } from "react";

export function AboutCTA() {
  return (
    <section className="page-wrap page-section-padding relative grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="absolute left-0 right-0 -z-20 mx-auto my-auto block h-[200px] w-[200px] -translate-y-20 rounded-full bg-[#5A6DED] blur-[75px] lg:-translate-y-2" />
      <Card>
        <h5 className="text-2xl">Follow our Journey</h5>
        <p className="text-sm text-white/50">
          We&apos;re holding a series of gatherings to learn how emerging
          technologies can support grassroots sports initiatives. Join an
          upcoming event or check out our stream library to find out more about
          the awesome projects in our network.
        </p>
        <div className="button-wrapper flex w-full flex-col gap-4 pt-2">
          <ButtonLink href={siteLinks.luma} variant="small">
            Event Calendar
          </ButtonLink>
          <ButtonLink href={siteLinks.bonfire} variant="small">
            Stream Archive
          </ButtonLink>
        </div>
        <Image
          className="absolute -right-32 -top-32 h-56 w-56"
          src="/assets/shapes/shape8.png"
          width={250}
          height={250}
          alt=""
        />
      </Card>
      <Card>
        <h5 className="text-2xl">Join Our Community</h5>
        <p className="text-sm text-white/50">
          We invite you to come play with us and be part of this transformative
          journey. Together, we will prove that we humans are much more
          connected than we are different, and that sport is the unifying piece
          that can bring us together.
        </p>
        <div className="button-wrapper flex w-full flex-col gap-4 pt-2">
          <ButtonLink href={siteLinks.discordJoin} variant="small">
            Join Discord
          </ButtonLink>
          <ButtonLink href={siteLinks.telegramJoin} variant="small">
            Join Telegram
          </ButtonLink>
        </div>

        <Image
          className="absolute -right-32 -top-32 h-56 w-56 sm:-right-28 sm:-top-28"
          src="/assets/shapes/shape7.png"
          width={250}
          height={250}
          alt=""
        />
      </Card>
    </section>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="cta-container relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-darkText bg-background px-8 py-14 shadow-lg">
      {children}
    </div>
  );
}
