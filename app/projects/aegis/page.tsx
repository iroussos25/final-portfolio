"use client";

import Link from "next/link";

export default function AegisCaseStudy() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-14 px-4 py-10 sm:gap-16 sm:px-6 sm:py-14 md:gap-20 md:py-16">
      {/* Breadcrumb */}
      <div className="reveal">
        <Link
          href="/#projects"
          className="text-sm text-white/50 transition hover:text-[#f28c28]"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="reveal space-y-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#f28c28]">
          Architecture Case Study
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
          Aegis AI: Clinical Decision Support
        </h1>
        <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg leading-relaxed">
          A comparative engineering study benchmarking{" "}
          <span className="font-semibold text-[#f28c28]">
            edge-latency orchestration
          </span>{" "}
          (Next.js) against{" "}
          <span className="font-semibold text-[#f28c28]">
            stateful persistence
          </span>{" "}
          (Ruby on Rails) for AI-driven clinical decision support in high-acuity
          environments.
        </p>
        <a
          href="https://github.com/iroussos25/aegis-project"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-[#3b63a3] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#6f9ad6]"
        >
          View Monorepo on GitHub
        </a>
      </section>

      {/* The Story */}
      <section className="reveal space-y-6">
        <h2 className="text-3xl font-semibold text-white">
          The Engineering Story
        </h2>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 space-y-4 text-white/70 leading-relaxed">
          <p>
            Aegis began as a production-grade{" "}
            <span className="font-semibold text-white">
              Next.js clinical AI agent
            </span>{" "}
            — a streaming, edge-optimized platform designed for real-time
            bedside decision support. It featured a multi-model fallback
            &ldquo;waterfall&rdquo; (Gemini 2.5 Flash → Flash Lite → Gemma 3),
            RAG via Supabase pgvector, and live FHIR R4 data ingestion.
          </p>
          <p>
            Then I asked a harder question:{" "}
            <span className="italic text-[#ffb457]">
              &ldquo;What happens when the priority shifts from speed-to-screen
              to long-term data integrity?&rdquo;
            </span>
          </p>
          <p>
            I{" "}
            <span className="font-semibold text-[#f28c28]">
              re-architected the entire system as a Ruby on Rails application
            </span>{" "}
            — not a surface-level port, but a ground-up rethinking of how
            clinical data flows through the stack. The Rails version replaces
            edge functions with server-side service objects, swaps Supabase for a
            persistent PostgreSQL schema optimized for relational clinical
            mapping, and introduces background workers (ActiveJob/Sidekiq) for
            asynchronous FHIR synchronization and a persistent audit trail.
          </p>
          <p>
            The result is a dual-platform benchmark that evaluates the real-world
            trade-offs between these two architectural paradigms in a high-stakes
            clinical context.{" "}
            <span className="font-semibold text-[#f28c28]">
              The full re-architecture — from concept to deployed Rails
              application — was completed in a single weekend
            </span>
            , validating full-stack fluency across two fundamentally different
            frameworks and deployment paradigms.
          </p>
        </div>
      </section>

      {/* Side-by-side Comparison */}
      <section className="space-y-8">
        <div className="reveal text-center">
          <h2 className="text-3xl font-semibold text-white">
            Architecture Comparison
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">
            Edge-Latency vs. Stateful Persistence
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Next.js */}
          <div className="reveal rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 space-y-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f28c28]">
                Implementation A — Original
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Aegis AI — Next.js 14
              </h3>
              <p className="mt-1 text-sm text-white/50">
                Edge-Latency Optimized
              </p>
            </div>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <span className="font-semibold text-white">Framework:</span>{" "}
                Next.js 14 (App Router)
              </li>
              <li>
                <span className="font-semibold text-white">Deployment:</span>{" "}
                Vercel Edge Functions
              </li>
              <li>
                <span className="font-semibold text-white">Vector Store:</span>{" "}
                Supabase pgvector + ANN search
              </li>
              <li>
                <span className="font-semibold text-white">
                  State Pattern:
                </span>{" "}
                Micro-hook composition ({`useClinicalWorkbench`})
              </li>
              <li>
                <span className="font-semibold text-white">
                  AI Streaming:
                </span>{" "}
                Real-time SSE with sub-2s TTFT
              </li>
              <li>
                <span className="font-semibold text-white">
                  Rate Limiting:
                </span>{" "}
                Upstash Redis (sliding-window) + in-memory token bucket fallback
              </li>
              <li>
                <span className="font-semibold text-white">Validation:</span>{" "}
                Zod schema on all API boundaries
              </li>
            </ul>

            <p className="text-sm text-white/50 italic">
              Best for: Real-time bedside analysis and mobile-first clinical
              interfaces.
            </p>

            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.15em]">
              {[
                "Next.js",
                "TypeScript",
                "Supabase",
                "Vercel",
                "Zod",
                "Tailwind",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#2f5f9e]/70 bg-[#0d1b33]/70 px-3 py-1 text-[#c6d9f5]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://aegis-ai-cds.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#f28c28] px-5 py-2 text-xs font-semibold text-black transition hover:bg-[#ffb457]"
              >
                Live Demo →
              </a>
              <a
                href="https://github.com/iroussos25/aegis_ai_cds"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#3b63a3] px-5 py-2 text-xs font-semibold text-white transition hover:border-[#6f9ad6]"
              >
                Source Code
              </a>
            </div>
          </div>

          {/* Rails */}
          <div className="reveal delay-1 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 space-y-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#cc0000]">
                Implementation B — Re-Architected
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Aegis on Rails — Ruby on Rails 7
              </h3>
              <p className="mt-1 text-sm text-white/50">
                Stateful Persistence
              </p>
            </div>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <span className="font-semibold text-white">Framework:</span>{" "}
                Ruby on Rails 7 (API-First)
              </li>
              <li>
                <span className="font-semibold text-white">Deployment:</span>{" "}
                Fly.io (Docker)
              </li>
              <li>
                <span className="font-semibold text-white">Database:</span>{" "}
                PostgreSQL (relational clinical mapping)
              </li>
              <li>
                <span className="font-semibold text-white">
                  State Pattern:
                </span>{" "}
                Server-side service objects
              </li>
              <li>
                <span className="font-semibold text-white">
                  Background Jobs:
                </span>{" "}
                ActiveJob / Sidekiq for FHIR sync
              </li>
              <li>
                <span className="font-semibold text-white">FHIR Sync:</span>{" "}
                Asynchronous data ingestion & flattening into relational tables
              </li>
              <li>
                <span className="font-semibold text-white">Audit Trail:</span>{" "}
                Persistent insight-to-source mapping with foreign key references
              </li>
            </ul>

            <p className="text-sm text-white/50 italic">
              Best for: Comprehensive patient history tracking and retrospective
              clinical auditing.
            </p>

            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.15em]">
              {[
                "Rails 7",
                "Ruby",
                "PostgreSQL",
                "Sidekiq",
                "Fly.io",
                "Docker",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#2f5f9e]/70 bg-[#0d1b33]/70 px-3 py-1 text-[#c6d9f5]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://ai-clin-cds-rails.fly.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#f28c28] px-5 py-2 text-xs font-semibold text-black transition hover:bg-[#ffb457]"
              >
                Live Demo →
              </a>
              <a
                href="https://github.com/iroussos25/ai-clin-cds-rails"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#3b63a3] px-5 py-2 text-xs font-semibold text-white transition hover:border-[#6f9ad6]"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Benchmark */}
      <section className="space-y-8">
        <div className="reveal text-center">
          <h2 className="text-3xl font-semibold text-white">
            Performance Benchmark
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">
            Measured across identical clinical scenarios
          </p>
        </div>

        {/* Summary Stats */}
        <div className="reveal grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Clinical Scenarios", value: "5" },
            { label: "Total Runs", value: "20" },
            { label: "Success Rate", value: "100%" },
            { label: "Model Tiers Tested", value: "3" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <p className="text-2xl font-semibold text-[#f28c28]">
                {stat.value}
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Per-Scenario Benchmark Table */}
        <div className="reveal overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Clinical Scenario
                </th>
                <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f28c28]">
                  Next.js Latency
                </th>
                <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#cc0000]">
                  Rails Latency
                </th>
                <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Rails Citations
                </th>
                <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Winner
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              {[
                {
                  scenario: "Sepsis — Elevated Lactate",
                  nextMs: 9491,
                  railsMs: 8197,
                  railsCitations: 14,
                  winner: "rails",
                },
                {
                  scenario: "ARDS — Severe Hypoxemia",
                  nextMs: 9480,
                  railsMs: 11696,
                  railsCitations: 14,
                  winner: "next",
                },
                {
                  scenario: "AKI — Post-Sepsis",
                  nextMs: 1304,
                  railsMs: 1833,
                  railsCitations: 15.5,
                  winner: "next",
                },
                {
                  scenario: "Cardiogenic Shock — Post-MI",
                  nextMs: 1194,
                  railsMs: 1334,
                  railsCitations: 9.5,
                  winner: "next",
                },
                {
                  scenario: "Post-Op Delirium",
                  nextMs: 2606,
                  railsMs: 3153,
                  railsCitations: 23.5,
                  winner: "next",
                },
              ].map((row) => {
                const maxMs = Math.max(row.nextMs, row.railsMs);
                return (
                  <tr
                    key={row.scenario}
                    className="border-b border-white/5 transition hover:bg-white/5"
                  >
                    <td className="px-5 py-4 font-semibold text-white">
                      {row.scenario}
                    </td>
                    <td className="px-5 py-4">
                      <span className="font-medium text-[#f28c28]">
                        {(row.nextMs / 1000).toFixed(1)}s
                      </span>
                      <div className="mt-2 h-1.5 w-full max-w-[120px] rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#f28c28] transition-all duration-700"
                          style={{
                            width: `${(row.nextMs / maxMs) * 100}%`,
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="font-medium text-[#e67373]">
                        {(row.railsMs / 1000).toFixed(1)}s
                      </span>
                      <div className="mt-2 h-1.5 w-full max-w-[120px] rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#cc0000] transition-all duration-700"
                          style={{
                            width: `${(row.railsMs / maxMs) * 100}%`,
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-5 py-4 text-center text-white/60">
                      {row.railsCitations} avg
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${
                          row.winner === "next"
                            ? "border border-[#f28c28]/30 bg-[#f28c28]/10 text-[#f28c28]"
                            : "border border-[#cc0000]/30 bg-[#cc0000]/10 text-[#e67373]"
                        }`}
                      >
                        {row.winner === "next" ? "Next.js" : "Rails"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Cost & Token Comparison */}
        <div className="reveal grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-[#f28c28]">
              Inference Cost (10 runs)
            </h3>
            <div className="mt-4 flex items-end gap-6">
              <div>
                <p className="text-3xl font-semibold text-[#f28c28]">
                  $0.000070
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Next.js Total
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[#e67373]">
                  $0.000087
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Rails Total
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/50">
              Both platforms operate at sub-cent cost per clinical analysis.
              Rails runs ~24% higher due to richer citation generation.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-[#f28c28]">
              Model Waterfall Coverage
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f28c28]" />
                <span className="font-semibold text-white">
                  Gemini 2.5 Flash
                </span>{" "}
                — Primary reasoning (both)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ffb457]" />
                <span className="font-semibold text-white">
                  Flash Lite
                </span>{" "}
                — Speed specialist (both)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#2f5f9e]" />
                <span className="font-semibold text-white">
                  Gemma 3 (4B)
                </span>{" "}
                — Privacy fallback (Next.js only)
              </li>
            </ul>
            <p className="mt-3 text-xs text-white/50">
              Next.js exercised all 3 tiers during testing. Rails triggered 2 of
              3 — the Gemma fallback was not needed.
            </p>
          </div>
        </div>

        {/* Evidence Attribution callout */}
        <div className="reveal rounded-3xl border border-[#2f5f9e]/30 bg-[#2f5f9e]/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 text-2xl" aria-hidden="true">📋</span>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#6f9ad6]">
                Evidence Attribution: A Key Differentiator
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                The Rails implementation generated{" "}
                <span className="font-semibold text-white">
                  9.5 to 23.5 evidence citations per scenario
                </span>
                , mapping each AI claim to specific FHIR resource IDs in the
                patient record. The Next.js version reported 0 inline citations
                in this benchmark run — its XAI attribution operates through a
                separate source-tracing panel rather than inline tags. This
                reflects a fundamental architectural divergence:{" "}
                <span className="italic text-[#ffb457]">
                  Rails prioritizes persistent auditability, while Next.js
                  prioritizes streaming speed with deferred attribution.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* UX Observation callout */}
        <div className="reveal rounded-3xl border border-[#f28c28]/20 bg-[#f28c28]/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 text-2xl" aria-hidden="true">🧪</span>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#f28c28]">
                Field Observation: Perceived UX vs. Raw Metrics
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                The benchmark data tells one story — Next.js wins 4 of 5
                scenarios on raw latency. But hands-on testing revealed
                something more nuanced. The Rails application&apos;s initial page
                load{" "}
                <span className="font-semibold text-white">
                  felt perceptibly faster
                </span>{" "}
                (the VM serves a fully server-rendered page in one trip), and it{" "}
                <span className="font-semibold text-white">
                  won the Sepsis scenario outright at 8.2s vs 9.5s
                </span>
                . Meanwhile, the Next.js streaming SSE architecture pushes
                tokens to the screen as they generate, creating a
                &ldquo;typewriter&rdquo; effect that gives the clinician{" "}
                <span className="font-semibold text-white">
                  immediate perceived feedback
                </span>{" "}
                even before the full response completes.
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                The takeaway:{" "}
                <span className="italic text-[#ffb457]">
                  raw latency metrics don&apos;t capture the full clinical UX
                  picture.
                </span>{" "}
                Streaming vs. buffered delivery, citation density, and
                geographic proximity to edge nodes vs. VM regions all shape how
                &ldquo;fast&rdquo; a system feels to the clinician at the
                bedside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Technical Pillars */}
      <section className="reveal space-y-6">
        <h2 className="text-3xl font-semibold text-white">
          Shared Technical Pillars
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-[#f28c28]">
              Clinical Reasoning Engine
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Codifying ICU/ER nursing logic into multi-tier model fallback
              chains (Gemini 2.5 Flash → Flash Lite → Gemma 3). Achieved 100%
              uptime across 429/503 API error states via automated failover.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-[#f28c28]">
              FHIR Normalization
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Proprietary mapping layers that transform nested FHIR R4 JSON into
              token-efficient, high-signal schemas for LLM consumption. Direct
              integration with HAPI R4 servers for Patient, Observation, and
              Condition resources.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-[#f28c28]">
              Explainable AI (XAI)
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Direct source attribution logic mapping every AI claim back to
              specific ResourceID points in the patient record. Ensures full
              clinical auditability and transparency.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-[#f28c28]">
              System Resilience
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Multi-tier rate limiting, strict schema validation across all API
              boundaries, and standardized clinical error reporting with
              structured JSON logging for full system traceability.
            </p>
          </div>
        </div>
      </section>

      {/* Recruiter Kit */}
      <section className="reveal space-y-6">
        <h2 className="text-3xl font-semibold text-white">
          Recruiter & Interview Kit
        </h2>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-sm text-white/50 uppercase tracking-[0.2em] mb-4">
            Designed for rapid evaluation
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <span className="font-semibold text-[#f28c28]">
                One-Click Demos:
              </span>{" "}
              Pre-loaded clinical scenarios (Sepsis, CHF, Delirium) across both
              platforms.
            </li>
            <li>
              <span className="font-semibold text-[#f28c28]">
                Guided Walkthroughs:
              </span>{" "}
              Step-by-step overlays to demonstrate how AI maps raw FHIR data
              into clinical insights.
            </li>
            <li>
              <span className="font-semibold text-[#f28c28]">
                LLMOps Dashboard:
              </span>{" "}
              Real-time visibility into inference costs ($0.0000078 avg), TTFT,
              and semantic consistency metrics.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal text-center space-y-6">
        <div className="rounded-3xl border border-[#f28c28]/20 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Explore the Full Repository
          </h2>
          <p className="mt-3 text-white/60">
            The Aegis monorepo contains both implementations as Git submodules,
            with the complete benchmarking strategy and deployment analysis.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/iroussos25/aegis-project"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#f28c28] px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#ffb457]"
            >
              View on GitHub →
            </a>
            <Link
              href="/#projects"
              className="rounded-full border border-[#3b63a3] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#6f9ad6]"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
