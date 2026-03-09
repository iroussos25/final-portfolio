"use client";

import ProjectCard from "./components/ProjectCard";
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
              Full-Stack Software Engineer specializing in AI Orchestration & HealthTech Interoperability.
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white max-[480px]:text-[2rem] sm:text-5xl md:text-6xl">
              Giannis Roussos
            </h1>
            <p className="max-w-xl text-base text-white/70 sm:text-lg">
              Building resilient, clinical-grade systems with a &apos;zero-fail&apos; mindset forged in the Special Forces and ICU Nursing.
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
                Engineering Mission-Critical Systems
              </h2>
              <p className="mt-3 text-white/70">
                Currently based in North Carolina (US Citizen) and engineering AI-driven biometric interfaces and FHIR-compliant data systems. I am currently available for Full-Time Engineering roles or strategic technical partnerships. I can collaborate either as a W2 or 1099 contractor through my US-Based LLC!
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Recent</p>
              <p className="mt-3 text-white/70">
                Engineered a high-performance Next.js audio-delivery architecture, achieving a 38% increase in Lighthouse performance scores. By implementing advanced Server-Side Rendering (SSR) and custom asset-loading strategies, I reduced initial &apos;Time-to-Content&apos; by 1.2s, ensuring sub-second latency for enterprise-scale content distribution.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="reveal space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Approach</h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            I approach software as a unified system of code and human workflow. My background as a Special Forces Veteran and ICU Nurse allows me to architect full-stack solutions with a &apos;zero-fail&apos; mindset—prioritizing reliability and security in high-stakes environments. Today, I specialize in AI Agent Orchestration and HealthTech Interoperability, translating complex clinical requirements into resilient, production-grade code. I thrive at the intersection of cutting-edge technology and real-world impact, building tools that empower users and drive meaningful change.
            </p>
          </div>
          <div className="reveal delay-1 rounded-3xl border border-white/10 bg-white/5 p-5 text-white/70 sm:p-6">
            <p className="text-base uppercase tracking-[0.3em] text-white/50 sm:text-lg">
              Capabilities
            </p>
            <ul className="mt-4 grid gap-3 text-base leading-relaxed sm:text-lg">
              <li className="text-[#ffb457]">⚡ Full-Stack Development</li>
              <li>Next.js, React, TypeScript, Python, SQL & modern web frameworks</li>
              <li>Three.js, WebGL & interactive experiences</li>
              <li>Design systems & component libraries</li>
              
              <li className="text-[#ffb457] mt-2">🎯 System Architecture and Implementation</li>
              <li>Product vision, roadmapping & UX strategy</li>
              <li>Go-to-market planning & execution</li>
              <li>Stakeholder management & cross-functional leadership</li>
              
              <li className="text-[#ffb457] mt-2">📈 Technical Communication & Stakeholder Management</li>
              <li>Digital marketing campaigns & conversion optimization</li>
              <li>Sales strategy, pipeline management & client relations</li>
              <li>Brand development & story-driven content</li>
              
              <li className="text-[#ffb457] mt-2">🏥 Healthcare Expertise</li>
              <li>Clinical workflow optimization & compliance</li>
              <li>Healthcare Interoperability, FHIR/HL7, & Clinical Workflow Automation</li>
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
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.url} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
  );
}
