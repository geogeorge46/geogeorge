import type { Metadata } from "next";
import { Geist_Mono, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import PersonSchema from "@/components/PersonSchema";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geogeorge.vercel.app"),
  title: {
    default: "Geo George | Software Engineer, Web Developer & IoT Developer",
    template: "%s | Geo George",
  },
  description:
    "Official portfolio of Geo George, a Software Engineer, Web Developer, IoT Developer, and Open Source Coordinator building scalable full-stack, AI-enabled, cloud, and connected systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Geo George | Software Engineer, Web Developer & IoT Developer",
    description:
      "Official portfolio of Geo George, Software Engineer, Web Developer, IoT Developer, and Open Source Coordinator.",
    url: "https://geogeorge.vercel.app",
    siteName: "Geo George Portfolio",
    type: "website",
  },
  verification: {
    google: "k3oeW34OWfE_pWwbw3Tz4PDOLvRhKtqESb32vAh9y-c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${dmSerifDisplay.variable} ${inter.variable} antialiased bg-gradient-soft min-h-screen relative overflow-x-hidden`}
      >
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
