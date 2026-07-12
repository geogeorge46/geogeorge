import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";

const FAQClient = dynamic(() => import("./FAQClient"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft select-none text-slate-400 font-mono text-sm animate-pulse">
      Loading...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Geo George",
  description:
    "Common questions and answers regarding Geo George's background, technologies, experience, and services.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
