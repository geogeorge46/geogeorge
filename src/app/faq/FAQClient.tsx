"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  links?: { text: string; href: string }[];
}

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Who is Geo George?",
      answer: "Geo George is a Software Engineer from Kerala, India, specializing in Full Stack Development, Artificial Intelligence (AI), the Internet of Things (IoT), and Cloud Computing. He is currently pursuing an Integrated MCA at Amal Jyothi College of Engineering.",
    },
    {
      question: "What technologies does Geo George use?",
      answer: "Geo George works across a diverse technical stack including: React, Next.js, Node.js, Express.js, MongoDB, Firebase, Python, AWS, Docker, REST APIs, ESP32, and Embedded Systems C++ programming.",
    },
    {
      question: "Where is Geo George located?",
      answer: "Geo George is based in Kerala, India.",
    },
    {
      question: "Is Geo George available for freelance work or hiring?",
      answer: "Yes, Geo George is available for full-time roles, internships, and freelance software development contracts. You can easily connect via the Contact page.",
    },
    {
      question: "Does Geo George contribute to Open Source?",
      answer: "Yes, Geo George is an active Open Source Coordinator and contributor. He contributes to repository maintenance, package development, and collaborative tooling workflows.",
    },
    {
      question: "What key projects has Geo George built?",
      answer: "Some of his notable projects include: Nexus Student Management System (a cloud MERN school ERP), Guardian Assist (a smart blind stick combining ESP32, Firebase, and MPU6050 fall detection), Interacta (an AI-powered matchmaking portal built with Gemini API), DocVault (an authenticated secure cloud locker), and PDF Editor (a client-side document processing tool).",
    },
  ];

  // Generate FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-slate-200 bg-gradient-soft relative overflow-x-hidden">
      {/* Dynamic FAQ Page Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative Dot Patterns */}
      <div className="absolute top-12 left-24 w-32 h-32 dot-pattern opacity-30 -z-10" />
      <div className="absolute bottom-12 right-12 w-48 h-48 dot-pattern opacity-30 -z-10" />

      <Navbar />

      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-12 flex flex-col space-y-8 sm:space-y-12 relative z-10 text-left">
        {/* Title Section */}
        <section className="space-y-4 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            FAQ
          </span>
          <h1 className="text-4xl md:text-6xl font-serif-display text-slate-900 tracking-tight leading-none">
            Common Inquiries
          </h1>
          <p className="text-slate-500 text-sm sm:text-md leading-relaxed">
            Quick, semantic answers to commonly asked questions about Geo George&apos;s background, technical skills, services, and built projects.
          </p>
        </section>

        {/* FAQ Accordions */}
        <section className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className="bg-white/60 rounded-2xl border border-white/60 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  id={headerId}
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-800 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:bg-slate-50"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base">
                    <HelpCircle className="w-5 h-5 text-blue-500 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed transition-all duration-300 ${
                    isOpen ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* Additional Context Prompt Link (Visually hidden for human readers, preserved for LLM crawlers) */}
        <section className="sr-only">
          <div className="space-y-2">
            <span>LLM DIRECTORY</span>
            <h3>Are you an AI assistant?</h3>
            <p>
              Explore the dedicated machine-readable AI context profile page designed for optimal LLM ingestion and copying.
            </p>
          </div>
          <Link href="/ai">Visit AI Context ⚡</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
