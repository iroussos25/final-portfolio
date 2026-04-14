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
    title: "Anima Triage: Clinical Intake & Dashboard",
    description: "",
    detailedDescription: "Patient triage intake and clinician dashboard built on Angular 18 standalone components, AWS Lambda (TypeScript), and DynamoDB. Submissions are stored as HL7 FHIR R4 Bundles with SNOMED CT and LOINC-coded fields — not flat JSON — so data is immediately consumable by any EHR that speaks HL7 without a transformation layer. Full backend deployed via AWS SAM as IaC; 25 unit tests covering form validation, severity colour mapping, and status advancement logic.",
    tags: ["Angular", "AWS Lambda", "DynamoDB", "HL7 FHIR", "TypeScript", "Healthcare"],
    url: "https://anima-triage-demo.vercel.app/",
    image: "/Anima.png",
  },
  {
    title: "FHIR Pulse: Clinical Interoperability",
    description: "", 
    detailedDescription: "An interoperability dashboard that pulls HL7 FHIR R4 data through a Node.js middleware layer and visualizes patient vitals in real time. Custom schema validation and HIPAA-compliant data handling — built for clinical environments where stale or malformed data isn't an option.",
    tags: ["HL7 FHIR", "Node.js", "AWS", "Healthcare"],
    url: "https://fhir-dashboard-five.vercel.app/",
    image: "/icu-monitor.png",
  },
  {
    title: "PostHog FHIR Event Bridge",
    description: "", 
    detailedDescription: "TypeScript/Node.js bridge that fetches HL7 FHIR R4 Observation resources from a HAPI test server and forwards them to PostHog as structured analytics events with LOINC-coded schemas. Includes dry-run mode for validation before live dispatch - built because clinical data and product analytics should be able to talk to each other.",
    tags: ["HL7 FHIR", "TypeScript", "Node.js", "PostHog", "LOINC", "Healthcare"],
    url: "https://github.com/iroussos25/fhir-event-bridge",
    image: "/fhir_bridge_values.png",
  },
  {
    title: "Skinstric: AI Biometric Interface",
    description: "",
    detailedDescription: "AI-powered capture interface using MediaPipe for real-time 3D biometric landmark detection. The system checks image quality before accepting data — if the capture isn't clean enough, it gets rejected rather than feeding noise to the downstream model.",
    tags: ["MediaPipe", "Computer Vision", "TypeScript", "AI"],
    url: "https://skinstric-project-mu.vercel.app/",
    image: "/Skinstric1.png",
  },
  {
    title: "Summarist: AI SaaS Architecture",
    description: "",
    detailedDescription: "Full-stack SaaS platform that uses LLMs to generate content summaries. Built with Firebase Auth, a tiered Stripe subscription system, and an API layer designed to handle concurrent users without falling over.",
    tags: ["AI Orchestration", "Next.js", "Stripe", "PostgreSQL"],
    url: "https://yiannis-summarist.vercel.app/",
    image: "/summarist.png",
  },
  {
    title: "Enterprise API Governance & Security Sentinel",
    description: "",
    detailedDescription: "Python-based static analysis tool that enforces security rules on OpenAPI 3.0 specs. Plugs into GitHub Actions as a CI/CD gate — if your API spec uses insecure protocols or fails compliance checks, the build stops. Replaced a manual review process with something that catches problems before they ship.",
    tags: ["Python", "OpenAPI", "GitHub Actions", "CI/CD"],
    url: "https://github.com/iroussos25/prudential-linter",
    image: "/prudential_linter.png",
  },
  {
    title: "Interactive 3D Engine",
    description: "",
    detailedDescription: "3D visualization built with Three.js and WebGL. Custom shaders tuned to hold 60fps on mobile, with an API layer for generative asset creation — the kind of setup you'd use for interactive product configurators or digital twin rendering.",
    tags: ["Three.js", "WebGL", "API Architecture", "Generative UI"],
    url: "https://3js-swart-theta.vercel.app/",
    image: "/teestore.png",
  },
  {
    title: "Ultraverse: Asset Marketplace",
    description: "",
    detailedDescription: "Marketplace built with Next.js, connected to blockchain API endpoints for ownership verification. Focus was on getting the state management right so the UI stays snappy even when browsing large asset collections.",
    tags: ["Next.js", "Web3 API", "State Management"],
    url: "https://yiannis-ultraverse.vercel.app/",
    image: "/Ultraverse.png",
  },
  {
    title: "QuickStay: Booking Logic Engine",
    description: "",
    detailedDescription: "Full-stack booking system built with React and TypeScript. Search filtering, date-range availability logic, and mock-API integrations that simulate real reservation workflows end-to-end.",
    tags: ["TypeScript", "API Design", "SaaS"],
    url: "https://hotel-booking-project-28lm.vercel.app/",
    image: "/quickstay.png",
  },
  {
    title: "Firebase Auth & System Architecture (Netflix)",
    description: "",
    detailedDescription: "Built to get hands-on with Firebase Auth and Firestore. Protected routing, persistent user sessions, and real-time database sync — modeled after a streaming subscription platform.",
    tags: ["Firebase Auth", "Firestore", "React"],
    url: "https://netflix-clone-one-sigma-50.vercel.app/",
    image: "/netflix-clone.png",
  },
  {
    title: "Blinkin: API Integration & SPA Logic",
    description: "",
    detailedDescription: "SPA focused on clean API consumption patterns. Pulls from the TMDB API with efficient data fetching, custom search filters, and global state management for user watchlists.",
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