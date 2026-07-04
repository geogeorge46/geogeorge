export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://geogeorge.vercel.app/#person",
    name: "Geo George",
    url: "https://geogeorge.vercel.app",
    jobTitle: "Software Engineer",
    description:
      "Geo George is a Software Engineer, Web Developer, IoT Developer, and Open Source Coordinator specializing in full-stack development, AI-enabled applications, cloud technologies, and connected systems.",
    sameAs: [
      "https://github.com/geogeorge46",
      "https://www.linkedin.com/in/geo-george-dev/",
      "https://www.instagram.com/g_eo.g_eorge?igsh=MTZ5bXVwc3dwNWoyYw%3D%3D",
      "https://www.facebook.com/gio.george.733/"
    ],
    knowsAbout: [
      "Software Engineering",
      "Web Development",
      "Full-Stack Development",
      "Internet of Things",
      "MERN Stack",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Cloud Computing",
      "Artificial Intelligence",
      "Open Source"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
