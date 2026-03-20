"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-16">
      <section className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        {/* Photo Section */}
        <div className="reveal">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/ME.jpg"
              alt="Giannis Roussos"
              width={600}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-6 reveal delay-1">
          <div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">About Me</h1>
            <div className="mt-2 h-1 w-24 rounded-full bg-linear-to-r from-[#f28c28] via-[#ffb457] to-[#2f5f9e]" />
          </div>

          <div className="space-y-4 text-white/70">
            <p>
              I&apos;m a <span className="font-semibold text-[#f28c28]">Full-Stack Software Engineer</span> with
              a passion for building useful tools that bridge the gap between Humans and Technology. I enjoy untangling complex problems—whether they’re in a clinical data pipeline or a messy codebase.
            </p>
            <p>
              My background is a bit unconventional: I spent years in <span className="font-semibold text-[#f28c28]">ICU Nursing</span> and the <span className="font-semibold text-[#f28c28]">Special Forces.</span> That experience taught me how to stay objective when things get chaotic and how to build systems that people can actually rely on when it matters most.
               </p>
            <p>
              These days, I&apos;m focused on <span className="font-semibold text-[#f28c28]">AI Orchestration and HealthTech interoperability.</span>  I build across frameworks and paradigms—recently re-architecting a full production Next.js clinical AI agent into Ruby on Rails in a single weekend. I like building tools that feel &apos;invisible&apos;—software that just works so humans can focus on the task at hand.
            </p>
            <p>
              When I&apos;m away from my desk, I&apos;m usually outdoors or attempting to play the guitar. I&apos;ve reached a &apos;production-grade&apos; level in TypeScript, but my acoustic skills are still very much <span className="font-semibold text-[#f28c28]">in beta.</span>  (Expect missed chords and high enthusiasm.)
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Background & Foundation</h2>
            <ul className="mt-4 space-y-3 text-white/70">
              <li><span className="font-semibold text-[#f28c28]">Clinical: </span>Registered Nurse (Multi-state) | HL7 FHIR & HIPAA Standards</li>
              <li><span className="font-semibold text-[#f28c28]">Operational: </span>Special Forces Leadership | High-Pressure Systems & Logic</li>
              <li><span className="font-semibold text-[#f28c28]">Strategic: </span>Project Lifecycle Management | Technical Sales Integration</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Core Toolkit</h2>
             <ul className="mt-4 space-y-3 text-white/70">
              <li><span className="font-semibold text-[#f28c28]">The Stack: </span>React, Next.js, TypeScript, Ruby on Rails, Node.js, PostgreSQL.</li>
              <li><span className="font-semibold text-[#f28c28]">Specializations: </span>AI Agent Orchestration (LangGraph), MediaPipe, HL7 FHIR R4.</li>
              <li><span className="font-semibold text-[#f28c28]">Infrastructure: </span>AWS (EC2/S3), CI/CD, HIPAA-compliant architecture.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
