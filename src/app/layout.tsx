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
    default: "Geo George | Software Engineer & IoT Developer",
    template: "%s | Geo George",
  },
  description:
    "Software Engineer specializing in Full Stack Development, AI, IoT, Cloud Computing, and Open Source. Explore projects and case studies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Geo George | Software Engineer & IoT Developer",
    description:
      "Software Engineer specializing in Full Stack Development, AI, IoT, Cloud Computing, and Open Source. Explore projects and case studies.",
    url: "https://geogeorge.vercel.app",
    siteName: "Geo George Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Geo George | Software Engineer & IoT Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geo George | Software Engineer & IoT Developer",
    description:
      "Software Engineer specializing in Full Stack Development, AI, IoT, Cloud Computing, and Open Source. Explore projects and case studies.",
    images: ["/og-image.png"],
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
