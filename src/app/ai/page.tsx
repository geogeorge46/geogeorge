import type { Metadata } from "next";
import React from "react";
import AIClient from "./AIClient";

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
