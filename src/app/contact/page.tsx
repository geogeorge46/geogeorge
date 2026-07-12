import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactClient = dynamic(() => import("./ContactClient"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft select-none text-slate-400 font-mono text-sm animate-pulse">
      Loading...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Contact Geo George | Software Engineer & Developer",
  description:
    "Get in touch with Geo George for software engineering positions, internship opportunities, MERN stack developments, or IoT partnerships.",
};

export default function ContactPage() {
  return <ContactClient />;
}
