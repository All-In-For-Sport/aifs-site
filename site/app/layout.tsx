import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Red_Hat_Display, DM_Sans } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const red_hat_display = Red_Hat_Display({
    subsets: ["latin"],
    variable: "--red-hat-display",
});

const dm_sans = DM_Sans({
    subsets: ["latin"],
    variable: "--dm-sans",
});

export const metadata: Metadata = {
    title: "All in for Sport",
    description: "A funding platform for community-led sports projects.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${red_hat_display.variable} ${dm_sans.variable} bg-background scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 overflow-x-hidden relative text-white font-body`}
            >
                <Toaster
                    toastOptions={{
                        className: "bg-background text-white border-gray-600",
                        position: "top-center",
                        style: {
                            background: "#111111",
                            color: "#fff",
                            border: "2px solid #242424",
                        },
                    }}
                />
                <div className="max-w-screen ">
                    <div className="absolute top-0 -z-10 max-h-full overflow-hidden left-0 right-0">
                        <div className="relative min-h-[1682px] w-screen mx-auto">
                            <Image
                                src="/assets/noise.png"
                                fill
                                className="object-cover object-center"
                                alt=""
                            />
                        </div>
                        <div className="relative min-h-[1682px] w-screen mx-auto">
                            <Image
                                src="/assets/noise.png"
                                fill
                                className="object-cover object-center"
                                alt=""
                            />
                        </div>
                        <div className="relative min-h-[1682px] w-screen mx-auto">
                            <Image
                                src="/assets/noise.png"
                                fill
                                className="object-cover object-center"
                                alt=""
                            />
                        </div>
                        <div className="relative min-h-[1682px] w-screen mx-auto">
                            <Image
                                src="/assets/noise.png"
                                fill
                                className="object-cover object-center"
                                alt=""
                            />
                            <div className="absolute top-0 right-0 min-h-[1682px] left-0 z-0 w-screen mx-auto bg-gradient-to-b from-transparent to-background" />
                        </div>
                    </div>
                    <div className="max-w-xl lg:max-w-7xl mx-auto">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
