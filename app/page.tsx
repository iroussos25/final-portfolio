"use client";

import ProjectCard from "./components/ProjectCard";
import FeaturedProjectCard from "./components/FeaturedProjectCard";
import TechStack from "./components/TechStack";
import { projects } from "./data/projects";
import { useContactModal } from "./context/ContactModalContext";

export default function Home() {
  const { openModal } = useContactModal();
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-14 px-4 py-10 sm:gap-16 sm:px-6 sm:py-14 md:gap-20 md:py-16">
        <section className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center md:gap-10">
          <div className="reveal flex flex-col items-center space-y-5 text-center md:items-start md:space-y-6 md:text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 sm:text-xs sm:tracking-[0.4em]">
              Full-Stack Software Engineer specializing in AI Orchestration & Complex Systems.
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white max-[480px]:text-[2rem] sm:text-5xl md:text-6xl">
              Giannis Roussos
            </h1>
            <p className="max-w-xl text-base text-white/70 sm:text-lg">
              I build software the way I trained in Special Forces and ICU Nursing — assuming someone&apos;s depending on it right now.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-[#f28c28] px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#ffb457]"
              >
                View Projects
              </a>
              <button
                onClick={openModal}
                className="rounded-full border border-[#3b63a3] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#6f9ad6]"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="reveal delay-1 w-full max-w-xl justify-self-center space-y-5 md:max-w-none md:space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Now</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Frontier Model Evaluation
              </h2>
              <p className="mt-3 text-white/70">
                I evaluate and train frontier models for three of the industry&apos;s leading AI labs (via Alignerr, Micro1, and Mercor) — designing long-horizon evaluation tasks, grading outputs across technical and content-quality axes, and stress-testing pre-release coding models in agentic environments.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Building</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                What I&apos;m Working On
              </h2>
              <p className="mt-3 text-white/70">
                Based in North Carolina (US Citizen). I build AI-powered systems for high-stakes environments — resilient multi-model orchestration, graceful degradation under load, and healthcare interoperability (FHIR/HL7). The kind of software that has to work at 3AM when someone&apos;s depending on it.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Recent</p>
              <p className="mt-3 text-white/70">
                Built an AI agent with a multi-model fallback chain (Gemini/Gemma) — if one model hits a 429 or 503, the next picks up automatically, holding sub-2-second responses under load. Then I rebuilt the whole thing in Ruby on Rails over a weekend to compare a stateful architecture against the edge-optimized original. Its proving ground: acute clinical care, where slow or wrong isn&apos;t an option.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="reveal space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Approach</h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            I build software for the person using it under pressure — not just to pass a test suite. Special Forces and ICU nursing trained me to assume things will go wrong and build accordingly. My focus is AI orchestration and resilient systems: multi-model fallbacks, graceful degradation, and interoperability work — like FHIR/HL7 in healthcare — that turns messy real-world requirements into code that holds up when it counts.
            </p>
          </div>
          <div className="reveal delay-1 rounded-3xl border border-white/10 bg-white/5 p-5 text-white/70 sm:p-6">
            <p className="text-base uppercase tracking-[0.3em] text-white/50 sm:text-lg">
              Capabilities
            </p>
            <ul className="mt-4 grid gap-3 text-base leading-relaxed sm:text-lg">
              <li className="text-[#ffb457]">⚡ Full-Stack & AI Engineering</li>
              <li>Next.js 15, TypeScript, Ruby on Rails, Python, SQL </li>
              <li><span className="font-semibold text-[#f28c28]">LLMOps: </span> Multi-model orchestration & automated fallback systems</li>
              <li><span className="font-semibold text-[#f28c28]">RAG: </span> Vector database architecture (Supabase pgvector) and semantic search</li>
              <li>Three.js, WebGL & interactive experiences</li>
              <li>Design systems & component libraries</li>
              
              <li className="text-[#ffb457] mt-2">🎯 System Architecture and Implementation</li>
              <li><span className="font-semibold text-[#f28c28]">Resilient Infrastructure: </span> 429/503 error handling & graceful degradation</li>
              <li><span className="font-semibold text-[#f28c28]">Cross-Framework Fluency: </span> Re-architected a production Next.js agent to Ruby on Rails in a weekend</li>
              <li>Product vision, roadmapping & UX strategy</li>
              <li>Go-to-market planning & execution</li>
              <li>Stakeholder management & cross-functional leadership</li>
              
              <li className="text-[#ffb457] mt-2">📈 Technical Communication & Stakeholder Management</li>
              <li>Digital marketing campaigns & conversion optimization</li>
              <li>Sales strategy, pipeline management & client relations</li>
              <li>Brand development & story-driven content</li>
              
              <li className="text-[#ffb457] mt-2">🏥 Healthcare Expertise</li>
              <li>Clinical workflow optimization & compliance</li>
              <li><span className="font-semibold text-[#f28c28]">Healthcare Interoperability: </span> FHIR R4 / HL7 integration and clinical data synthesis</li>
              <li>ICU and ER Registered Nurse with a decade of experience</li>
            </ul>
          </div>
        </section>

        <TechStack />

        <section id="projects" className="space-y-8">
          <div className="flex flex-wrap items-end justify-center gap-4 text-center md:justify-between md:text-left">
            <h2 className="text-3xl font-semibold text-white">Selected Projects</h2>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              2023 - 2026
            </p>
          </div>
          <FeaturedProjectCard />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.url} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
  );
}
