import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";

const AIClient = dynamic(() => import("./AIClient"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft select-none text-slate-400 font-mono text-sm animate-pulse">
      Loading...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "AI Context & LLM Profile | Geo George",
  description:
    "Structured, machine-readable developer profile of Geo George, optimized for AI assistants, LLMs, and search agents.",
  alternates: {
    canonical: "/ai",
  },
};

export default function AIPage() {
  return <AIClient />;
}
