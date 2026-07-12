import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      href: "https://github.com/geogeorge46",
      label: "GitHub",
      icon: <Github className="w-4.5 h-4.5" />,
    },
    {
      href: "https://www.linkedin.com/in/geo-george-dev/",
      label: "LinkedIn",
      icon: <Linkedin className="w-4.5 h-4.5" />,
    },
    {
      href: "mailto:geogeorge.dev@gmail.com",
      label: "Email",
      icon: <Mail className="w-4.5 h-4.5" />,
    },
  ];

  return (
    <footer className="w-full border-t border-slate-200/50 bg-white/20 backdrop-blur-sm py-12 md:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Copyright & Tech Stack */}
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left select-none">
          <span className="text-xs sm:text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Geo George. All rights reserved.
          </span>
          <span className="text-[10px] text-slate-400 font-mono tracking-wide">
            Built with Next.js, TypeScript & Tailwind CSS
          </span>
        </div>

        {/* Social Links */}
        <nav className="flex items-center gap-4" aria-label="Social profiles">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              title={social.label}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
