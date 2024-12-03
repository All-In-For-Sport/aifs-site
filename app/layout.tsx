import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Red_Hat_Display, DM_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackgroundGradient } from "@/components/common/BackgroundGradient";
import { siteUrl } from "@/app/siteMeta";

import "./globals.css";

const red_hat_display = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--red-hat-display",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
        className={`${red_hat_display.variable} ${dm_sans.variable} bg-background font-body text-white scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600`}
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
        <div className="background-image relative flex min-h-screen flex-col overflow-clip">
          <BackgroundGradient />
          <Header />
          <main className="relative grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
