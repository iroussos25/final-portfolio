"use client";

import EcgTrace from "../components/EcgTrace";
import { useCalendly } from "../components/useCalendly";
import AuditForm from "./AuditForm";

const NAVY = "#0E1B2A";
const TEAL = "#2FB5A3";

const checks = [
  {
    n: "01",
    title: "What your site sends to third parties",
    body: "Tracking pixels sit on hundreds of provider websites. When one is on a page where a patient enters symptoms, requests an appointment, or fills in a condition-specific form, that data can leave your site. In 2024, OCR collected $9.9 million across 22 enforcement actions tied to website tracking. One health system settled related claims for $18 million.",
    note: "I read what your pages actually transmit and give you the list. I find it. You and your attorney evaluate the risk and tell me if you want it fixed.",
  },
  {
    n: "02",
    title: "Where patients drop out before booking",
    body: "63% of healthcare web traffic is mobile. 70% of patients who try to book online get routed to a phone call anyway. 61% skip appointments over scheduling hassle. At an average patient acquisition cost around $312, a booking flow that breaks on a phone is expensive every single day it stays broken.",
    note: "I walk your booking flow on a phone the way a patient would. I find the bug and get you back up and running in no time.",
  },
  {
    n: "03",
    title: "Whether your forms handle health information safely",
    body: "A contact form that emails a patient's description of their symptoms in plain text to a staff inbox is a disclosure. Most off-the-shelf form plugins do exactly that. No major advertising platform will sign a BAA, which means the convenient option is usually the non-compliant one.",
    note: "I test what your forms do with the information a patient types into them.",
  },
];

const reportContents = [
  "Every third-party script on your site, and which pages it loads on",
  "What each one transmits, in plain language",
  "The exact points where your booking flow breaks on mobile",
  "How your contact and intake forms handle what patients type",
  "What it would cost to fix each item, with nothing bundled",
];

// Sample report shown on the page. Representative of the format and the kind of finding,
// not taken from a client. Labelled as an example under the card — do not remove that
// line, and do not swap in real findings without redacting the practice.
const sampleFindings = [
  {
    severity: "High",
    title: "Meta Pixel on the appointment request page",
    detail: "Transmits the page URL on load and again on form submit.",
  },
  {
    severity: "High",
    title: "Booking form unusable on iPhone",
    detail: "Keyboard covers the submit button. No confirmation screen after sending.",
  },
  {
    severity: "Medium",
    title: "Session recording on two condition pages",
    detail: "Captures scroll and click behaviour on pages naming a specific diagnosis.",
  },
  {
    severity: "Low",
    title: "Contact form destination unclear",
    detail: "Submission leaves the site. Where it lands needs confirming internally.",
  },
];

const tiers = [
  { name: "48-Hour Rescue", price: "$1,200", body: "Triage, fix what's critical, redeployed in 48 hours." },
  { name: "The Rebuild", price: "$3,500", body: "A clean, fast, modern rebuild you won't have to rescue again." },
  { name: "Keep It Working", price: "$150/mo", body: "Updates, backups, monitoring, and two content edits a month." },
];

