import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Geo George | Software Engineer & Open Source Coordinator",
  description:
    "Learn more about Geo George, a Software Engineer, Web Developer, and IoT Developer specializing in full-stack applications, connected devices, and open-source contributions.",
};

export default function AboutPage() {
  return <AboutClient />;
}
