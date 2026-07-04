import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Geo George Projects | Full-Stack, IoT, AI & Cloud Development",
  description:
    "Explore the software projects built by Geo George, including Nexus SMS, Guardian Assist IoT smart stick, Interacta networking platform, and various cloud utilities.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
