import Image from "next/image";
import Link from "next/link";
import { EmailForm } from "./common/EmailForm";

export default function Footer() {
    return (
        <footer className="w-full p-6 flex lg:items-start items-center max-w-xl lg:max-w-none flex-col md:p-12 lg:p-24">
            <div className="">
                <Image
                    src="/logo.png"
                    alt=""
                    width={100}
                    height={100}
                    className="w-12 h-auto"
                />
            </div>
            <div className="flex w-full flex-col-reverse gap-12 lg:flex-row mt-8 justify-between">
                <div className="grid grid-cols-2 gap-12">
                    <div className="flex flex-col text-white/50 gap-2">
                        <h6 className="font-bold text-white mb-2 text-lg font-header">
                            Operations
                        </h6>
                        <Link href="/">Discord</Link>
                        <Link href="/">Clarity</Link>
                        <Link href="/">Docs</Link>
                    </div>
                    <div className="flex flex-col text-white/50 gap-2">
                        <h6 className="font-bold text-white mb-2 text-lg font-header">
                            Community
                        </h6>
                        <Link href="/">Discussion</Link>
                        <Link href="/">Badges</Link>
                        <Link href="/">Voting</Link>
                        <Link href="/">State</Link>
                    </div>
                </div>
                <div>
                    <h6 className="font-bold text-white mb-2 text-lg font-header">
                        Newsletter
                    </h6>
                    <EmailForm />
                </div>
            </div>
            <div className="flex justify-between w-full pt-16 text-xs text-white/50">
                <div>
                    ©️{new Date().getFullYear()} All Rights Reserved. All in for
                    Sport
                </div>
                <div className="flex gap-8">
                    <div>Terms of Use</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </footer>
    );
}
