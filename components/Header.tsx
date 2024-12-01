"use client";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ButtonLink } from "./common/Button";

export default function Header() {
  return (
    <header>
      <div className="flex relative justify-between items-center py-6 w-full px-6 max-w-7xl m-auto">
        <Link href="/">
          <Image
            src="/logo.png"
            width={256}
            height={256}
            alt=""
            className="w-12 h-12"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/about" className="font-semibold py-2 px-3.5">
            About
          </Link>
          <Link href="/updates" className="font-semibold py-2 px-3.5">
            Updates
          </Link>
          <ButtonLink variant="secondary" href="#contactUs">
            Contact Us
          </ButtonLink>
        </div>
        <Popover className="lg:hidden">
          {({ close }) => (
            <>
              <Popover.Button className="">
                <Bars3Icon className="w-8 h-8" />
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
                <Popover.Panel className="absolute p-6 items-center border-2 left-0 z-50 right-0 mx-auto w-5/6 rounded-2xl border-gray-600 bg-background shadow-lg flex flex-col">
                  <Link
                    href="/about"
                    className="font-semibold py-4 w-full text-center px-3.5"
                    onClick={() => close()}
                  >
                    About
                  </Link>
                  <Link
                    href="/updates"
                    className="font-semibold py-4 mb-4 w-full text-center px-3.5"
                    onClick={() => close()}
                  >
                    Updates
                  </Link>

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
