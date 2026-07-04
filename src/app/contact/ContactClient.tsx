"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  MessageSquare,
  Copy,
  Check,
  CheckCircle2,
} from "lucide-react";

export default function ContactClient() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  // Copy Discord handler
  const handleCopyDiscord = () => {
    navigator.clipboard.writeText("wick_lander._93172");
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  // Submit form handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setIsSubmitting(true);
    // Mock network call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-slate-200 bg-gradient-soft relative overflow-x-hidden">
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
          <Link className="hover:text-slate-900 transition-colors" href="/about">
            About
          </Link>
          <Link className="hover:text-slate-900 transition-colors" href="/services">
            Services
          </Link>
          <Link className="hover:text-slate-900 transition-colors" href="/projects">
            Projects
          </Link>
          <Link className="relative py-1 text-slate-900 border-b-2 border-slate-900 transition-colors" href="/contact">
            Contact
          </Link>
        </nav>
        <a href="mailto:geogeorge.dev@gmail.com" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-slate-800 hover:shadow-lg transition-all cursor-pointer">
          Get in Touch <ArrowUpRight className="w-4 h-4" />
        </a>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl w-full mx-auto px-6 md:px-12 py-12 flex flex-col space-y-12 relative z-10 text-left">
        
        {/* Title Section */}
        <section className="space-y-4 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            LET&apos;S CONNECT
          </span>
          <h1 className="text-5xl md:text-6xl font-serif-display text-slate-900 tracking-tight leading-none">
            Get in Touch
          </h1>
          <p className="text-slate-500 text-md leading-relaxed">
            Have a project idea, internship opening, or just want to say hello? Drop me a message below or reach out directly on my social channels!
          </p>
        </section>

        {/* Layout Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Form */}
          <section className="lg:col-span-7 bg-white/60 p-6 md:p-8 rounded-[2.5rem] border border-white/60 shadow-lg flex flex-col justify-between relative overflow-hidden">
            
            {/* Confetti/Success Notification Overlay */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white/95 z-20 p-8 flex flex-col items-center justify-center text-center space-y-4 rounded-[2.5rem]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif-display text-slate-900">Message Sent!</h3>
                    <p className="text-slate-500 text-xs max-w-sm">
                      Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">SEND A MESSAGE</span>
                <h2 className="text-2xl font-serif-display text-slate-800">Email Me Directly</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="form-name" className="text-[10px] font-bold text-slate-400 uppercase">Your Name</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="bg-white/80 border border-slate-200/80 px-4 py-3 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 transition-all shadow-sm"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="form-email" className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="bg-white/80 border border-slate-200/80 px-4 py-3 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="form-subject" className="text-[10px] font-bold text-slate-400 uppercase">Subject</label>
                <input
                  id="form-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project Collaboration / Internship Inquiry"
                  className="bg-white/80 border border-slate-200/80 px-4 py-3 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 transition-all shadow-sm"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="form-message" className="text-[10px] font-bold text-slate-400 uppercase">Your Message</label>
                <textarea
                  id="form-message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message details here..."
                  className="bg-white/80 border border-slate-200/80 px-4 py-3 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 resize-none transition-all shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white py-3.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    Send Message <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </section>

          {/* Right Column: Information & Social Hub */}
          <section className="lg:col-span-5 flex flex-col gap-6 justify-between text-slate-800">
            
            {/* Direct contact info box */}
            <div className="bg-white/60 p-6 md:p-8 rounded-[2.5rem] border border-white/60 shadow-lg space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">DIRECT CONTACT</span>
                <h2 className="text-2xl font-serif-display text-slate-800">Office Channels</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 select-none">
                  <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100/50">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-slate-400 uppercase leading-none">Location</span>
                    <span className="text-sm font-semibold text-slate-800 mt-1">Kerala, India</span>
                  </div>
                </div>

                <a
                  href="mailto:geogeorge.dev@gmail.com"
                  className="flex items-center gap-4 hover:glass-glow hover:scale-[1.01] transition-all p-1.5 rounded-xl"
                >
                  <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100/50">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-slate-400 uppercase leading-none">Email</span>
                    <span className="text-sm font-semibold text-slate-800 mt-1 break-all">geogeorge.dev@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+919446543476"
                  className="flex items-center gap-4 hover:glass-glow hover:scale-[1.01] transition-all p-1.5 rounded-xl"
                >
                  <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100/50">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-slate-400 uppercase leading-none">Phone</span>
                    <span className="text-sm font-semibold text-slate-800 mt-1">+91 9446543476</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Grid Box */}
            <div className="bg-white/60 p-6 md:p-8 rounded-[2.5rem] border border-white/60 shadow-lg space-y-5 flex-grow flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">SOCIAL PROFILES</span>
                <h2 className="text-2xl font-serif-display text-slate-800">Find Me On</h2>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/geo-george-883616276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/70 hover:glass-glow border border-slate-200/80 px-4 py-3 rounded-2xl flex items-center justify-center gap-2 text-slate-700 hover:text-slate-900 transition-all select-none font-semibold text-xs"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  LinkedIn
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/geogeorge46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/70 hover:glass-glow border border-slate-200/80 px-4 py-3 rounded-2xl flex items-center justify-center gap-2 text-slate-700 hover:text-slate-900 transition-all select-none font-semibold text-xs"
                >
                  <Github className="w-4 h-4 text-slate-900" />
                  GitHub
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/g_eo.g_eorge?igsh=MTZ5bXVwc3dwNWoyYw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/70 hover:glass-glow border border-slate-200/80 px-4 py-3 rounded-2xl flex items-center justify-center gap-2 text-slate-700 hover:text-slate-900 transition-all select-none font-semibold text-xs"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  Instagram
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/gio.george.733/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/70 hover:glass-glow border border-slate-200/80 px-4 py-3 rounded-2xl flex items-center justify-center gap-2 text-slate-700 hover:text-slate-900 transition-all select-none font-semibold text-xs"
                >
                  <Facebook className="w-4 h-4 text-blue-800" />
                  Facebook
                </a>
              </div>

              {/* Discord copy button (spanning full-width below the grid) */}
              <button
                onClick={handleCopyDiscord}
                className="w-full mt-2 bg-slate-900 text-slate-100 hover:bg-slate-800 px-5 py-3.5 rounded-2xl flex items-center justify-between border border-slate-800 hover:shadow-md transition-all select-none cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[7px] font-bold text-slate-400 uppercase">Discord Handle</span>
                    <span className="text-xs font-mono font-bold text-white mt-1">wick_lander._93172</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-1.5 rounded-lg text-slate-300">
                  {copiedDiscord ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>
            </div>
          </section>

        </div>
      </main>

      {/* Footer copyright */}
      <footer className="w-full py-8 text-center text-xs text-slate-400 select-none">
        &copy; {new Date().getFullYear()} Geo George. All rights reserved.
      </footer>
    </div>
  );
}
