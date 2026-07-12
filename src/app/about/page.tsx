import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutClient = dynamic(() => import("./AboutClient"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft select-none text-slate-400 font-mono text-sm animate-pulse">
      Loading...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "About Geo George | Software Engineer & Open Source Coordinator",
  description:
    "Learn more about Geo George, a Software Engineer, Web Developer, and IoT Developer specializing in full-stack applications, connected devices, and open-source contributions.",
};

export default function AboutPage() {
  return <AboutClient />;
}
