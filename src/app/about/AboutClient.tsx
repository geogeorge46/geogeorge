"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Code,
  Cpu,
  Brain,
  Users,
  ArrowUpRight,
  Github,
  Linkedin,
  Download,
} from "lucide-react";

export default function AboutClient() {
  const [isFlipped, setIsFlipped] = useState(false);

  // Stats bar data
  const stats = [
    { value: "3+", label: "Projects Completed" },
    { value: "1+", label: "Years Experience" },
    { value: "2+", label: "Hackathons Participated" },
    { value: "500+", label: "Hours Coding" },
  ];

  // Core tech stack items
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "⚙️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "TypeScript", icon: "📘" },
    { name: "AWS", icon: "☁️" },
    { name: "AI / ML", icon: "🧠" },
  ];

  // Feature cards
  const features = [
    {
      title: "Full Stack Developer",
      desc: "Building end-to-end web applications with modern technologies.",
      icon: <Code className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "IoT & Hardware Lover",
      desc: "Creating smart IoT solutions that connect the real world.",
      icon: <Cpu className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Problem Solver",
      desc: "Strong foundation in DSA, OOP & System Design.",
      icon: <Brain className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Team Player",
      desc: "Collaborative, agile and always focused on impact.",
      icon: <Users className="w-6 h-6 text-rose-500" />,
    },
  ];

  // Barcode lines configuration (random-looking but neat barcode representation)
  const barcodeLines = [
    2, 1, 3, 1, 4, 2, 1, 2, 4, 1, 3, 2, 1, 1, 2, 3, 1, 4, 2, 1, 2, 1, 3, 2, 4, 1, 1, 2, 3, 1, 4, 2,
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-slate-200 bg-gradient-soft">
      {/* Decorative Dot Patterns */}
      <div className="absolute top-12 left-24 w-32 h-32 dot-pattern opacity-30 -z-10" />
      <div className="absolute bottom-12 right-12 w-48 h-48 dot-pattern opacity-30 -z-10" />

      {/* Navigation Header */}
      <header className="max-w-7xl w-full mx-auto px-6 md:px-12 py-8 flex justify-between items-center relative z-20">
        <Link href="/" className="text-3xl font-serif-display tracking-tighter select-none">
          GG<span className="text-blue-500 font-sans">.</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-12 text-sm font-medium text-slate-500">
          <Link className="hover:text-slate-900 transition-colors" href="/">
            Home
          </Link>
          <Link className="relative py-1 text-slate-900 border-b-2 border-slate-900 transition-colors" href="/about">
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

      {/* Main Body */}
      <main className="max-w-7xl w-full mx-auto px-6 md:px-12 py-12 flex flex-col space-y-16">
        
        {/* Upper Grid: ID Card & About Me */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive 3D ID Card Badge */}
          <section className="lg:col-span-5 flex flex-col items-center relative">
            
            {/* Lanyard Strap */}
            <div className="w-10 h-32 bg-blue-900 relative rounded-b-md shadow-md flex flex-col items-center justify-end overflow-hidden border border-blue-950 -mt-16 z-10">
              {/* Lanyard texture pattern */}
              <div className="absolute inset-y-0 w-0.5 bg-blue-400 opacity-20 left-1.5" />
              <div className="absolute inset-y-0 w-0.5 bg-blue-400 opacity-20 right-1.5" />
              <span className="text-[6px] text-white/80 font-bold uppercase tracking-widest rotate-90 select-none pb-8 whitespace-nowrap">
                CODE • BUILD • INNOVATE
              </span>
            </div>
            
            {/* Metal Swivel Hook / Clip */}
            <div className="w-6 h-8 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 rounded-full relative shadow-sm border border-slate-400/50 flex items-center justify-center -mt-1 z-10">
              <div className="w-3 h-3 bg-slate-500 rounded-full border border-slate-300/40" />
              {/* Swivel metal ring connector */}
              <div className="absolute bottom-[-10px] w-4 h-6 border-4 border-slate-400 rounded-md bg-transparent" />
            </div>

            {/* Glassmorphic Badge Casing */}
            <div 
              className="mt-4 w-[330px] h-[500px] rounded-[2.5rem] p-3 glass-card relative select-none cursor-pointer perspective-1000 shadow-xl"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                className="relative w-full h-full preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 14 }}
              >
                {/* ----------------- BADGE FRONT ----------------- */}
                <div className="absolute inset-0 backface-hidden rounded-[2rem] bg-white/95 flex flex-col justify-between p-5 border border-slate-200/50 shadow-inner">
                  {/* Badge Header logo & label */}
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
                        &lt;/&gt;
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-slate-800 tracking-wider leading-none">DEVELOPER</span>
                        <span className="text-[7px] text-slate-400 tracking-widest font-semibold uppercase leading-none">ACCESS</span>
                      </div>
                    </div>
                    <span className="text-[7px] font-mono bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-100/50">
                      NFC ENABLED
                    </span>
                  </div>

                  {/* Photo Frame */}
                  <div className="w-full h-[220px] rounded-[1.5rem] overflow-hidden relative border border-slate-100/80 shadow-md">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/about-portrait.jpg')",
                        backgroundPosition: "50% 20%"
                      }}
                    />
                  </div>

                  {/* Employee Details */}
                  <div className="text-center space-y-1">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      GEO <span className="text-blue-600">GEORGE</span>
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 tracking-wide">
                      Full Stack Engineer
                    </p>
                  </div>

                  {/* Tag ID & NFC Sign */}
                  <div className="flex justify-between items-center bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-100">
                    <div className="flex flex-col text-left">
                      <span className="text-[7px] text-slate-400 font-bold uppercase leading-none">EMPLOYEE ID</span>
                      <span className="text-xs font-bold text-blue-600 tracking-wider">#AI-2026</span>
                    </div>
                    {/* NFC Signal Wave Graphic */}
                    <div className="flex items-center gap-1.5 opacity-60">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <div className="w-2.5 h-2.5 border-r-2 border-t-2 border-blue-600 rounded-full rotate-45" />
                      <div className="w-4 h-4 border-r-2 border-t-2 border-blue-600 rounded-full rotate-45" />
                    </div>
                  </div>

                  {/* Bottom tech badges */}
                  <div className="grid grid-cols-4 gap-2 pt-1 border-t border-slate-100">
                    <div className="flex flex-col items-center gap-0.5 select-none">
                      <span className="text-xs">⚛️</span>
                      <span className="text-[7px] font-bold text-slate-500">React</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 select-none">
                      <span className="text-xs">🟢</span>
                      <span className="text-[7px] font-bold text-slate-500">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 select-none">
                      <span className="text-xs">☁️</span>
                      <span className="text-[7px] font-bold text-slate-500">AWS</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 select-none">
                      <span className="text-xs">🧠</span>
                      <span className="text-[7px] font-bold text-slate-500">AI / ML</span>
                    </div>
                  </div>

                  {/* Barcode representation */}
                  <div className="flex flex-col items-center gap-0.5 mt-1 select-none">
                    <div className="h-5 flex items-end gap-[1.5px] opacity-75">
                      {barcodeLines.map((width, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-900 h-full"
                          style={{ width: `${width}px` }}
                        />
                      ))}
                    </div>
                    <span className="text-[6px] font-mono tracking-[0.4em] text-slate-400">
                      *9446543476*
                    </span>
                  </div>
                </div>

                {/* ----------------- BADGE BACK ----------------- */}
                <div
                  className="absolute inset-0 backface-hidden rounded-[2rem] bg-slate-950 flex flex-col justify-between p-5 border border-slate-800 shadow-2xl text-slate-200"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  {/* Back Header */}
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
                      Full Stack Engineer
                    </span>
                    <div className="w-5 h-5 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] text-blue-500 font-mono">
                      &lt;/&gt;
                    </div>
                  </div>

                  {/* Skills Grid Section */}
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center gap-1.5 text-[8px] font-bold tracking-wider text-slate-400 uppercase">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                      Skills Inventory
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        "JavaScript", "MongoDB", "TypeScript", "PostgreSQL",
                        "React / Next", "AWS / Firebase", "Node.js", "Docker",
                        "Express.js", "AI / ML"
                      ].map((skill, i) => (
                        <div
                          key={i}
                          className="bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-lg text-[9px] font-medium text-slate-300 flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-blue-400" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Back Summary */}
                  <div className="space-y-1.5">
                    <div className="text-[8px] font-bold tracking-wider text-slate-400 uppercase">
                      About Me
                    </div>
                    <p className="text-[10px] leading-relaxed text-slate-300 bg-slate-900/40 p-2.5 rounded-xl border border-slate-900">
                      Passionate about building scalable web applications and AI powered solutions that solve real world problems.
                    </p>
                  </div>

                  {/* QR & Contact Info */}
                  <div className="grid grid-cols-12 gap-3 items-center border-t border-slate-800 pt-3">
                    {/* SVG Stylized QR Code Mockup */}
                    {/* SVG Stylized QR Code Mockup */}
                    <a
                      href="https://geogeorge.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col-span-4 bg-white p-1.5 rounded-xl flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer"
                      title="Open Portfolio Website"
                    >
                      <svg width="60" height="60" viewBox="0 0 37 37" fill="none" shapeRendering="crispEdges">
                        <path fill="#ffffff" d="M0 0h37v37H0z"/>
                        <path stroke="#1e293b" strokeWidth="1" d="M4 4.5h7m2 0h2m1 0h1m1 0h1m3 0h2m2 0h7M4 5.5h1m5 0h1m1 0h6m3 0h4m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h4m2 0h1m3 0h2m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m2 0h3m1 0h1m2 0h1m1 0h2m2 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m3 0h2m2 0h4m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m2 0h4m1 0h6m2 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M13 11.5h4m2 0h1m1 0h1M4 12.5h1m1 0h1m1 0h1m1 0h1m3 0h1m5 0h3m5 0h1m2 0h1M7 13.5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m3 0h3m2 0h1m2 0h1M6 14.5h3m1 0h1m1 0h1m1 0h3m1 0h4m3 0h3m2 0h3M5 15.5h1m3 0h1m2 0h1m1 0h1m2 0h2m1 0h2m1 0h2m6 0h1M6 16.5h1m3 0h1m7 0h2m1 0h1m2 0h3m2 0h1m1 0h2M4 17.5h2m2 0h1m2 0h2m2 0h1m2 0h2m1 0h1m2 0h3m2 0h1m2 0h1M6 18.5h5m1 0h6m4 0h1m1 0h2m1 0h1m1 0h1m1 0h2M4 19.5h1m1 0h1m1 0h2m1 0h2m6 0h1m1 0h2m1 0h1m1 0h1m1 0h2m1 0h1M4 20.5h1m2 0h2m1 0h3m2 0h2m3 0h2m3 0h2m2 0h1m1 0h2M6 21.5h1m1 0h2m1 0h2m4 0h1m1 0h4m1 0h1m1 0h1m2 0h2m1 0h1M4 22.5h1m1 0h5m3 0h3m1 0h3m1 0h1m1 0h1m1 0h3m2 0h2M5 23.5h3m3 0h1m5 0h2m1 0h2m2 0h3m2 0h1m1 0h1M4 24.5h1m1 0h5m1 0h1m1 0h1m3 0h2m1 0h1m1 0h6M12 25.5h2m1 0h2m1 0h2m1 0h4m3 0h1m1 0h3M4 26.5h7m2 0h1m1 0h3m4 0h3m1 0h1m1 0h2m1 0h2M4 27.5h1m5 0h1m2 0h1m1 0h2m2 0h1m1 0h1m1 0h2m3 0h2M4 28.5h1m1 0h3m1 0h1m1 0h1m3 0h1m3 0h3m1 0h5m2 0h1M4 29.5h1m1 0h3m1 0h1m4 0h3m1 0h2m6 0h2m1 0h1M4 30.5h1m1 0h3m1 0h1m1 0h2m2 0h6m1 0h2m2 0h3m2 0h1M4 31.5h1m5 0h1m2 0h1m1 0h1m2 0h1m1 0h5m3 0h1m2 0h1M4 32.5h7m1 0h1m4 0h4m1 0h4m1 0h2m2 0h2"/>
                      </svg>
                    </a>

                    {/* QR label and contact icons */}
                    <div className="col-span-8 flex flex-col justify-center space-y-1.5 text-[8px] font-mono text-slate-400 text-left">
                      <a
                        href="https://geogeorge.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold uppercase tracking-wider text-slate-300 hover:text-blue-400 transition-colors leading-none cursor-pointer"
                      >
                        CLICK OR SCAN TO VISIT
                      </a>
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center gap-1.5 leading-none">
                          <Globe className="w-2.5 h-2.5 text-blue-500" />
                          <span>geo-george.dev</span>
                        </div>
                        <div className="flex items-center gap-1.5 leading-none">
                          <Mail className="w-2.5 h-2.5 text-blue-500" />
                          <span>geogeorge.dev@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-1.5 leading-none">
                          <Linkedin className="w-2.5 h-2.5 text-blue-500" />
                          <span>linkedin.com/in/geo-george-dev/</span>
                        </div>
                        <div className="flex items-center gap-1.5 leading-none">
                          <Github className="w-2.5 h-2.5 text-blue-500" />
                          <span>github.com/geogeorge46</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Click/Hover helper text */}
            <span className="text-[10px] text-slate-400 mt-4 select-none font-medium animate-pulse">
              ✨ Hover or Click to Flip Badge
            </span>
          </section>

          {/* Right Column: About Me Bio Details */}
          <section className="lg:col-span-7 flex flex-col space-y-8 lg:pl-6 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                ABOUT ME
              </span>
              <h1 className="text-5xl md:text-6xl font-serif-display text-slate-900 tracking-tight leading-none">
                Hi, I&apos;m <span className="text-blue-600 font-serif-display">Geo George</span>
              </h1>
              <p className="text-lg font-bold text-slate-700 tracking-wide">
                Full Stack Developer & IoT Enthusiast
              </p>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              I build scalable, secure, and user-centric full stack applications using the MERN stack. 
              I enjoy turning ideas into real-world products and solve problems through clean code, 
              smart architecture, and innovative thinking. I&apos;m also passionate about IoT and love 
              integrating hardware with software to create impactful solutions.
            </p>

            {/* Feature cards 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/60 p-5 rounded-2xl border border-white/40 shadow-sm flex items-start gap-4 hover:glass-glow hover:scale-[1.01] transition-all duration-300 select-none"
                >
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100/50">
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-left space-y-1">
                    <span className="text-sm font-bold text-slate-800">{item.title}</span>
                    <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 select-none">
              <a
                href="/resume.pdf"
                download="Geo_George_Resume.pdf"
                className="bg-slate-900 text-white px-7 py-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 hover:bg-slate-800 hover:shadow-lg transition-all cursor-pointer w-fit"
              >
                Download Resume <Download className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>

        {/* Lower Section: Tech Stack & Tools */}
        <section className="space-y-6 pt-8 border-t border-slate-200/50 text-left">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase leading-none">
                TECH STACK
              </span>
              <h2 className="text-2xl font-serif-display text-slate-800">
                Tools I Work With
              </h2>
            </div>
            <span className="text-[10px] font-bold text-blue-600 flex items-center gap-1.5 select-none">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              UPDATED 2026
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white/70 px-4 py-3 rounded-2xl flex items-center justify-center gap-2.5 border border-white/50 shadow-sm hover:glass-glow hover:-translate-y-0.5 transition-all duration-300 select-none cursor-default"
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-xs font-semibold text-slate-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Stats Bar (Dark Theme) */}
        <section className="bg-slate-950/95 border border-slate-800/80 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden select-none">
          {/* Subtle grid mesh background */}
          <div className="absolute inset-0 dot-pattern opacity-[0.03] -z-10" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/50">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center space-y-1 p-2 pt-6 lg:pt-2 first:pt-2"
              >
                <span className="text-4xl md:text-5xl font-extrabold text-blue-500 font-sans tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Let's Connect Contact Section */}
        <section className="space-y-8 pt-8 border-t border-slate-200/50 text-left">
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase leading-none">
              LET&apos;S CONNECT
            </span>
            <h2 className="text-2xl font-serif-display text-slate-800">
              Get in Touch
            </h2>
          </div>

          {/* Cards for Address, Email, Phone, Website */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/60 p-5 rounded-2xl border border-white/40 shadow-sm flex items-center gap-4 select-none hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100/50">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase leading-none">Location</span>
                <span className="text-sm font-semibold text-slate-800 mt-1">Kerala, India</span>
              </div>
            </div>

            <a
              href="mailto:geogeorge.dev@gmail.com"
              className="bg-white/60 p-5 rounded-2xl border border-white/40 shadow-sm flex items-center gap-4 hover:glass-glow hover:scale-[1.01] transition-all duration-300 select-none"
            >
              <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100/50">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold text-slate-400 uppercase leading-none">Email</span>
                <span className="text-sm font-semibold text-slate-800 mt-1 break-all">geogeorge.dev@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:+919446543476"
              className="bg-white/60 p-5 rounded-2xl border border-white/40 shadow-sm flex items-center gap-4 hover:glass-glow hover:scale-[1.01] transition-all duration-300 select-none"
            >
              <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100/50">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold text-slate-400 uppercase leading-none">Phone</span>
                <span className="text-sm font-semibold text-slate-800 mt-1">+91 9446543476</span>
              </div>
            </a>

            <a
              href="https://geo-george.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/60 p-5 rounded-2xl border border-white/40 shadow-sm flex items-center gap-4 hover:glass-glow hover:scale-[1.01] transition-all duration-300 select-none"
            >
              <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100/50">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold text-slate-400 uppercase leading-none">Website</span>
                <span className="text-sm font-semibold text-slate-800 mt-1">geo-george.dev</span>
              </div>
            </a>
          </div>

          {/* Bottom Social Icons Row */}
          <div className="flex justify-center items-center gap-4 pt-4">
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
          </div>
        </section>
      </main>

      {/* Footer copyright */}
      <footer className="w-full py-8 text-center text-xs text-slate-400 select-none">
        &copy; {new Date().getFullYear()} Geo George. All rights reserved.
      </footer>
    </div>
  );
}
