"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Lock,
  GitBranch,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsClient() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  // Domains info for the isometric cube interaction
  const domains = [
    {
      id: "full-stack",
      name: "Full-Stack Development",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      desc: "Architecting end-to-end web platforms using Next.js, Node.js, and Express, secured with JWT and MongoDB databases.",
    },
    {
      id: "iot",
      name: "IoT & Hardware Integration",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      desc: "Connecting physical microcontrollers (ESP32, NodeMCU) with cloud databases for real-time telemetry, fall detection, and physical feedback.",
    },
    {
      id: "ai",
      name: "AI & Natural Language Processing",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      desc: "Implementing smart engines (Gemini API, NLP algorithms, scikit-learn) for similarity checks, text analysis, and intelligent matchmaking.",
    },
    {
      id: "productivity",
      name: "Productivity & Cloud Tools",
      color: "text-slate-500",
      bg: "bg-slate-500/10",
      border: "border-slate-500/30",
      desc: "Creating browser utilities for document manipulation (PDF.js) and secure authenticated storage workspaces in Google & Oracle Cloud.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-slate-200 bg-gradient-soft relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-12 left-24 w-32 h-32 dot-pattern opacity-30 -z-10" />
      <div className="absolute bottom-12 right-12 w-48 h-48 dot-pattern opacity-30 -z-10" />

      <Navbar />

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-12 flex flex-col space-y-12 sm:space-y-16 relative z-10">
        
        {/* Title Section */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            SELECTED WORK
          </span>
          <h1 className="text-4xl md:text-6xl font-serif-display text-slate-900 tracking-tight leading-none">
            Projects Built With Purpose
          </h1>
          <p className="text-slate-500 text-sm sm:text-md max-w-2xl mx-auto">
            A collection of full-stack, AI, IoT, cloud, and productivity projects designed to solve real-world problems through scalable software and intelligent systems.
          </p>
        </section>

        {/* SECTION 1: Center Project Domains Isometric Cube Visualization */}
        <section className="flex flex-col items-center py-8 relative">
          
          {/* Section Subtitle */}
          <div className="text-center space-y-2 mb-8">
            <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase leading-none">
              EXPERTISE MAPPING
            </span>
            <h2 className="text-2xl font-serif-display text-slate-800">
              Geo George&apos;s Core Domains
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full max-w-5xl">
            {/* Left Relationship Explanations */}
            <div className="lg:col-span-4 space-y-6 text-left order-2 lg:order-1">
              <div className="bg-white/60 p-4.5 rounded-2xl border border-white/40 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold text-slate-700">Full-Stack to IoT Integration</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  How UI platforms connect to IoT devices to monitor hardware telemetry and supply visual controls to users in real time.
                </p>
              </div>

              <div className="bg-white/60 p-4.5 rounded-2xl border border-white/40 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-slate-700">IoT to AI-Edge Intelligence</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  How microcontrollers stream accelerometer and gyroscope sensor arrays directly to AI pipelines for fall detection and alerts.
                </p>
              </div>
            </div>

            {/* Center: Interactive 3D SVG Isometric Stack */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative order-1 lg:order-2 py-6 w-full">
              
              {/* SVG Isometric Stack */}
              <svg viewBox="0 0 280 360" className="w-full max-w-[280px] h-auto drop-shadow-2xl">
                <defs>
                  {/* Layer 1 (Full-Stack) Blue Gradients */}
                  <linearGradient id="blue-top" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <linearGradient id="blue-left" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1d4ed8" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </linearGradient>
                  <linearGradient id="blue-right" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>

                  {/* Layer 2 (IoT) Emerald Gradients */}
                  <linearGradient id="emerald-top" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="emerald-left" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#047857" />
                    <stop offset="100%" stopColor="#064e3b" />
                  </linearGradient>
                  <linearGradient id="emerald-right" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>

                  {/* Layer 3 (AI) Purple Gradients */}
                  <linearGradient id="purple-top" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                  <linearGradient id="purple-left" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6d28d9" />
                    <stop offset="100%" stopColor="#4c1d95" />
                  </linearGradient>
                  <linearGradient id="purple-right" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#6d28d9" />
                  </linearGradient>

                  {/* Layer 4 (Productivity) Slate Gradients */}
                  <linearGradient id="slate-top" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                  <linearGradient id="slate-left" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                  <linearGradient id="slate-right" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                </defs>

                {/* Layer 4 (Productivity) - BOTTOM LAYER */}
                <g 
                  className="cursor-pointer transition-all duration-300 hover:translate-y-[-5px] focus:outline-none focus:translate-y-[-5px]" 
                  tabIndex={0}
                  onMouseEnter={() => setActiveDomain("productivity")}
                  onMouseLeave={() => setActiveDomain(null)}
                  onClick={() => setActiveDomain(activeDomain === "productivity" ? null : "productivity")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveDomain(activeDomain === "productivity" ? null : "productivity");
                    }
                  }}
                  aria-label="Inspect Productivity & Cloud Tools domain"
                >
                  <polygon points="140 255, 210 290, 140 325, 70 290" fill="url(#slate-top)" opacity={activeDomain && activeDomain !== "productivity" ? 0.4 : 1} />
                  <polygon points="70 290, 140 325, 140 340, 70 305" fill="url(#slate-left)" opacity={activeDomain && activeDomain !== "productivity" ? 0.4 : 1} />
                  <polygon points="140 325, 210 290, 210 305, 140 340" fill="url(#slate-right)" opacity={activeDomain && activeDomain !== "productivity" ? 0.4 : 1} />
                  <text x="140" y="300" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" transform="skewY(20) rotate(-10) translate(5, -45)" opacity={activeDomain && activeDomain !== "productivity" ? 0.4 : 0.9}>Productivity</text>
                </g>

                {/* Layer 3 (AI) */}
                <g 
                  className="cursor-pointer transition-all duration-300 hover:translate-y-[-5px] focus:outline-none focus:translate-y-[-5px]" 
                  tabIndex={0}
                  onMouseEnter={() => setActiveDomain("ai")}
                  onMouseLeave={() => setActiveDomain(null)}
                  onClick={() => setActiveDomain(activeDomain === "ai" ? null : "ai")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveDomain(activeDomain === "ai" ? null : "ai");
                    }
                  }}
                  aria-label="Inspect AI & NLP domain"
                >
                  <polygon points="140 180, 210 215, 140 250, 70 215" fill="url(#purple-top)" opacity={activeDomain && activeDomain !== "ai" ? 0.4 : 1} />
                  <polygon points="70 215, 140 250, 140 265, 70 230" fill="url(#purple-left)" opacity={activeDomain && activeDomain !== "ai" ? 0.4 : 1} />
                  <polygon points="140 250, 210 215, 210 230, 140 265" fill="url(#purple-right)" opacity={activeDomain && activeDomain !== "ai" ? 0.4 : 1} />
                  <text x="140" y="225" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" transform="skewY(20) rotate(-10) translate(8, -43)" opacity={activeDomain && activeDomain !== "ai" ? 0.4 : 0.9}>AI / NLP</text>
                </g>

                {/* Layer 2 (IoT) */}
                <g 
                  className="cursor-pointer transition-all duration-300 hover:translate-y-[-5px] focus:outline-none focus:translate-y-[-5px]" 
                  tabIndex={0}
                  onMouseEnter={() => setActiveDomain("iot")}
                  onMouseLeave={() => setActiveDomain(null)}
                  onClick={() => setActiveDomain(activeDomain === "iot" ? null : "iot")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveDomain(activeDomain === "iot" ? null : "iot");
                    }
                  }}
                  aria-label="Inspect IoT & Hardware domain"
                >
                  <polygon points="140 105, 210 140, 140 175, 70 140" fill="url(#emerald-top)" opacity={activeDomain && activeDomain !== "iot" ? 0.4 : 1} />
                  <polygon points="70 140, 140 175, 140 190, 70 155" fill="url(#emerald-left)" opacity={activeDomain && activeDomain !== "iot" ? 0.4 : 1} />
                  <polygon points="140 175, 210 140, 210 155, 140 190" fill="url(#emerald-right)" opacity={activeDomain && activeDomain !== "iot" ? 0.4 : 1} />
                  <text x="140" y="150" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" transform="skewY(20) rotate(-10) translate(5, -42)" opacity={activeDomain && activeDomain !== "iot" ? 0.4 : 0.9}>AI + IoT</text>
                </g>

                {/* Layer 1 (Full-Stack) - TOP LAYER */}
                <g 
                  className="cursor-pointer transition-all duration-300 hover:translate-y-[-5px] focus:outline-none focus:translate-y-[-5px]" 
                  tabIndex={0}
                  onMouseEnter={() => setActiveDomain("full-stack")}
                  onMouseLeave={() => setActiveDomain(null)}
                  onClick={() => setActiveDomain(activeDomain === "full-stack" ? null : "full-stack")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveDomain(activeDomain === "full-stack" ? null : "full-stack");
                    }
                  }}
                  aria-label="Inspect Full-Stack Development domain"
                >
                  <polygon points="140 30, 210 65, 140 100, 70 65" fill="url(#blue-top)" opacity={activeDomain && activeDomain !== "full-stack" ? 0.4 : 1} />
                  <polygon points="70 65, 140 100, 140 115, 70 80" fill="url(#blue-left)" opacity={activeDomain && activeDomain !== "full-stack" ? 0.4 : 1} />
                  <polygon points="140 100, 210 65, 210 80, 140 115" fill="url(#blue-right)" opacity={activeDomain && activeDomain !== "full-stack" ? 0.4 : 1} />
                  <text x="140" y="75" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" transform="skewY(20) rotate(-10) translate(8, -42)" opacity={activeDomain && activeDomain !== "full-stack" ? 0.4 : 0.9}>Full-Stack</text>
                </g>
              </svg>

              {/* Dynamic Interactive HUD Indicator */}
              <div className="absolute bottom-2 text-[10px] font-mono text-slate-400 select-none">
                👉 Click, Tap, or Hover segments to inspect
              </div>
            </div>

            {/* Right Relationship Explanations */}
            <div className="lg:col-span-4 space-y-6 text-left order-3">
              <div className="bg-white/60 p-4.5 rounded-2xl border border-white/40 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                  <span className="text-xs font-bold text-slate-700">AI to Full-Stack Automation</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  How AI analysis models connect to web-based dashboards to highlight document duplication and render similarity reports.
                </p>
              </div>

              <div className="bg-white/60 p-4.5 rounded-2xl border border-white/40 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                  <span className="text-xs font-bold text-slate-700">Productivity & Database Workflows</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  How local file processors interact with remote databases and cloud storage services to ensure secure file-handling cycles.
                </p>
              </div>
            </div>
          </div>

          {/* Active Domain Inspector Panel (Expands dynamically on hover) */}
          <div className="mt-8 w-full max-w-md min-h-[90px] glass-card p-5 rounded-2xl border border-white/60 relative overflow-hidden select-none text-left flex flex-col justify-center">
            {activeDomain ? (
              domains.filter(d => d.id === activeDomain).map(d => (
                <motion.div 
                  key={d.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-1"
                >
                  <span className={`text-xs font-bold ${d.color}`}>{d.name}</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{d.desc}</p>
                </motion.div>
              ))
            ) : (
              <div className="text-center text-xs text-slate-400 italic">
                Click, Tap, or Hover over the 3D isometric cube layers to inspect Geo George&apos;s active domains of expertise.
              </div>
            )}
          </div>
        </section>

        {/* SECTION 2: Project Cards Grid (Exact Requested Order) */}
        <section className="space-y-12">
          
          {/* Project 1: Nexus Student Management System (Flagship Wide Showcase Card) */}
          <article className="glass-card rounded-[2.5rem] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/60 hover:glass-glow transition-all duration-500 text-left">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100/50">
                  Enterprise SaaS
                </span>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                  Flagship Project
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-serif-display text-slate-800 leading-tight">
                  Nexus Student Management System
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Nexus Student Management | Cloud App. A centralized multi-role platform connecting admins, teachers, students, and parents through secure, structured workflows.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["React", "Node.js", "Express.js", "MongoDB", "JWT"].map((tech, idx) => (
                  <span key={idx} className="bg-slate-50 text-slate-500 px-2.5 py-1 rounded-lg text-[10px] font-semibold border border-slate-100">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4">
                <Link
                  className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                  href="/case-studies/nexus-sms"
                >
                  View Case Study
                </Link>
                <a
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://github.com/geogeorge46/nexusSMS"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Source on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://nexus-sms-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Live Site"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right inside card: Nexus Student Dashboard Interface Mockup */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200/50 p-4.5 relative overflow-hidden h-[240px] flex items-center justify-center select-none shadow-inner">
              
              {/* Browser Window Outline */}
              <div className="absolute inset-4 bg-white rounded-xl shadow-md border border-slate-100 flex flex-col overflow-hidden">
                {/* Browser top-bar */}
                <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[8px] text-slate-400 font-mono">nexus-student-dashboard.vercel.app</span>
                  <div className="w-4" />
                </div>
                
                {/* Student Dashboard Mock Contents */}
                <div className="flex-1 grid grid-cols-12 gap-3 p-3 text-slate-700 bg-slate-50/50">
                  {/* Left Sidebar mock */}
                  <div className="col-span-3 space-y-2 border-r border-slate-100 pr-2">
                    <div className="h-3 w-10/12 bg-blue-100 rounded-md" />
                    <div className="h-2 w-8/12 bg-slate-100 rounded-md" />
                    <div className="h-2 w-9/12 bg-slate-100 rounded-md" />
                    <div className="h-2 w-6/12 bg-slate-100 rounded-md" />
                  </div>
                  
                  {/* Main content mock */}
                  <div className="col-span-9 space-y-2.5 text-left">
                    <div className="h-3.5 w-6/12 bg-slate-800 rounded-md" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white p-2 rounded-lg border border-slate-100 flex flex-col items-center justify-center gap-1 shadow-sm">
                        <span className="text-[6px] text-slate-400 uppercase font-bold leading-none">Attendance</span>
                        <span className="text-xs font-bold text-emerald-500 leading-none">96.5%</span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-slate-100 flex flex-col items-center justify-center gap-1 shadow-sm">
                        <span className="text-[6px] text-slate-400 uppercase font-bold leading-none">Grade GPA</span>
                        <span className="text-xs font-bold text-blue-500 leading-none">3.92</span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-slate-100 flex flex-col items-center justify-center gap-1 shadow-sm">
                        <span className="text-[6px] text-slate-400 uppercase font-bold leading-none">LMS Status</span>
                        <span className="text-xs font-bold text-purple-500 leading-none">6 Active</span>
                      </div>
                    </div>
                    {/* Course list mock */}
                    <div className="bg-white p-2 rounded-lg border border-slate-100 space-y-1.5 shadow-sm">
                      <div className="h-2 w-full bg-slate-100 rounded-sm" />
                      <div className="h-2 w-10/12 bg-slate-100 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges outside browser window */}
              <div className="absolute top-2 left-6 bg-white shadow-lg border border-slate-100 rounded-xl px-2.5 py-1.5 flex items-center gap-2 transform -rotate-6 select-none z-10 animate-bounce" style={{ animationDuration: "5s" }}>
                <span className="text-xs">📅</span>
                <span className="text-[8px] font-bold text-slate-600">Calendar</span>
              </div>
              <div className="absolute bottom-6 right-6 bg-white shadow-lg border border-slate-100 rounded-xl px-2.5 py-1.5 flex items-center gap-2 transform rotate-6 select-none z-10 animate-bounce" style={{ animationDuration: "6s" }}>
                <span className="text-xs">🎓</span>
                <span className="text-[8px] font-bold text-slate-600">LMS Access</span>
              </div>
            </div>
          </article>

          {/* Project 2 & 3: Guardian Assist (IoT Stick) & Interacta (AI Networking) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Project 2: Guardian Assist (IoT Device Schematic) */}
            <article className="glass-card rounded-[2.5rem] p-6 flex flex-col justify-between border border-white/60 hover:glass-glow transition-all duration-500">
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100/50">
                    AI + IoT
                  </span>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                    Patent-Oriented
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif-display text-slate-800 leading-tight">
                    Guardian Assist
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Assistive Device Smart Blind Stick. An ESP32-based assistive mobility system combining sensor arrays, MPU6050 fall detection, vibration alerts, and Firebase telemetry.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {["ESP32", "C++", "Firebase", "React", "MPU6050"].map((tech, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-500 px-2 py-0.5 rounded-md text-[9px] font-semibold border border-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Vector Schematic Graphic */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200/50 p-4 h-[180px] flex items-center justify-center relative overflow-hidden select-none shadow-inner">
                  {/* Schematic grid background */}
                  <div className="absolute inset-0 dot-pattern opacity-[0.03] -z-10" />
                  
                  {/* Embedded Stick Graphic SVG */}
                  <svg width="150" height="150" viewBox="0 0 100 100" className="opacity-95">
                    {/* The Blind Stick shaft */}
                    <line x1="20" y1="80" x2="80" y2="20" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                    {/* Handle grip */}
                    <path d="M 73 27 L 80 20 L 75 15 L 68 22" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                    {/* Tip of stick red accent */}
                    <line x1="20" y1="80" x2="25" y2="75" stroke="#ef4444" strokeWidth="4" />
                    
                    {/* Sensors pointing schematic lines */}
                    {/* Ultrasonic sensor */}
                    <circle cx="28" cy="72" r="5" fill="#3b82f6" stroke="white" strokeWidth="1" />
                    <line x1="28" y1="72" x2="10" y2="60" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2" />
                    <text x="8" y="55" fill="#475569" fontSize="4" fontWeight="bold" textAnchor="middle">Ultrasonic Array</text>
                    
                    {/* ESP32 Brain */}
                    <rect x="47" y="47" width="8" height="8" rx="1.5" fill="#10b981" stroke="white" strokeWidth="1" />
                    <line x1="51" y1="51" x2="51" y2="75" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2" />
                    <text x="51" y="81" fill="#475569" fontSize="4" fontWeight="bold" textAnchor="middle">ESP32 MCU</text>

                    {/* MPU6050 Motion sensor near grip */}
                    <circle cx="68" cy="32" r="4.5" fill="#8b5cf6" stroke="white" strokeWidth="1" />
                    <line x1="68" y1="32" x2="90" y2="40" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2" />
                    <text x="92" y="47" fill="#475569" fontSize="4" fontWeight="bold" textAnchor="middle">MPU6050 Gyro</text>
                  </svg>

                  {/* Patent Label Box */}
                  <div className="absolute bottom-3 right-3 bg-white border border-slate-100 rounded-lg p-1.5 shadow-sm text-left select-none text-[8px] font-mono leading-none scale-90">
                    <span className="text-slate-400 font-bold block mb-0.5">PATENT PENDING</span>
                    <span className="text-emerald-600 font-bold">#E533 (FL-350i)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-5">
                <Link
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                  href="/case-studies/guardian-assist"
                >
                  View Case Study
                </Link>
                <a
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://github.com/geogeorge46/Guardianassist"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://guardianassist-e4e62.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>

            {/* Project 3: Interacta (AI Collaboration) */}
            <article className="glass-card rounded-[2.5rem] p-6 flex flex-col justify-between border border-white/60 hover:glass-glow transition-all duration-500">
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-3 py-1 rounded-full border border-purple-100/50">
                    AI Networking
                  </span>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                    AI Collaboration
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif-display text-slate-800 leading-tight">
                    Interacta
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Interacta Smart Networking Platform. A real-time collaboration directory and live matchmaking platform leveraging Firebase real-time synchronisation and Gemini AI recommendations.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "Firebase", "Gemini API", "Firestore", "FCM"].map((tech, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-500 px-2 py-0.5 rounded-md text-[9px] font-semibold border border-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Network Graph Mockup Graphic */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200/50 p-4 h-[180px] flex items-center justify-center relative overflow-hidden select-none shadow-inner">
                  
                  {/* Glowing user node network */}
                  <svg width="180" height="150" viewBox="0 0 180 150">
                    {/* Node lines */}
                    <path d="M 40 40 L 90 75 M 140 40 L 90 75 M 40 110 L 90 75 M 140 110 L 90 75" stroke="#90cdf4" strokeWidth="1.5" strokeDasharray="3" />
                    
                    {/* Center Gemini Node */}
                    <circle cx="90" cy="75" r="18" fill="#2563eb" filter="url(#glow)" />
                    <text x="90" y="78" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">Gemini</text>
                    
                    {/* Profile Avatar Nodes */}
                    <circle cx="40" cy="40" r="10" fill="#cbd5e1" stroke="#3b82f6" strokeWidth="1" />
                    <text x="40" y="43" fill="#475569" fontSize="8" fontWeight="bold" textAnchor="middle">👨‍💻</text>
                    
                    <circle cx="140" cy="40" r="10" fill="#cbd5e1" stroke="#10b981" strokeWidth="1" />
                    <text x="140" y="43" fill="#475569" fontSize="8" fontWeight="bold" textAnchor="middle">👩‍💼</text>
                    
                    <circle cx="40" cy="110" r="10" fill="#cbd5e1" stroke="#8b5cf6" strokeWidth="1" />
                    <text x="40" y="113" fill="#475569" fontSize="8" fontWeight="bold" textAnchor="middle">👨‍🎨</text>
                    
                    <circle cx="140" cy="110" r="10" fill="#cbd5e1" stroke="#ef4444" strokeWidth="1" />
                    <text x="140" y="113" fill="#475569" fontSize="8" fontWeight="bold" textAnchor="middle">👷‍♂️</text>

                    {/* SVG Filters for Glow Effect */}
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </svg>

                  {/* Connected tag */}
                  <div className="absolute top-2.5 right-2.5 bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-100/50 text-[7px] font-mono leading-none">
                    AI MATCHMAKER ACTIVE
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-5">
                <Link
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                  href="/case-studies/interacta"
                >
                  View Case Study
                </Link>
                <a
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://github.com/geogeorge46/interacta"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
                <span
                  className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 cursor-not-allowed select-none"
                  title="Live Demo Offline"
                >
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </article>
          </div>

          {/* Project 4 & 5: DocVault (Cloud Vault) & PDF Editor (Productivity) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Project 4: DocVault */}
            <article className="glass-card rounded-[2.5rem] p-6 flex flex-col justify-between border border-white/60 hover:glass-glow transition-all duration-500">
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100/50">
                    Cloud Platform
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif-display text-slate-800 leading-tight">
                    DocVault
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Secure document storage platform. A centralized authenticated workspace for upload, metadata search, categories sorting, and secure storage scopes.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Firebase Auth", "Firestore", "Storage"].map((tech, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-500 px-2 py-0.5 rounded-md text-[9px] font-semibold border border-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Document Stack Graphic */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200/50 p-4 h-[150px] flex items-center justify-center relative overflow-hidden select-none shadow-inner">
                  {/* File Stack representation */}
                  <div className="relative w-16 h-20">
                    {/* Layer 3 */}
                    <div className="absolute inset-0 bg-white border border-slate-200 rounded-lg shadow-sm transform rotate-6 translate-x-2 translate-y-1" />
                    {/* Layer 2 */}
                    <div className="absolute inset-0 bg-white border border-slate-200 rounded-lg shadow-sm transform -rotate-3 translate-x-1" />
                    {/* Layer 1 */}
                    <div className="absolute inset-0 bg-white border border-slate-200 rounded-lg shadow-md flex flex-col p-2.5 gap-1.5">
                      <div className="h-2.5 w-10 bg-blue-100 rounded-sm" />
                      <div className="h-1.5 w-full bg-slate-100 rounded-sm" />
                      <div className="h-1.5 w-full bg-slate-100 rounded-sm" />
                      <div className="h-1.5 w-8/12 bg-slate-100 rounded-sm" />
                      {/* Document lock icon representation */}
                      <div className="absolute bottom-2.5 right-2.5 bg-blue-50 p-1 rounded-md">
                        <Lock className="w-3 h-3 text-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-5">
                <Link
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                  href="/case-studies/docvault"
                >
                  View Case Study
                </Link>
                <a
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://github.com/geogeorge46/docvault"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://doczvalut.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>

            {/* Project 5: PDF Editor */}
            <article className="glass-card rounded-[2.5rem] p-6 flex flex-col justify-between border border-white/60 hover:glass-glow transition-all duration-500">
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                    Productivity Tool
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif-display text-slate-800 leading-tight">
                    PDF Editor
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Browser-based PDF processing utility. A clean interactive UI to merge, split, rotate, reorder, and export custom processed PDF document templates.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {["React", "JavaScript", "PDF.js", "Tailwind CSS"].map((tech, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-500 px-2 py-0.5 rounded-md text-[9px] font-semibold border border-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* PDF processing illustration */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200/50 p-4 h-[150px] flex items-center justify-center relative overflow-hidden select-none shadow-inner">
                  {/* SVG Pen and Document layout representation */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-18 bg-white border border-slate-200 rounded-lg shadow-sm p-2 flex flex-col gap-1.5 relative">
                      <div className="absolute top-0 right-0 bg-red-500 text-white font-bold text-[6px] px-1 py-0.5 rounded-tr-lg rounded-bl-sm">PDF</div>
                      <div className="h-2 w-8 bg-slate-200 rounded-sm" />
                      <div className="h-1.5 w-10 bg-slate-100 rounded-sm" />
                      <div className="h-1.5 w-full bg-slate-100 rounded-sm" />
                      <div className="h-1.5 w-8 bg-slate-100 rounded-sm" />
                    </div>
                    {/* Curved arrow showing split/merge action */}
                    <div className="w-6 h-6 border-t-2 border-r-2 border-slate-400 border-dashed rounded-tr-xl transform rotate-45 flex items-center justify-center">
                      <span className="text-[10px] text-slate-400 translate-x-2 -translate-y-2">➕</span>
                    </div>
                    <div className="w-14 h-18 bg-white border border-slate-200 rounded-lg shadow-sm p-2 flex flex-col gap-1.5 relative">
                      <div className="absolute top-0 right-0 bg-emerald-500 text-white font-bold text-[6px] px-1 py-0.5 rounded-tr-lg rounded-bl-sm">NEW</div>
                      <div className="h-2 w-10 bg-emerald-50 rounded-sm" />
                      <div className="h-1.5 w-full bg-slate-100 rounded-sm" />
                      <div className="h-1.5 w-full bg-slate-100 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-5">
                <Link
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                  href="/case-studies/pdf-editor"
                >
                  View Case Study
                </Link>
                <a
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://github.com/geogeorge46/pdfeditor"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://pdfeditor-rosy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>

          {/* Project 6 & 7: Plagiarism Checker (AI NLP) & GearEquip (Marketplace) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Project 6: Plagiarism Checker */}
            <article className="glass-card rounded-[2.5rem] p-6 flex flex-col justify-between border border-white/60 hover:glass-glow transition-all duration-500">
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-3 py-1 rounded-full border border-purple-100/50">
                    AI + NLP
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif-display text-slate-800 leading-tight">
                    Plagiarism Checker
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    AI-powered text originality scanner. Employs natural language processing (NLP), TF-IDF algorithms, and cosine similarity checking for text document verification.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "NLP", "FastAPI", "React", "scikit-learn"].map((tech, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-500 px-2 py-0.5 rounded-md text-[9px] font-semibold border border-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Document Scanner Graphic */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200/50 p-4 h-[150px] flex items-center justify-center relative overflow-hidden select-none shadow-inner">
                  {/* Scanner interface display */}
                  <div className="bg-white px-5 py-3.5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center gap-1.5">
                    <span className="text-[7px] text-slate-400 uppercase font-bold leading-none">Similarity Score</span>
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      {/* SVG circular progress ring */}
                      <svg width="56" height="56" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="85 100" strokeLinecap="round" transform="rotate(-90 18 18)" />
                      </svg>
                      <span className="absolute text-[10px] font-bold text-slate-800 leading-none">85%</span>
                    </div>
                    <span className="text-[7px] text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100/50 leading-none">Originality Verified</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-5">
                <Link
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                  href="/case-studies/plagiarism-checker"
                >
                  View Case Study
                </Link>
                <a
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://github.com/geogeorge46/plagarism-checker"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
                <span
                  className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 cursor-not-allowed select-none"
                  title="Live Demo Offline"
                >
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </article>

            {/* Project 7: GearEquip */}
            <article className="glass-card rounded-[2.5rem] p-6 flex flex-col justify-between border border-white/60 hover:glass-glow transition-all duration-500">
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                    Marketplace
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif-display text-slate-800 leading-tight">
                    GearEquip
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Machinery rental marketplace platform. Features secure listings, provider inventories, booking calendars, review forms, and dynamic admin control panels.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {["PHP", "JavaScript", "HTML", "CSS", "MySQL"].map((tech, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-500 px-2 py-0.5 rounded-md text-[9px] font-semibold border border-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Machinery marketplace representation */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200/50 p-4 h-[150px] flex items-center justify-center relative overflow-hidden select-none shadow-inner">
                  {/* Machinery card mockups */}
                  <div className="grid grid-cols-2 gap-3 w-11/12">
                    <div className="bg-white p-2 rounded-xl border border-slate-100 space-y-1.5 shadow-sm text-left">
                      <div className="h-10 bg-slate-50 rounded-lg flex items-center justify-center text-lg">🚜</div>
                      <div className="h-2 w-8/12 bg-slate-800 rounded-sm" />
                      <div className="h-1.5 w-6/12 bg-slate-400 rounded-sm" />
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-slate-100 space-y-1.5 shadow-sm text-left">
                      <div className="h-10 bg-slate-50 rounded-lg flex items-center justify-center text-lg">⚙️</div>
                      <div className="h-2 w-9/12 bg-slate-800 rounded-sm" />
                      <div className="h-1.5 w-5/12 bg-slate-400 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-5">
                <Link
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                  href="/case-studies/gearequip"
                >
                  View Case Study
                </Link>
                <a
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://github.com/geogeorge46/GEAREQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
                <span
                  className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 cursor-not-allowed select-none"
                  title="Live Demo Offline"
                >
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </article>
          </div>

          {/* Project 8: Open Source Contributor (Wide Showcase Card) */}
          <article className="glass-card rounded-[2.5rem] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/60 hover:glass-glow transition-all duration-500 text-left">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100/50">
                  Open Source
                </span>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                  Hacktoberfest Contributor
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-serif-display text-slate-800 leading-tight">
                  Open Source Contributor
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Active open-source community contributions to WikiSyllabus and TechMyrmidons repositories. Added structured Integrated MCA syllabus paths, JSON course databases, and technology roadmap metadata.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["Git", "GitHub", "JSON", "YAML", "Markdown"].map((tech, idx) => (
                  <span key={idx} className="bg-slate-50 text-slate-500 px-2.5 py-1 rounded-lg text-[10px] font-semibold border border-slate-100">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4">
                <Link
                  className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                  href="/case-studies/open-source-contributions"
                >
                  View Case Study
                </Link>
                <a
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  href="https://github.com/geogeorge46"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right inside card: GitHub Contribution Mockup */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200/50 p-5 relative overflow-hidden h-[240px] flex items-center justify-center select-none shadow-inner">
              
              {/* GitHub contribution cells grid */}
              <div className="flex flex-col gap-1 items-start bg-white p-4.5 rounded-xl border border-slate-100 shadow-sm max-w-sm w-full">
                <span className="text-[7px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                  <GitBranch className="w-2.5 h-2.5 text-blue-500" />
                  GitHub Activity Matrix
                </span>
                
                {/* 5 rows of contribution dots */}
                <div className="grid grid-cols-16 gap-1 w-full">
                  {Array.from({ length: 80 }).map((_, idx) => {
                    // Random colors simulating contribution frequency
                    const intensities = ["bg-slate-100", "bg-emerald-100", "bg-emerald-300", "bg-emerald-500", "bg-emerald-600"];
                    const colorClass = intensities[Math.floor(Math.random() * intensities.length)];
                    return (
                      <div
                        key={idx}
                        className={`w-3.5 h-3.5 rounded-[2px] ${colorClass}`}
                      />
                    );
                  })}
                </div>

                {/* Git tags row */}
                <div className="flex justify-between items-center w-full mt-3 pt-2.5 border-t border-slate-100 text-[8px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">12 Pull Requests</span>
                    <span>•</span>
                    <span className="text-blue-500 font-bold">WikiSyllabus</span>
                  </div>
                  <span>Less 🟩🟩🟩🟩 More</span>
                </div>
              </div>

              {/* Floating badges for organizations */}
              <div className="absolute top-4 left-6 bg-white shadow-lg border border-slate-100 rounded-xl px-2.5 py-1.5 flex items-center gap-2 transform -rotate-6 select-none z-10 animate-bounce" style={{ animationDuration: "5.5s" }}>
                <span className="text-[10px] font-bold text-indigo-600">The Purple Movement</span>
              </div>
              <div className="absolute bottom-6 right-6 bg-white shadow-lg border border-slate-100 rounded-xl px-2.5 py-1.5 flex items-center gap-2 transform rotate-6 select-none z-10 animate-bounce" style={{ animationDuration: "6.5s" }}>
                <span className="text-[10px] font-bold text-slate-700">Hacktoberfest &apos;24</span>
              </div>
            </div>
          </article>
        </section>

        {/* SECTION 3: Footer CTA Section (Interested in working together?) */}
        <section className="bg-white/60 p-8 md:p-10 rounded-[2.5rem] border border-white/60 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto w-full select-none text-left relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full filter blur-xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-xl" />
          
          <div className="space-y-2 relative z-10 max-w-xl">
            <h3 className="text-2xl font-serif-display text-slate-800 leading-tight">
              Interested in working together?
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Let&apos;s build scalable, intelligent, and user-focused digital products. Feel free to reach out for internship roles or collaboration projects!
            </p>
          </div>

          <div className="flex items-center gap-3 relative z-10 shrink-0">
            <a
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-800 hover:shadow-lg transition-all cursor-pointer"
              href="mailto:geogeorge.dev@gmail.com"
            >
              Contact Me
            </a>
            <a
              className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors"
              href="/resume.pdf"
              download="Geo_George_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
