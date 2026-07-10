import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Geo George Services | Web Development, IoT & Software Solutions",
  description:
    "Professional software engineering services offered by Geo George, including Full-Stack Web Development, Custom Management Systems, AI-powered applications, and IoT connected hardware integrations.",
};
import {
  Code2,
  Users,
  BrainCircuit,
  Cpu,
  LayoutDashboard,
  Cloud,
  ArrowUpRight,
  Compass,
  Settings,
  ShieldCheck,
  Send,
  Zap,
} from "lucide-react";

export default function ServicesPage() {
  // Services details
  const servicesList = [
    {
      title: "Full-Stack Web Development",
      description: "Scalable React/MERN applications built with secure backend architecture, responsive styling, and fluid user experiences.",
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      tag: "CORE",
      gradient: "from-blue-600 to-indigo-600",
      bgGlow: "bg-blue-500/10",
      borderGlow: "border-blue-500/20",
      deliverables: [
        "MERN Stack Architecture",
        "Secure RESTful API Development",
        "Responsive Client Interfaces",
        "State Management & Optimization",
      ],
    },
    {
      title: "Custom Management Systems",
      description: "Role-based ERP, education, staff, attendance, and operational platforms designed to streamline organizational workflows.",
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      tag: "SYSTEMS",
      gradient: "from-emerald-600 to-teal-600",
      bgGlow: "bg-emerald-500/10",
      borderGlow: "border-emerald-500/20",
      deliverables: [
        "Role-Based Access Control (RBAC)",
        "Attendance & Roster Tracking",
        "Enterprise Resource Planning",
        "Data Audits & Access Logs",
      ],
    },
    {
      title: "AI-Powered Applications",
      description: "Intelligent assistants, task automation tools, semantic search engines, and large language model integrations.",
      icon: <BrainCircuit className="w-6 h-6 text-purple-600" />,
      tag: "INTELLIGENCE",
      gradient: "from-purple-600 to-indigo-600",
      bgGlow: "bg-purple-500/10",
      borderGlow: "border-purple-500/20",
      deliverables: [
        "LLM & API Integrations",
        "Semantic Search & Retrieval",
        "Autonomous Agents & Bots",
        "Data Automation Pipelines",
      ],
    },
    {
      title: "IoT & Real-Time Systems",
      description: "ESP32-based connected hardware, custom sensor platforms, instantaneous alerts, and live monitoring dashboards.",
      icon: <Cpu className="w-6 h-6 text-orange-600" />,
      tag: "HARDWARE",
      gradient: "from-orange-600 to-rose-600",
      bgGlow: "bg-orange-500/10",
      borderGlow: "border-orange-500/20",
      deliverables: [
        "ESP32 Firmware Programming",
        "Real-Time WebSocket Streams",
        "Sensor Calibration & Wiring",
        "Automatic Alerts & Actions",
      ],
    },
    {
      title: "Dashboards & Admin Portals",
      description: "Analytics tools, multi-role admin panels, data visualisations, interactive charts, and live operational controls.",
      icon: <LayoutDashboard className="w-6 h-6 text-sky-600" />,
      tag: "ANALYTICS",
      gradient: "from-sky-600 to-blue-600",
      bgGlow: "bg-sky-500/10",
      borderGlow: "border-sky-500/20",
      deliverables: [
        "Interactive Charts & Grids",
        "Real-Time Data Feeds",
        "Custom Metrics & Aggregations",
        "Bulk Data Exporting (PDF/CSV)",
      ],
    },
    {
      title: "Cloud & API Integration",
      description: "Database configurations, Firebase systems, secure authentication models, external APIs, and production deployments.",
      icon: <Cloud className="w-6 h-6 text-slate-700" />,
      tag: "DEPLOYMENT",
      gradient: "from-slate-700 to-slate-900",
      bgGlow: "bg-slate-500/10",
      borderGlow: "border-slate-500/20",
      deliverables: [
        "Cloud Hosting (AWS / Firebase)",
        "Database Design & Scaling",
        "Third-Party API Integrations",
        "CI/CD Pipeline Configurations",
      ],
    },
  ];

  // Workflow steps
  const processSteps = [
    {
      title: "1. Discover & Plan",
      description: "Analyzing requirements, mapping workflows, and establishing system architecture.",
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      bgGlow: "bg-blue-500/10",
    },
    {
      title: "2. Design & Build",
      description: "Writing high-quality code, assembling hardware, and configuring database nodes.",
      icon: <Settings className="w-5 h-5 text-purple-600" />,
      bgGlow: "bg-purple-500/10",
    },
    {
      title: "3. Test & Refine",
      description: "Conducting unit tests, load tests, and checking integration boundaries.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      bgGlow: "bg-emerald-500/10",
    },
    {
      title: "4. Deploy & Scale",
      description: "Launching into production cloud environments with monitoring metrics.",
      icon: <Send className="w-5 h-5 text-orange-600" />,
      bgGlow: "bg-orange-500/10",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-slate-200 bg-gradient-soft relative overflow-x-hidden">
      {/* Decorative Dot Patterns */}
      <div className="absolute top-12 left-24 w-32 h-32 dot-pattern opacity-30 -z-10" />
      <div className="absolute bottom-12 right-12 w-48 h-48 dot-pattern opacity-30 -z-10" />

      <Navbar />

      {/* Main Body */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-12 flex flex-col space-y-12 sm:space-y-20 relative z-10 text-left">
        
        {/* Title Section */}
        <section className="space-y-4 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            MY SERVICES
          </span>
          <h1 className="text-4xl md:text-6xl font-serif-display text-slate-900 tracking-tight leading-none">
            Capabilities & Expertise
          </h1>
          <p className="text-slate-500 text-sm sm:text-md leading-relaxed">
            Delivering robust development services—spanning responsive full-stack architectures, hardware IoT modules, customized operational tools, and intelligent automation systems.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/60 p-5 sm:p-6.5 rounded-3xl sm:rounded-[2rem] border border-white/60 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Header Tag and Icon */}
                <div className="flex items-center justify-between">
                  <span className={`text-[9px] font-bold ${service.bgGlow} ${service.borderGlow} border px-2.5 py-0.5 rounded-full`}>
                    {service.tag}
                  </span>
                  <div className={`p-2.5 rounded-xl ${service.bgGlow} border ${service.borderGlow}`}>
                    {service.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Competencies checklist */}
              <div className="mt-6 pt-5 border-t border-slate-100/60 space-y-2 select-none">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">
                  Core Competencies
                </span>
                <ul className="space-y-1.5">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] font-semibold text-slate-700">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Development Workflow Section */}
        <section className="bg-white/60 p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] border border-white/60 shadow-lg space-y-8 sm:space-y-10">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100/50">
              <Zap className="w-5.5 h-5.5 text-blue-500" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">PROJECT LIFE CYCLE</span>
              <h3 className="text-2xl font-serif-display text-slate-800 leading-none">How I Work</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="space-y-3.5 relative text-left">
                <div className={`p-2.5 rounded-xl ${step.bgGlow} w-fit`}>
                  {step.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-800">{step.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Call-to-Action */}
        <section className="bg-slate-950 text-slate-200 p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] border border-slate-800/80 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-[0.03] -z-10" />
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[9px] font-bold text-blue-500 font-mono uppercase tracking-wider">COLLABORATE</span>
            <h3 className="text-2xl font-serif-display text-white">Have a project in mind?</h3>
            <p className="text-slate-400 text-xs max-w-lg leading-relaxed">
              Let&apos;s collaborate to turn your requirements into scalable, secure, and production-ready applications.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-slate-900 px-6 py-3 rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-slate-100 hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>

      </main>

      {/* Footer copyright */}
      <footer className="w-full py-8 text-center text-xs text-slate-400 select-none">
        &copy; {new Date().getFullYear()} Geo George. All rights reserved.
      </footer>
    </div>
  );
}
