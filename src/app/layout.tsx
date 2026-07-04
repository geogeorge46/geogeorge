import type { Metadata } from "next";
import { Geist_Mono, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Geo George | Software Engineer Portfolio",
  description: "Building scalable AI, IoT, and full-stack solutions with modern technologies.",
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
        {children}
      </body>
    </html>
  );
}
