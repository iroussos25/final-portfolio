"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function FeaturedProjectCard() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <article
      className="reveal relative overflow-hidden rounded-3xl border border-[#f28c28]/30 bg-white/5 transition hover:border-[#f28c28]/60 hover:shadow-[0_18px_60px_-40px_rgba(242,140,40,0.5)]"
      style={{
        backgroundImage: isLight
          ? `linear-gradient(135deg, rgba(245, 247, 250, 0.96), rgba(232, 236, 243, 0.92), rgba(245, 247, 250, 0.96)), url(/clinical_doc_analyst.png)`
          : `linear-gradient(135deg, rgba(6, 11, 26, 0.94), rgba(6, 11, 26, 0.85), rgba(6, 11, 26, 0.94)), url(/clinical_doc_analyst.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Label bar */}
      <div className="relative z-10 flex items-center justify-between bg-linear-to-r from-[#f28c28] to-[#ffb457] border-b border-[#ffb457] px-6 py-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/70">
          Architecture Case Study
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/50">
          Featured Project
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
        {/* Left: Narrative */}
        <div className="flex flex-col justify-center space-y-5">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Aegis AI: Clinical Decision Support
            </h3>
            <p className="mt-2 text-sm text-white/50 uppercase tracking-[0.2em]">
              Re-architected from Next.js to Ruby on Rails
            </p>
          </div>

          <p className="text-base text-white/70 leading-relaxed">
            A comparative engineering study. I took my production Next.js
            clinical AI agent and{" "}
            <span className="font-semibold text-[#f28c28]">
              re-architected it as a full Ruby on Rails application
            </span>{" "}
            — benchmarking edge-latency orchestration against stateful
            persistence in a high-acuity clinical context.
          </p>

          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
            {["LLMOps", "FHIR R4", "RAG", "PostgreSQL", "XAI", "CI/CD"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#2f5f9e]/70 bg-[#0d1b33]/70 px-3 py-1 text-[#c6d9f5]"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* Benchmark teaser */}
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-[#f28c28]">100%</p>
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                Success Rate
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-[#f28c28]">4.8s</p>
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                Avg Latency
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-[#f28c28]">$0.00007</p>
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                Total / 10 Runs
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects/aegis"
              className="rounded-full bg-[#f28c28] px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#ffb457]"
            >
              View Case Study →
            </Link>
            <a
              href="https://github.com/iroussos25/aegis-project"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#3b63a3] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#6f9ad6]"
            >
              GitHub Monorepo
            </a>
          </div>
        </div>

        {/* Right: Architecture split */}
        <div className="flex flex-col gap-4">
          {/* Next.js card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#f28c28]/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f28c28]">
                  Original
                </p>
                <h4 className="mt-1 text-lg font-semibold text-white">
                  Aegis AI — Next.js 14
                </h4>
              </div>
              <span className="text-2xl" aria-hidden="true">⚡</span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Edge-latency optimized. Vercel Edge Functions, Supabase pgvector
              RAG, streaming AI with sub-2s TTFT.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] uppercase tracking-[0.15em] text-white/40">
              {["Next.js", "TypeScript", "Supabase", "Vercel"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://aegis-ai-cds.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs font-semibold text-[#f28c28] transition hover:text-[#ffb457]"
            >
              Live Demo →
            </a>
          </div>

          {/* Rails card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#f28c28]/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#cc0000]">
                  Re-Architected
                </p>
                <h4 className="mt-1 text-lg font-semibold text-white">
                  Aegis on Rails — Ruby on Rails 7
                </h4>
              </div>
              <span className="text-2xl" aria-hidden="true">🛤️</span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Stateful persistence. PostgreSQL backend, ActiveJob/Sidekiq
              workers, server-side AI orchestration with persistent audit trail.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] uppercase tracking-[0.15em] text-white/40">
              {["Rails 7", "Ruby", "PostgreSQL", "Fly.io"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://ai-clin-cds-rails.fly.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs font-semibold text-[#f28c28] transition hover:text-[#ffb457]"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
