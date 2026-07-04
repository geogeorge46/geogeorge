"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Download } from "lucide-react";
import RotatingGrid from "@/components/RotatingGrid";

const techStack = [
  { name: "MERN", icon: "⚛️" },
  { name: "Full-Stack", icon: "💻" },
  { name: "IoT", icon: "📟" },
  { name: "AI", icon: "🧠" },
  { name: "Cloud", icon: "☁️" },
  { name: "AWS", icon: "📦" },
  { name: "Google Cloud", icon: "🌐" },
  { name: "Firebase", icon: "🔥" },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      } as const,
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-slate-200">
      {/* Decorative Dot Patterns */}
      <div className="absolute top-12 left-24 w-32 h-32 dot-pattern opacity-30 -z-10" />
      <div className="absolute bottom-12 right-12 w-48 h-48 dot-pattern opacity-30 -z-10" />

      {/* Navigation Header */}
      <header className="max-w-7xl w-full mx-auto px-6 md:px-12 py-8 flex justify-between items-center relative z-20">
        <Link href="/" className="text-3xl font-serif-display tracking-tighter select-none">
          GG<span className="text-blue-500 font-sans">.</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-12 text-sm font-medium text-slate-500">
          <Link className="relative py-1 text-slate-900 border-b-2 border-slate-900 transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-slate-900 transition-colors" href="/about">
            About
          </Link>
          <Link className="hover:text-slate-900 transition-colors" href="/services">
            Services
          </Link>
          <Link className="hover:text-slate-900 transition-colors" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-slate-900 transition-colors" href="/contact">
            Contact
          </Link>
        </nav>
        <Link href="/contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-slate-800 hover:shadow-lg transition-all cursor-pointer">
          Get in Touch <ArrowUpRight className="w-4 h-4" />
        </Link>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl w-full mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
        {/* Left Side: Editorial Bio */}
        <motion.section
          className="lg:col-span-5 flex flex-col space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold w-fit border border-emerald-100"
            variants={itemVariants}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            AVAILABLE FOR WORK
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              className="text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.85] font-serif-display text-slate-900 tracking-tight"
              variants={itemVariants}
            >
              Geo George
            </motion.h1>
            <motion.p
              className="text-slate-400 font-medium tracking-[0.25em] text-sm uppercase"
              variants={itemVariants}
            >
              Software Engineer
            </motion.p>
          </div>

          <motion.p
            className="text-slate-600 text-lg max-w-md leading-relaxed"
            variants={itemVariants}
          >
            Building scalable, secure, and intelligent solutions across full-stack development, AI, IoT, and cloud technologies—while contributing to open-source communities, driving collaboration, and transforming ideas into impactful real-world products.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 pt-2" variants={itemVariants}>
            <Link href="/projects" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2.5 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
              View My Work <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href="/resume.pdf" download="Geo_George_Resume.pdf" className="border border-slate-200 bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2.5 hover:bg-slate-50 hover:text-slate-950 transition-all cursor-pointer">
              Download Resume <Download className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div className="flex items-center gap-4 pt-2" variants={itemVariants}>
            <a
              className="w-11 h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition-all"
              href="https://github.com/geogeorge46"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              className="w-11 h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition-all"
              href="https://www.linkedin.com/in/geo-george-883616276/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              className="w-11 h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition-all"
              href="mailto:geogeorge.dev@gmail.com"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.section>

        {/* Right Side: Interactive Grid */}
        <section className="lg:col-span-7 flex flex-col items-center justify-center relative py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="w-full max-w-[410px] flex items-center justify-center"
          >
            <RotatingGrid />
          </motion.div>

          {/* Glassmorphic Tech Stack Summary Panel */}
          <motion.div
            className="glass-card mt-12 w-full max-w-[410px] rounded-[2rem] p-5 grid grid-cols-4 gap-2.5 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className="bg-white/60 p-2.5 rounded-xl flex flex-col items-center justify-center gap-1 border border-white/40 shadow-sm select-none cursor-default text-center"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.25,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-[9px] font-bold text-slate-600 leading-tight block truncate w-full">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
