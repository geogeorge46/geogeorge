"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Download } from "lucide-react";
import RotatingGrid from "@/components/RotatingGrid";

import Navbar from "@/components/Navbar";

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

      <Navbar />

      {/* Hero Section */}
      <main className="max-w-7xl w-full mx-auto px-6 md:px-12 py-4 md:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-grow">
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
              className="text-[clamp(2.5rem,11vw,6rem)] lg:text-[7.5rem] leading-[0.85] font-serif-display text-slate-900 tracking-tight"
              variants={itemVariants}
            >
              Geo George
            </motion.h1>
            <motion.p
              className="text-slate-400 font-semibold tracking-wider text-xs md:text-sm uppercase leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Software Engineer · Web Developer · IoT Developer · Open Source Coordinator
            </motion.p>
          </div>

          <motion.p
            className="text-slate-600 text-base md:text-lg max-w-md leading-relaxed"
            variants={itemVariants}
          >
            I’m Geo George, a Software Engineer and Web Developer specializing in building scalable, secure, and intelligent solutions across full-stack development, AI, IoT, and cloud technologies—while contributing to open-source communities, driving collaboration, and transforming ideas into impactful real-world products.
          </motion.p>

          <motion.div className="flex flex-col gap-4 pt-2 w-full sm:w-auto" variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/projects" className="bg-slate-900 text-white px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer text-sm sm:text-base w-full sm:w-auto text-center">
                View Geo George&apos;s Projects <ArrowUpRight className="w-4 h-4 shrink-0" />
              </Link>
              <a href="/resume.pdf" download="Geo_George_Resume.pdf" className="border border-slate-200 bg-white text-slate-700 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 hover:bg-slate-50 hover:text-slate-950 transition-all cursor-pointer text-sm sm:text-base w-full sm:w-auto text-center">
                Download Resume <Download className="w-4 h-4 shrink-0" />
              </a>
            </div>

            <Link 
              href="/about" 
              className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors select-none self-start group"
            >
              About Geo George 
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-[2px] group-hover:translate-y-[-2px] transition-transform" />
            </Link>
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
              href="https://www.linkedin.com/in/geo-george-dev/"
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
        <section className="lg:col-span-7 flex flex-col items-center justify-center relative py-4 lg:py-8">
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
            className="glass-card mt-6 sm:mt-12 w-full max-w-[410px] rounded-3xl p-3 sm:p-5 grid grid-cols-4 gap-1.5 sm:gap-2.5 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className="bg-white/60 p-1.5 sm:p-2.5 rounded-xl flex flex-col items-center justify-center gap-1 border border-white/40 shadow-sm select-none cursor-default text-center"
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
                <span className="text-[8px] sm:text-[9px] font-bold text-slate-600 leading-tight block truncate w-full">
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
