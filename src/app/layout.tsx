import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SiteChrome } from "@/components/site-chrome";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Cadence Dance Studio",
  description:
    "Ballet, contemporary, salsa, and hip hop classes for every level, plus a studio space available for private events.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
