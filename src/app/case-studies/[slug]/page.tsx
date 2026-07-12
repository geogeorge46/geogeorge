"use client";

import React, { use } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Zap,
  GitBranch,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = use(params);

  // Look up the project by slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-soft select-none text-slate-800">
        <h1 className="text-4xl font-serif-display mb-4">Case Study Not Found</h1>
        <p className="text-slate-500 mb-8">The requested project study does not exist or has been moved.</p>
        <Link href="/projects" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors">
          Back to Projects
        </Link>
      </div>
    );
  }

  // Theme color settings based on slug
  const themes: Record<string, { gradient: string; textAccent: string; bgGlow: string; borderGlow: string; icon: string }> = {
    "nexus-sms": {
      gradient: "from-blue-600 to-indigo-600",
      textAccent: "text-blue-600",
      bgGlow: "bg-blue-500/10",
      borderGlow: "border-blue-500/20",
      icon: "⚛️",
    },
    "guardian-assist": {
      gradient: "from-emerald-600 to-teal-600",
      textAccent: "text-emerald-600",
      bgGlow: "bg-emerald-500/10",
      borderGlow: "border-emerald-500/20",
      icon: "📟",
    },
    "interacta": {
      gradient: "from-purple-600 to-indigo-600",
      textAccent: "text-purple-600",
      bgGlow: "bg-purple-500/10",
      borderGlow: "border-purple-500/20",
      icon: "💬",
    },
    "docvault": {
      gradient: "from-sky-600 to-blue-600",
      textAccent: "text-sky-600",
      bgGlow: "bg-sky-500/10",
      borderGlow: "border-sky-500/20",
      icon: "📁",
    },
    "pdf-editor": {
      gradient: "from-amber-600 to-orange-600",
      textAccent: "text-amber-600",
      bgGlow: "bg-amber-500/10",
      borderGlow: "border-amber-500/20",
      icon: "📄",
    },
    "plagiarism-checker": {
      gradient: "from-indigo-600 to-violet-600",
      textAccent: "text-indigo-600",
      bgGlow: "bg-indigo-500/10",
      borderGlow: "border-indigo-500/20",
      icon: "🔍",
    },
    "gearequip": {
      gradient: "from-orange-600 to-rose-600",
      textAccent: "text-orange-600",
      bgGlow: "bg-orange-500/10",
      borderGlow: "border-orange-500/20",
      icon: "🚜",
    },
    "open-source-contributions": {
      gradient: "from-slate-700 to-slate-900",
      textAccent: "text-slate-700",
      bgGlow: "bg-slate-500/10",
      borderGlow: "border-slate-500/20",
      icon: "🐙",
    },
  };

  const currentTheme = themes[slug] || {
    gradient: "from-slate-600 to-slate-800",
    textAccent: "text-slate-600",
    bgGlow: "bg-slate-500/10",
    borderGlow: "border-slate-500/20",
    icon: "💻",
  };

  // Find other case studies to recommend
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  // CreativeWork Schema
  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.fullTitle || project.title,
    "description": project.solution || project.tagline,
    "genre": project.category,
    "url": `https://geogeorge.vercel.app/case-studies/${project.slug}`,
    "creator": {
      "@type": "Person",
      "name": "Geo George",
      "url": "https://geogeorge.vercel.app"
    }
  };

  // SoftwareSourceCode Schema
  const softwareSchema = project.githubUrl ? {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": project.fullTitle || project.title,
    "description": project.solution || project.tagline,
    "codeRepository": project.githubUrl,
    "programmingLanguage": project.stack,
    "targetProduct": {
      "@type": "SoftwareApplication",
      "name": project.title,
      "applicationCategory": "WebApplication",
      "operatingSystem": "All",
      "downloadUrl": project.liveUrl || ""
    }
  } : null;

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-slate-200 bg-gradient-soft relative overflow-x-hidden">
      {/* Dynamic Schemas Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      {softwareSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      )}

      {/* Decorative Dot Patterns */}
      <div className="absolute top-12 left-24 w-32 h-32 dot-pattern opacity-30 -z-10" />
      <div className="absolute bottom-12 right-12 w-48 h-48 dot-pattern opacity-30 -z-10" />

      <Navbar />

      {/* Main Container */}
      <main className="max-w-5xl w-full mx-auto px-6 md:px-12 py-8 flex flex-col space-y-12 relative z-10 text-left">
        
        {/* Back Link */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors group select-none self-start"
        >
          <ArrowLeft className="w-3.5 h-3.5 transform group-hover:translate-x-[-3px] transition-transform" />
          Back to Projects
        </Link>

        {/* 1. Hero / Header Area */}
        <section className="space-y-6">
          <div className="flex flex-wrap gap-2.5">
            <span className={`text-[10px] font-bold ${currentTheme.bgGlow} ${currentTheme.textAccent} px-3 py-1 rounded-full border ${currentTheme.borderGlow}`}>
              {project.category}
            </span>
            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
              {project.status}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif-display text-slate-900 tracking-tight leading-none">
              {project.fullTitle}
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2 select-none">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-950 text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-800 flex items-center gap-2 shadow-sm transition-all"
              >
                <Github className="w-4 h-4" /> View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-50 hover:border-slate-300 flex items-center gap-2 transition-all"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </section>

        {/* 2. Problem & Challenge Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Statement Card */}
          <div className="bg-white/60 p-6.5 rounded-3xl border border-white/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2.5">
              <div className="bg-red-50 p-2 rounded-xl border border-red-100/50">
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">The Problem</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Engineering Challenge Card */}
          <div className="bg-white/60 p-6.5 rounded-3xl border border-white/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2.5">
              <div className="bg-amber-50 p-2 rounded-xl border border-amber-100/50">
                <Zap className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">The Challenge</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </section>

        {/* 3. The Solution & Architecture */}
        <section className="bg-white/60 p-8 rounded-[2.5rem] border border-white/60 shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100/50">
              <Lightbulb className="w-5.5 h-5.5 text-blue-500" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Engineering Logic</span>
              <h3 className="text-xl font-serif-display text-slate-800 leading-none">The Solution</h3>
            </div>
          </div>
          <p className="text-slate-600 text-md leading-relaxed">
            {project.solution}
          </p>

          {/* Tech Stack inventory list */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Technology Stack</span>
            <div className="flex flex-wrap gap-2 select-none">
              {project.stack.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 flex items-center gap-1.5"
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentTheme.gradient}`} />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core Features Checklist */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase leading-none">SYSTEM FEATURES</span>
            <h2 className="text-2xl font-serif-display text-slate-800">Key Features Built</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white/60 p-4.5 rounded-2xl border border-white/40 shadow-sm flex items-center gap-3.5 hover:shadow-md transition-shadow select-none"
              >
                <div className={`p-1.5 rounded-lg ${currentTheme.bgGlow}`}>
                  <CheckCircle2 className={`w-4 h-4 ${currentTheme.textAccent}`} />
                </div>
                <span className="text-sm font-semibold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Custom Repositories Section for Open Source Contributions */}
        {slug === "open-source-contributions" && project.repositories && (
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase leading-none">CONTRIBUTED REPOS</span>
              <h2 className="text-2xl font-serif-display text-slate-800">Public Repositories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.repositories.map((repo, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-950 text-slate-200 p-6 rounded-3xl border border-slate-800 shadow-lg flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-3.5 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-bold uppercase tracking-wider text-blue-500 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-900/50">
                        {repo.organization}
                      </span>
                      <GitBranch className="w-4 h-4 text-slate-500" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white leading-tight">{repo.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{repo.description}</p>
                    </div>
                  </div>
                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors select-none self-start"
                  >
                    View Repo on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Outcome / Result section */}
        <section className="bg-slate-950 text-slate-200 p-8 md:p-10 rounded-[2.5rem] border border-slate-800/80 shadow-2xl relative overflow-hidden">
          {/* subtle mesh background */}
          <div className="absolute inset-0 dot-pattern opacity-[0.03] -z-10" />
          <div className="space-y-4 max-w-3xl">
            <span className="text-[9px] font-bold text-blue-500 font-mono uppercase tracking-wider">PROJECT OUTCOME</span>
            <h3 className="text-2xl font-serif-display text-white">Impact & Implementation Result</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </section>

        {/* 7. Footer: Other Case Studies recommendation */}
        <section className="space-y-6 pt-12 border-t border-slate-200/50">
          <h3 className="text-xl font-serif-display text-slate-800">
            Explore Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 select-none">
            {otherProjects.map((p, idx) => {
              const pTheme = themes[p.slug] || currentTheme;
              return (
                <Link
                  key={idx}
                  href={`/case-studies/${p.slug}`}
                  className="bg-white/60 p-5 rounded-2xl border border-white/40 shadow-sm hover:glass-glow hover:scale-[1.01] transition-all duration-300 text-left flex flex-col justify-between min-h-[140px]"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[8px] font-bold ${pTheme.bgGlow} ${pTheme.textAccent} px-2 py-0.5 rounded border ${pTheme.borderGlow}`}>
                        {p.category}
                      </span>
                      <span className="text-sm">{pTheme.icon}</span>
                    </div>
                    <h4 className="text-md font-bold text-slate-800 leading-tight">
                      {p.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">
                      {p.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-700 pt-3 mt-2 border-t border-slate-100/50">
                    Read Case Study <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
