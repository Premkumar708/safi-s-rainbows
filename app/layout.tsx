import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
// import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safia's RNV",
  description:
    "Safia&apos;s Rainbows and Vibgyors is a newly started reselling store. Started with passion for Textiles. A supplier of wide range of fabrics. Our Collection features a variety of designs, colours, textures allowing you to create unique and stunning outfits for any occasion. We source our materials from trusted traders that are durable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>{children}</body>
      {/* <CookieConsent /> */}
    </html>
  );
}
