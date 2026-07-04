export const projects = [
    {
        slug: "nexus-sms",
        title: "Nexus SMS",
        fullTitle: "Nexus Student Management System",
        category: "Enterprise SaaS",
        tagline: "Unified institution management for modern academic workflows.",
        problem:
            "Academic operations are fragmented across disconnected tools, manual records, and role-specific workflows.",
        solution:
            "A centralized multi-role platform connecting admins, teachers, students, and parents through secure, structured workflows.",
        features: [
            "Role-based dashboards",
            "Student and staff management",
            "Attendance and grades",
            "Fees and courses",
            "LMS and timetable",
            "Analytics and audit logs"
        ],
        stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        challenge:
            "Maintaining secure authorization and consistent data relationships across interconnected academic modules.",
        outcome:
            "Built a modular multi-role management platform with protected workflows, analytics, and scalable architecture.",
        status: "Flagship Project",
        featured: true,
        githubUrl: "https://github.com/geogeorge46/nexusSMS",
        liveUrl: "https://nexus-sms-five.vercel.app/",
        caseStudyUrl: "/case-studies/nexus-sms"
    },

    {
        slug: "guardian-assist",
        title: "Guardian Assist",
        fullTitle: "Guardian Assist Smart Blind Stick",
        category: "AI + IoT",
        tagline: "Smart assistive mobility and real-time safety monitoring.",
        problem:
            "Traditional mobility aids lack automated fall detection, remote alerts, connected environmental sensing, and real-time monitoring.",
        solution:
            "An ESP32-based assistive system combining sensors, physical feedback, emergency alerts, and cloud-connected monitoring.",
        features: [
            "Obstacle detection",
            "Fall detection",
            "SOS alerts",
            "Vibration feedback",
            "Firebase telemetry",
            "Live monitoring dashboard"
        ],
        stack: ["ESP32", "C++", "Firebase", "React", "MPU6050"],
        challenge:
            "Reducing false fall detections caused by noisy motion sensor data while maintaining responsive emergency alerts.",
        outcome:
            "Developed a functional edge-cloud prototype integrating embedded hardware, sensors, alerts, and live monitoring.",
        status: "Patent-Oriented Project",
        featured: true,
        githubUrl: "https://github.com/geogeorge46/Guardianassist",
        liveUrl: "https://guardianassist-e4e62.web.app/",
        caseStudyUrl: "/case-studies/guardian-assist"
    },

    {
        slug: "interacta",
        title: "Interacta",
        fullTitle: "Interacta Smart Networking Platform",
        category: "AI Networking",
        tagline:
            "Transforming static event directories into live networking ecosystems.",
        problem:
            "Event platforms provide attendee lists but rarely help users discover relevant people or begin meaningful conversations.",
        solution:
            "A real-time networking platform combining live communication, intelligent profiles, and AI-assisted matchmaking.",
        features: [
            "Real-time chat",
            "AI matchmaking",
            "Smart introductions",
            "Conversation summaries",
            "Live dashboard",
            "Contextual notifications"
        ],
        stack: ["Next.js", "Firebase", "Gemini API", "Firestore", "FCM"],
        challenge:
            "Combining low-latency messaging with AI processing without slowing the core interaction experience.",
        outcome:
            "Designed a scalable real-time collaboration architecture with contextual AI assistance and intelligent networking workflows.",
        status: "AI Collaboration Project",
        featured: true,
        githubUrl: "https://github.com/geogeorge46/interacta",
        liveUrl: null,
        caseStudyUrl: "/case-studies/interacta"
    },

    {
        slug: "docvault",
        title: "DocVault",
        fullTitle: "DocVault Secure Document Platform",
        category: "Cloud Platform",
        tagline: "Secure document organization and cloud access.",
        problem:
            "Important files are scattered across devices, emails, and disconnected storage systems.",
        solution:
            "A centralized authenticated workspace for storing, organizing, searching, and retrieving documents.",
        features: [
            "Secure authentication",
            "Cloud upload",
            "Document categories",
            "Search and filtering",
            "Document preview",
            "User-scoped access"
        ],
        stack: ["React", "Firebase Auth", "Firestore", "Firebase Storage"],
        challenge:
            "Keeping document metadata synchronized with cloud storage objects while maintaining secure user-specific access.",
        outcome:
            "Built a structured cloud document workflow with secure authentication and user-specific document management.",
        status: "Cloud Application",
        featured: false,
        githubUrl: "https://github.com/geogeorge46/docvault",
        liveUrl: "https://doczvalut.netlify.app/",
        caseStudyUrl: "/case-studies/docvault"
    },

    {
        slug: "pdf-editor",
        title: "PDF Editor",
        fullTitle: "Web-Based PDF Editor",
        category: "Productivity Tool",
        tagline: "Browser-based PDF workflows in one clean interface.",
        problem:
            "Users often need multiple disconnected tools for common PDF operations and document workflows.",
        solution:
            "A unified browser experience for previewing, organizing, editing, and processing PDF documents.",
        features: [
            "PDF preview",
            "Merge documents",
            "Split PDFs",
            "Reorder pages",
            "Rotate pages",
            "Export processed files"
        ],
        stack: ["React", "JavaScript", "PDF.js", "Tailwind CSS"],
        challenge:
            "Managing PDF rendering, page state, document operations, and export performance directly in the browser.",
        outcome:
            "Created a modular productivity workflow for complex browser-based document interaction.",
        status: "Utility Product",
        featured: false,
        githubUrl: "https://github.com/geogeorge46/pdfeditor",
        liveUrl: "https://pdfeditor-rosy.vercel.app/",
        caseStudyUrl: "/case-studies/pdf-editor"
    },

    {
        slug: "plagiarism-checker",
        title: "Plagiarism Checker",
        fullTitle: "AI-Powered Plagiarism Checker",
        category: "AI + NLP",
        tagline: "Explainable text similarity and originality analysis.",
        problem:
            "Exact text matching fails to identify modified, reordered, or semantically similar content.",
        solution:
            "A text analysis pipeline combining preprocessing and multiple similarity signals to identify potentially duplicated content.",
        features: [
            "Text analysis",
            "Document upload",
            "Similarity scoring",
            "Match highlighting",
            "Originality reports",
            "Structured results"
        ],
        stack: ["Python", "NLP", "FastAPI", "React", "scikit-learn"],
        challenge:
            "Distinguishing common language from meaningful content duplication while keeping similarity results interpretable.",
        outcome:
            "Designed an explainable similarity workflow with structured analysis and originality reporting.",
        status: "AI Project",
        featured: false,
        githubUrl: "https://github.com/geogeorge46/plagarism-checker",
        liveUrl: null,
        caseStudyUrl: "/case-studies/plagiarism-checker"
    },

    {
        slug: "gearequip",
        title: "GearEquip",
        fullTitle: "GearEquip Equipment Rental Marketplace",
        category: "Marketplace",
        tagline: "Connecting equipment providers with renters.",
        problem:
            "Equipment rental discovery and availability are often fragmented, offline, and difficult to coordinate.",
        solution:
            "A two-sided marketplace for equipment listings, discovery, availability, booking, and provider management.",
        features: [
            "Equipment listings",
            "Search and filters",
            "Availability tracking",
            "Rental bookings",
            "Ratings and reviews",
            "Admin dashboard"
        ],
        stack: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
        challenge:
            "Preventing conflicting reservations across overlapping rental periods while maintaining clear availability.",
        outcome:
            "Built multi-role marketplace workflows covering discovery, inventory, booking, and rental lifecycle management.",
        status: "Marketplace Platform",
        featured: false,
        githubUrl: "https://github.com/geogeorge46/GEAREQ",
        liveUrl: null,
        caseStudyUrl: "/case-studies/gearequip"
    },

    {
        slug: "open-source-contributions",
        title: "Open Source Contributor",
        fullTitle: "Open Source Contributions",
        category: "Open Source",
        tagline:
            "Contributing structured content, technology resources, and community-driven improvements to public repositories.",
        problem:
            "Open-source knowledge platforms depend on accurate, structured, maintainable community contributions to expand their educational and technical coverage.",
        solution:
            "Contributed new academic syllabus structures, technology domains, curated resources, and repository improvements through Git-based collaborative workflows.",
        features: [
            "University syllabus contributions",
            "KTU Integrated MCA content",
            "Technology domain additions",
            "Curated technical resources",
            "Git feature branch workflows",
            "Pull request collaboration"
        ],
        stack: ["Git", "GitHub", "JSON", "YAML", "Markdown", "Open Source"],
        challenge:
            "Following existing repository schemas, contribution standards, validation requirements, and collaborative review workflows.",
        outcome:
            "Expanded community-driven educational and technical resources through structured open-source contributions and multiple pull-request workflows.",
        status: "Active Contributor",
        featured: true,
        githubUrl: "https://github.com/geogeorge46",
        liveUrl: null,
        caseStudyUrl: "/case-studies/open-source-contributions",

        repositories: [
            {
                name: "WikiSyllabus",
                organization: "The Purple Movement",
                description:
                    "Contributed structured university syllabus content, including KTU Integrated MCA academic paths and course data.",
                url: "https://github.com/The-Purple-Movement/WikiSyllabus"
            },
            {
                name: "TechMyrmidons Web",
                organization: "The Purple Movement",
                description:
                    "Contributed technology domains and curated resources covering emerging software and engineering fields.",
                url: "https://github.com/The-Purple-Movement/techmyrmidons-web"
            }
        ]
    }
];

export const featuredProjects = projects.filter(
    (project) => project.featured
);

export const getProjectBySlug = (slug) =>
    projects.find((project) => project.slug === slug);