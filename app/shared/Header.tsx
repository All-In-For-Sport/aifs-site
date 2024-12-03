"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";

import { ButtonLink } from "./Button";
import { useFeatures } from "@/app/features/useFeatures";

export default function Header() {
  const features = useFeatures();

  return (
    <header>
      <div className="relative m-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/">
          <Image
            src="/logo.png"
            width={256}
            height={256}
            alt=""
            className="h-12 w-12"
          />
        </Link>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/about" className="px-3.5 py-2 font-semibold">
            About
          </Link>
          {features.BLOG && (
            <Link href="/updates" className="px-3.5 py-2 font-semibold">
              Updates
            </Link>
          )}
          <ButtonLink variant="secondary" href="#contactUs">
            Contact Us
          </ButtonLink>
        </div>
        <Popover className="lg:hidden">
          {({ close }) => (
            <>
              <Popover.Button className="">
                <Bars3Icon className="h-8 w-8" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-0 right-0 z-50 mx-auto flex w-5/6 flex-col items-center rounded-2xl border-2 border-gray-600 bg-background p-6 shadow-lg">
                  <Link
                    href="/about"
                    className="w-full px-3.5 py-4 text-center font-semibold"
                    onClick={() => close()}
                  >
                    About
                  </Link>
                  {features.BLOG && (
                    <Link
                      href="/updates"
                      className="mb-4 w-full px-3.5 py-4 text-center font-semibold"
                      onClick={() => close()}
                    >
                      Updates
                    </Link>
                  )}

                  <ButtonLink
                    href="#contactUs"
                    variant="secondary"
                    fullWidth
                    onClick={() => close()}
                  >
                    Contact Us
                  </ButtonLink>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </header>
  );
}
