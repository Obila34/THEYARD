import type { Metadata } from "next";
import { Saira_Stencil_One, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import FurnaceGlow from "@/components/FurnaceGlow";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import PageTransition from "@/components/PageTransition";

const stencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-stencil",
  display: "swap"
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap"
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "The Yard — Nairobi's AI Tech Community",
  description:
    "The Yard is Nairobi's AI tech community — blogs, demos, and news for builders, founders, and thinkers shaping Africa's digital future.",
  metadataBase: new URL("https://the-yard.vercel.app"),
  openGraph: {
    title: "The Yard — Nairobi's AI Tech Community",
    description:
      "Blogs, demos, and news for builders, founders, and thinkers shaping Africa's digital future.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${stencil.variable} ${archivo.variable} ${mono.variable}`}>
        <FurnaceGlow />
        <Nav />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
