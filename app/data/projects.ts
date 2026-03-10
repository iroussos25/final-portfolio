export type Project = {
  title: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "FHIR Pulse: Clinical Interoperability",
    description: "", 
    detailedDescription: "A production-grade interoperability dashboard architected to aggregate HL7 FHIR R4 data streams via secure Node.js middleware. I engineered a low-latency visualization layer for real-time vitals tracking, implementing custom schema validation and HIPAA-compliant data handling for high-stakes clinical environments.",
    tags: ["HL7 FHIR", "Node.js", "AWS", "Healthcare"],
    url: "https://fhir-dashboard-five.vercel.app/",
    image: "/icu-monitor.png",
  },
  {
    title: "Skinstric: AI Biometric Interface",
    description: "",
    detailedDescription: "An AI-driven capture interface using MediaPipe for real-time 3D biometric landmark tracking. I developed a telemetry feedback loop to gate data ingestion based on image fidelity, ensuring medical-grade data quality for downstream AI diagnostic analysis.",
    tags: ["MediaPipe", "Computer Vision", "TypeScript", "AI"],
    url: "https://skinstric-project-mu.vercel.app/",
    image: "/Skinstric.png",
  },
  {
    title: "Summarist: AI SaaS Architecture",
    description: "",
    detailedDescription: "A full-stack SaaS platform featuring LLM orchestration for automated content summarization. I engineered a robust architecture integrating Firebase Auth for identity management and a tiered Stripe subscription system, focusing on high-concurrency API handling.",
    tags: ["AI Orchestration", "Next.js", "Stripe", "PostgreSQL"],
    url: "https://yiannis-summarist.vercel.app/",
    image: "/summarist.png",
  },
  {
    title: "Enterprise API Governance & Security Sentinel",
    description: "",
    detailedDescription: "Engineered a Python-based static analysis engine to enforce OpenAPI 3.0 security and compliance. Integrated with GitHub Actions to create an automated CI/CD \"gatekeeper\" that blocks insecure protocols (http) and ensures 100% auditability for enterprise API specifications. Transformed manual governance into a \"fail-fast\" automated pipeline.",
    tags: ["Python", "OpenAPI", "GitHub Actions", "CI/CD"],
    url: "https://github.com/iroussos25/prudential-linter",
    image: "/prudential_linter.png",
  },
  {
    title: "Interactive 3D Engine",
    description: "",
    detailedDescription: "A high-performance 3D visualization engine built with Three.js and WebGL. I optimized custom shaders to maintain a fluid 60fps on mobile devices and architected a modular AI-integration interface designed for generative asset creation. This project demonstrates the ability to bridge immersive 3D environments with extensible API layers, focusing on performance-first digital twin rendering.",
    tags: ["Three.js", "WebGL", "API Architecture", "Generative UI"],
    url: "https://3js-swart-theta.vercel.app/",
    image: "/teestore.png",
  },
  {
    title: "Ultraverse: Asset Marketplace",
    description: "",
    detailedDescription: "A scalable marketplace architecture built with Next.js and integrated blockchain API endpoints. I focused on state management and ownership verification logic, ensuring a performant and secure interface for high-volume digital asset browsing.",
    tags: ["Next.js", "Web3 API", "State Management"],
    url: "https://yiannis-internship.vercel.app/",
    image: "/Ultraverse.png",
  },
  {
    title: "QuickStay: Booking Logic Engine",
    description: "",
    detailedDescription: "A full-stack reservation engine emphasizing type-safe architecture and complex state synchronization. Built with React and TypeScript, it features a robust search algorithm and managed mock-API interactions to simulate enterprise booking lifecycles.",
    tags: ["TypeScript", "API Design", "SaaS"],
    url: "https://hotel-booking-project-28lm.vercel.app/",
    image: "/quickstay.png",
  },
  {
    title: "Firebase Auth & System Architecture (Netflix)",
    description: "",
    detailedDescription: "A deep dive into secure identity management and real-time database synchronization. I used this project to master Firebase Auth and Firestore, building a subscription-style interface with a focus on protected routing and secure user-session persistence.",
    tags: ["Firebase Auth", "Firestore", "React"],
    url: "https://netflix-clone-one-sigma-50.vercel.app/",
    image: "/netflix-clone.png",
  },
  {
    title: "Blinkin: API Integration & SPA Logic",
    description: "",
    detailedDescription: "An exploration of Single Page Application (SPA) architecture and third-party API consumption. This project focuses on efficient data fetching from the TMDB API, custom search filtering logic, and managing global state for user watchlists in a clean React environment.",
    tags: ["React", "API Integration", "State Management"],
    url: "https://blinkin-react.vercel.app/",
    image: "/blinkin.png",
  },
  {
    title: "Performance Research (Legacy Portfolio)",
    description: "",
    detailedDescription: "My initial project in the engineering space, focusing on the fundamentals of the Next.js framework. This served as a research platform for mastering responsive grid layouts and the performance implications of client-side animations.",
    tags: ["Next.js", "UX/UI", "Performance"],
    url: "https://yiannisportfolio.vercel.app/",
    image: "/oldfolio.png",
  },
];