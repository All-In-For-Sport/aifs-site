import Image from "next-export-optimize-images/image";
import Link from "next/link";

import { siteLinks } from "../siteMeta";

export default function Footer() {
  return (
    <footer>
      <div className="page-wrap flex flex-col items-center p-6 md:py-12 lg:items-start lg:py-24">
        <div className="">
          <Image
            src="/logo.png"
            alt=""
            width={100}
            height={100}
            className="h-auto w-12"
          />
        </div>
        <div className="mt-8 flex w-full flex-col-reverse justify-between gap-12 lg:flex-row">
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-2 text-white/50">
              <h6 className="mb-2 font-header text-lg font-bold text-white">
                Operations
              </h6>
              <Link href={siteLinks.discordJoin}>Discord</Link>
              <Link href={siteLinks.clarity}>Clarity</Link>
            </div>
            <div className="flex flex-col gap-2 text-white/50">
              <h6 className="mb-2 font-header text-lg font-bold text-white">
                Community
              </h6>
              <Link href={siteLinks.discuss}>Discussion</Link>
              <Link href={siteLinks.opensea}>Badges</Link>
              <Link href={siteLinks.snapshot}>Voting</Link>
              <Link href={siteLinks.state}>State</Link>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex w-full justify-between pt-16 text-xs text-white/50">
          <div>
            ©️{new Date().getFullYear()} All Rights Reserved. All in for Sport
          </div>
          <div className="flex gap-8">
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
