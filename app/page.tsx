"use client";

import ProjectCard from "./components/ProjectCard";
import TechStack from "./components/TechStack";
import { projects } from "./data/projects";
import { useContactModal } from "./context/ContactModalContext";

export default function Home() {
  const { openModal } = useContactModal();
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-6 py-16">
        <section className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div className="space-y-6 reveal">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              Digital designer + front-end developer
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Giannis Roussos
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Front-end developer and digital designer crafting bold, human
              experiences for modern teams.
            </p>
            <div className="flex flex-wrap gap-4">
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
          <div className="space-y-6 reveal delay-1">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Now</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Available for Spring 2026 work
              </h2>
              <p className="mt-3 text-white/70">
                Select partnerships, 6-12 week engagements, product strategy +
                full-stack execution.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Recent</p>
              <p className="mt-3 text-white/70">
                Led experience design for a fintech relaunch, lifting conversion
                by 38% and reducing onboarding time.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4 reveal">
            <h2 className="text-2xl font-semibold text-white">Approach</h2>
            <p className="text-white/70">
              I blend strategy, design systems, and prototyping to ship work that
              feels refined and scalable. Expect clear communication, fast
              iterations, and a focus on momentum.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70 reveal delay-1">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Capabilities
            </p>
            <ul className="mt-4 grid gap-3 text-sm">
              <li className="text-[#ffb457]">⚡ Full-Stack Development</li>
              <li>Next.js, React, TypeScript & modern web frameworks</li>
              <li>Three.js, WebGL & interactive experiences</li>
              <li>Design systems & component libraries</li>
              
              <li className="text-[#ffb457] mt-2">🎯 Product & Strategy</li>
              <li>Product vision, roadmapping & UX strategy</li>
              <li>Go-to-market planning & execution</li>
              <li>Stakeholder management & cross-functional leadership</li>
              
              <li className="text-[#ffb457] mt-2">📈 Sales & Marketing</li>
              <li>Digital marketing campaigns & conversion optimization</li>
              <li>Sales strategy, pipeline management & client relations</li>
              <li>Brand development & story-driven content</li>
              
              <li className="text-[#ffb457] mt-2">🏥 Healthcare Expertise</li>
              <li>Clinical workflow optimization & compliance</li>
              <li>Healthcare tech solutions & patient-centered design</li>
            </ul>
          </div>
        </section>

        <TechStack />

        <section id="projects" className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
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
