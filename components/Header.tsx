import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "./common";

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full p-6">
            <Image
                src="/logo.png"
                width={256}
                height={256}
                alt=""
                className="w-12 h-12"
            />
            <div className="hidden md:flex items-center gap-3">
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
        </div>
    );
}
