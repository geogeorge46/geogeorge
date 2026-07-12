import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ProjectsClient = dynamic(() => import("./ProjectsClient"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft select-none text-slate-400 font-mono text-sm animate-pulse">
      Loading Projects...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Geo George Projects | Full-Stack, IoT, AI & Cloud Development",
  description:
    "Explore the software projects built by Geo George, including Nexus SMS, Guardian Assist IoT smart stick, Interacta networking platform, and various cloud utilities.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