export default function ClinicsContent() {
  const { openCalendly } = useCalendly();

  return (
    <main className="w-full flex-1 text-white" style={{ background: NAVY }}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-14 sm:px-6 sm:py-16 md:gap-28 md:py-20">
        {/* 1. HERO */}
        <section className="reveal flex flex-col items-center gap-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] sm:text-xs sm:tracking-[0.4em]" style={{ color: TEAL }}>
            For Independent Practices &amp; Clinics
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] max-[480px]:text-[2.1rem] sm:text-6xl md:text-7xl">
            Is your practice website
            <br />
            sending patient data to{" "}
            <span style={{ color: TEAL }}>Facebook</span>?
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            I&apos;m an ICU nurse who became a software engineer. I&apos;ll check your site for free and tell you what
            it&apos;s sending, what it&apos;s leaking, and where you&apos;re losing patients before they ever book.
          </p>

          {/* Signature ECG motif */}
          <div className="w-full max-w-3xl py-2">
            <EcgTrace />
          </div>

          <AuditForm id="hero" />
          <p className="max-w-md text-xs leading-relaxed text-white/50">
            No sales call to get the report. You send a link, you get a written report. If you want it fixed, we talk
            then.{" "}
            <button onClick={openCalendly} className="underline underline-offset-4 transition hover:opacity-80">
              Or book a call instead.
            </button>
          </p>
        </section>

        {/* 2. THE THREE CHECKS */}
        <section className="space-y-10">
          <div className="reveal text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Three things I check</h2>
            <p className="mt-3 text-white/60">All three, free, before you pay me anything.</p>
          </div>
          {/* Row tracks live on the parent so the cards can share them via subgrid:
              number, heading, body, note. The body track is 1fr and absorbs the slack,
              which keeps every card's divider on the same line no matter how long the
              text above it runs. Below md the cards stack, so plain flex is enough. */}
          <div className="grid gap-6 md:grid-cols-3 md:grid-rows-[auto_auto_1fr_auto]">
            {checks.map((check, i) => (
              <div
                key={check.n}
                className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""} flex flex-col rounded-3xl border border-white/10 bg-white/4 p-6 sm:p-8 md:row-span-4 md:grid md:grid-rows-subgrid md:gap-0`}
              >
                <span className="text-3xl font-semibold" style={{ color: TEAL }}>
                  {check.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{check.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{check.body}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/50">{check.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WHAT THE REPORT CONTAINS, next to a sample of it */}
        <section className="space-y-10">
          <div className="reveal grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: TEAL }}>
                What you get
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                A written report in two business days
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Not a call. Not a pitch deck. Two pages you can forward to your practice manager, your attorney, or
                whoever built the site.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                If nothing&apos;s wrong, I say so and we&apos;re done.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {reportContents.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0" style={{ color: TEAL }} aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample report card, styled as the document itself */}
            <div>
              <div
                className="rounded-3xl border p-5 sm:p-7"
                style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Website Check <span className="rounded bg-white/20 px-2 text-white/20">Redacted</span> Family
                      Medicine
                    </p>
                    <p className="mt-1 text-xs text-white/40">4 findings · 2 need attention this week</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Page 1 of 2</p>
                </div>

                <ul className="mt-4 space-y-4">
                  {sampleFindings.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <span
                        className="mt-0.5 h-fit shrink-0 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                        style={
                          f.severity === "High"
                            ? { background: "rgba(239,88,88,0.15)", color: "#F08A8A" }
                            : f.severity === "Medium"
                              ? { background: "rgba(47,181,163,0.15)", color: TEAL }
                              : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }
                        }
                      >
                        {f.severity}
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-white/90">{f.title}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-white/50">{f.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/40">
                  Each finding continues on page 2 with the evidence, the page it appears on, and what fixing it
                  involves.
                </p>
              </div>
              <p className="mt-3 text-xs text-white/35">
                Example, to show the format. Findings are representative and not taken from a client.
              </p>
            </div>
          </div>
        </section>

        {/* 4. WHY ME — the honesty here is load-bearing, do not soften it */}
        <section className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why me</h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            I spent ten years as an ICU and emergency nurse across fifteen US hospital systems. Then I retrained as a
            software engineer and now build production software full time.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            I&apos;m not going to tell you I know how your front desk runs. I&apos;ve never worked in a private
            practice. What I do know is what protected health information looks like, and I can read what your website
            is doing with it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Most developers can do one of those. Most compliance consultants can do the other. There aren&apos;t many
            people doing both, and there are fewer still charging a flat fee to fix it in 48 hours.
          </p>
        </section>

        {/* 5. PRICING STRIP */}
        <section className="space-y-10">
          <div className="reveal text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">If you want it fixed</h2>
            <p className="mt-3 text-white/60">One flat fee. No hourly billing. No surprises.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""} rounded-3xl border border-white/10 bg-white/4 p-6 sm:p-8`}
              >
                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                <p className="mt-3 text-3xl font-semibold" style={{ color: TEAL }}>
                  {tier.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{tier.body}</p>
              </div>
            ))}
          </div>
          <p className="reveal text-center text-xs text-white/40">
            Full details and the AI Upgrade tier are on the{" "}
            <a href="/rescue" className="underline underline-offset-4 transition hover:opacity-80">
              main services page
            </a>
            .
          </p>
        </section>

        {/* 6. CLOSE */}
        <section className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">Free check. One URL. No call.</h2>
          <AuditForm id="close" />
        </section>

        {/* 7. FOOTER credential + sourcing */}
        <section className="border-t border-white/10 pt-10 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60">
            10 years in the ICU. Now I fix websites the same way. Triage, fix, verify.{" "}
            <span className="text-white/80">— Giannis Roussos</span>
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-xs leading-relaxed text-white/35">
            Enforcement figures from HHS Office for Civil Rights 2024 enforcement data. Booking and mobile-traffic
            figures from published healthcare scheduling research. This page describes a technical assessment. It is
            not legal advice and does not establish a compliance opinion.
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
