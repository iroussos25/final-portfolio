"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const TEAL = "#2FB5A3";

// Same EmailJS service and template the contact modal uses. send() (rather than
// sendForm()) maps this form's two fields onto the template's user_name/user_email/
// user_message variables, so nothing has to change in the EmailJS dashboard.
const EMAILJS_SERVICE = "service_grcodes";
const EMAILJS_TEMPLATE = "template_ca6dzam";
const EMAILJS_PUBLIC_KEY = "LjuZS-A8QUs3HDnbb";

export const FALLBACK_EMAIL = "grcodes@outlook.com";

type FormState = "idle" | "loading" | "success" | "error";

// Accepts what people actually type: "example.com", "www.example.com/contact",
// "https://example.com". Anything without a dot and a body on both sides is rejected.
function normalizeUrl(raw: string): string | null {
  const trimmed = raw.trim().replace(/\s+/g, "");
  if (!trimmed) return null;
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(withProtocol);
    if (!/^[^.]+\.[^.]{2,}/.test(parsed.hostname.replace(/^www\./, ""))) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

export default function AuditForm({ id }: { id: string }) {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const normalized = normalizeUrl(url);
    const trimmedEmail = email.trim();

    if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      e.currentTarget.reportValidity();
      setState("error");
      return;
    }

    setState("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          user_name: new URL(normalized).hostname.replace(/^www\./, ""),
          user_email: trimmedEmail,
          user_message: `FREE WEBSITE CHECK REQUEST (/clinics)\n\nSite: ${normalized}\nReply to: ${trimmedEmail}`,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setState("success");
      setUrl("");
      setEmail("");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        className="w-full max-w-xl rounded-2xl border p-6 text-center"
        style={{ borderColor: "rgba(47,181,163,0.5)", background: "rgba(47,181,163,0.08)" }}
      >
        <p className="text-base font-semibold text-white">Got it.</p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          Your report lands in your inbox within two business days. If it turns out nothing&apos;s wrong, I&apos;ll
          tell you that too.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={`${id}-url`} className="sr-only">
            Your website address
          </label>
          <input
            id={`${id}-url`}
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="yourpractice.com"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (state === "error") setState("idle");
            }}
            required
            className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/35 transition focus:border-[#2FB5A3] focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor={`${id}-email`} className="sr-only">
            Your email address
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === "error") setState("idle");
            }}
            required
            className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/35 transition focus:border-[#2FB5A3] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={state === "loading"}
          className="shrink-0 rounded-full px-7 py-3.5 text-sm font-semibold text-[#0E1B2A] transition hover:-translate-y-0.5 disabled:opacity-60"
          style={{ background: TEAL }}
        >
          {state === "loading" ? "Sending…" : "Check my site"}
        </button>
      </div>

      {state === "error" && (
        <p className="mt-3 text-xs leading-relaxed text-[#F08A8A]" role="alert">
          That didn&apos;t go through. Check the address and email, or send them straight to{" "}
          <a href={`mailto:${FALLBACK_EMAIL}`} className="underline underline-offset-4">
            {FALLBACK_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
