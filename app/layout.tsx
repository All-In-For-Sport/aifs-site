import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Red_Hat_Display, DM_Sans } from "next/font/google";

import Header from "@/app/shared/Header";
import Footer from "@/app/shared/Footer";
import { BackgroundGradient } from "@/app/shared/BackgroundGradient";
import { FeaturesProvider } from "./features/useFeatures";

import "./globals.css";

const red_hat_display = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--red-hat-display",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm-sans",
});

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
        <FeaturesProvider>
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
        </FeaturesProvider>
      </body>
    </html>
  );
}
