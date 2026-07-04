import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Geo George | Software Engineer & Developer",
  description:
    "Get in touch with Geo George for software engineering positions, internship opportunities, MERN stack developments, or IoT partnerships.",
};

export default function ContactPage() {
  return <ContactClient />;
}
