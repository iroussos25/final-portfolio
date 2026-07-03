"use client";

import EcgTrace from "../components/EcgTrace";
import { useCalendly } from "../components/useCalendly";

const NAVY = "#0E1B2A";
const TEAL = "#2FB5A3";

const packages = [
  {
    name: "48-Hour Rescue",
    price: "$1,200",
    intro: "Founding intro: $600 — first 3 clients only",
    tagline: "Your site is broken, slow, or embarrassing. I triage it, fix what's critical, and hand it back working — in 48 hours.",
    features: [
      "Bug, layout & broken-link fixes",
      "Mobile responsiveness pass",
      "Speed & performance tune-up",
      "Broken forms & contact restored",
      "Deployed and verified live",
    ],
    featured: true,
  },
  {
    name: "The Rebuild",
    price: "$3,500",
    intro: null,
    tagline: "Beyond patching? I rebuild it clean, fast, and modern — same content, new foundation you won't have to rescue again.",
    features: [
      "Modern rebuild (Next.js / React or Ruby on Rails)",
      "Mobile-first, from the ground up",
      "SEO & metadata essentials",
      "Contact forms & integrations",
      "Fast by default, built to last",
    ],
    featured: false,
  },
  {
    name: "AI Upgrade",
    price: "from $1,800",
    intro: null,
    tagline: "Add an AI layer that actually works — chat, content, or workflow automation, built to fail gracefully under load.",
    features: [
      "AI chat / assistant integration",
      "Content & copy generation",
      "Workflow automation",
      "Resilient multi-model fallbacks",
      "Wired into your existing site",
    ],
    featured: false,
  },
];

const steps = [
  {
    n: "01",
    title: "Free audit",
    body: "Send me your site. I run a triage pass and tell you exactly what's wrong and what it takes to fix — no charge, no obligation.",
  },
  {
    n: "02",
    title: "50% deposit — I fix in 48 hours",
    body: "You approve a flat fee and pay half up front. I go heads-down and fix it inside 48 hours. No scope creep, no surprise invoices.",
  },
  {
    n: "03",
    title: "You review, pay the balance",
    body: "I hand it back working and verified. You review it live. Happy? You pay the remaining balance. That's it.",
  },
];

export default function RescueContent() {
  const { openCalendly } = useCalendly();

  return (
    <main className="w-full flex-1 text-white" style={{ background: NAVY }}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-14 sm:px-6 sm:py-16 md:gap-28 md:py-20">
        {/* 1. HERO */}
        <section className="reveal flex flex-col items-center gap-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] sm:text-xs sm:tracking-[0.4em]" style={{ color: TEAL }}>
            Website Rescue — Flat Fee
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] max-[480px]:text-[2.1rem] sm:text-6xl md:text-7xl">
            Your website.
            <br />
            Fixed in <span style={{ color: TEAL }}>48 hours</span>.
            <br />
            Flat fee.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            10 years in the ICU. Now I fix websites the same way —{" "}
            <span className="font-semibold" style={{ color: TEAL }}>
              triage, fix, verify.
            </span>
          </p>

          {/* Signature ECG motif */}
          <div className="w-full max-w-3xl py-2">
            <EcgTrace />
          </div>

          <button
            onClick={openCalendly}
            className="rounded-full px-8 py-4 text-sm font-semibold text-[#0E1B2A] transition hover:-translate-y-0.5"
            style={{ background: TEAL }}
          >
            Book your free audit
          </button>
        </section>

        {/* 2. PACKAGES */}
        <section className="space-y-10">
          <div className="reveal text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Three ways in</h2>
            <p className="mt-3 text-white/60">One flat fee. No hourly billing. No surprises.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""} flex flex-col rounded-3xl border p-6 sm:p-8`}
                style={{
                  background: pkg.featured ? "rgba(47,181,163,0.08)" : "rgba(255,255,255,0.04)",
                  borderColor: pkg.featured ? "rgba(47,181,163,0.5)" : "rgba(255,255,255,0.1)",
                }}
              >
                {pkg.featured && (
                  <span
                    className="mb-4 inline-block w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E1B2A]"
                    style={{ background: TEAL }}
                  >
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold" style={{ color: TEAL }}>
                    {pkg.price}
                  </span>
                </div>
                {pkg.intro && (
                  <p className="mt-2 text-xs font-medium" style={{ color: TEAL }}>
                    {pkg.intro}
                  </p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-white/70">{pkg.tagline}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0" style={{ color: TEAL }} aria-hidden="true">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openCalendly}
                  className="mt-8 rounded-full border px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  style={{
                    background: pkg.featured ? TEAL : "transparent",
                    color: pkg.featured ? NAVY : "#ffffff",
                    borderColor: TEAL,
                  }}
                >
                  {pkg.featured ? "Start your rescue" : "Get started"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 3. HOW IT WORKS */}
        <section className="space-y-10">
          <div className="reveal text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
            <p className="mt-3 text-white/60">Triage, fix, verify — the same protocol I ran at the bedside.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""} rounded-3xl border border-white/10 bg-white/4 p-6 sm:p-8`}
              >
                <span className="text-3xl font-semibold" style={{ color: TEAL }}>
                  {step.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FOUNDING-CLIENT NOTE */}
        <section
          className="reveal rounded-3xl border p-8 text-center sm:p-10"
          style={{ borderColor: "rgba(47,181,163,0.4)", background: "rgba(47,181,163,0.06)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: TEAL }}>
            Founding Clients
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
            The first 3 clients get the 48-Hour Rescue at <span style={{ color: TEAL }}>$600</span> — half off.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            In exchange for an honest testimonial. I&apos;m building a track record; you get a fixed site at the
            founding price. Once the 3 spots are gone, it&apos;s $1,200.
          </p>
          <button
            onClick={openCalendly}
            className="mt-8 rounded-full px-8 py-4 text-sm font-semibold text-[#0E1B2A] transition hover:-translate-y-0.5"
            style={{ background: TEAL }}
          >
            Claim a founding spot
          </button>
        </section>

        {/* 5. CTA (repeated) */}
        <section className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
            Send me your site. I&apos;ll tell you what&apos;s wrong — free.
          </h2>
          <button
            onClick={openCalendly}
            className="rounded-full px-10 py-4 text-base font-semibold text-[#0E1B2A] transition hover:-translate-y-0.5"
            style={{ background: TEAL }}
          >
            Book your free audit
          </button>
        </section>

        {/* 6. FOOTER credential + portfolio link */}
        <section className="border-t border-white/10 pt-10 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60">
            10 years in the ICU. Now I fix websites the same way — triage, fix, verify.{" "}
            <span className="text-white/80">— Giannis Roussos</span>
          </p>
          <a
            href="https://giannisroussos.dev"
            className="mt-5 inline-block text-sm font-semibold transition hover:opacity-80"
            style={{ color: TEAL }}
          >
            See my engineering work → giannisroussos.dev
          </a>
        </section>
      </div>
    </main>
  );
}
