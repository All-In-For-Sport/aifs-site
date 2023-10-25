"use client";
import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "./common";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Header() {
    return (
        <header className="flex relative justify-between items-center w-full p-6">
            <Image
                src="/logo.png"
                width={256}
                height={256}
                alt=""
                className="w-12 h-12"
            />
            <div className="hidden lg:flex items-center gap-3">
                <Link href="/about" className="font-semibold py-2 px-3.5">
                    About
                </Link>
                <Link href="/projects" className="font-semibold py-2 px-3.5">
                    Projects
                </Link>
                <Link href="#contactUs">
                    <SecondaryButton>Contact Us</SecondaryButton>
                </Link>
            </div>
            <Popover className="lg:hidden">
                {({ open }) => (
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
                                >
                                    About
                                </Link>
                                <Link
                                    href="/projects"
                                    className="font-semibold py-4 mb-4 w-full text-center px-3.5"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="#contactUs"
                                    className="w-full flex justify-stretch"
                                >
                                    <SecondaryButton className="w-full">
                                        Contact Us
                                    </SecondaryButton>
                                </Link>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </header>
    );
}
