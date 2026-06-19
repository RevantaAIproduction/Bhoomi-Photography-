import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PortfolioProvider } from "./portfolio-provider";
import { FloatingSocialButtons } from "@/components/layout/FloatingSocialButtons";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BHOOMI PHOTOGRAPHY",
  description: "Bhoomi Photography — Where Moments Become Memories.",
  icons: {
    icon: "/images/logo/bhoomi-photography-logo.png",
    shortcut: "/images/logo/bhoomi-photography-logo.png",
    apple: "/images/logo/bhoomi-photography-logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <PortfolioProvider>
          <Navbar />
          <FloatingSocialButtons />
          <div className="pt-[72px]">{children}</div>
        </PortfolioProvider>
      </body>
    </html>
  );
}

