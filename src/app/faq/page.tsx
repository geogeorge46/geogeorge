import type { Metadata } from "next";
import React from "react";
import FAQClient from "./FAQClient";

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
