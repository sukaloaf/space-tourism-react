import "./globals.css";
import type { Metadata } from "next";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({
  subsets: ["latin"],
  variable: "--font-bellefair",
  display: "swap",
  weight: "400",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: "400",
});

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow_condensed",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlow.variable} ${barlow_condensed.variable} bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
