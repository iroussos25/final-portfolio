"use client";

import { useEffect, useRef, useState } from "react";
import { HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import emailjs from "@emailjs/browser";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  returnTo: string;
};

export default function ContactModal({ isOpen, onClose, returnTo }: ContactModalProps) {
  const router = useRouter();
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [isActive, setIsActive] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const isMobileViewport = () => window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    if (!isOpen) return;
    const frame = requestAnimationFrame(() => setIsActive(true));
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isMobileViewport()) return;
    const timeout = setTimeout(() => {
      nameInputRef.current?.focus();
      nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }, 250);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const trimmedName = formData.user_name.trim();
    const trimmedEmail = formData.user_email.trim();
    const trimmedMessage = formData.user_message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName || !trimmedEmail || !trimmedMessage || !emailPattern.test(trimmedEmail)) {
      form.reportValidity();
      return;
    }

    setFormState("loading");

    try {
      await emailjs.sendForm(
        'service_grcodes',
        'template_ca6dzam',
        form,
        'LjuZS-A8QUs3HDnbb'
      );
      setFormState("success");
      setTimeout(() => {
        setFormState("idle");
        setFormData({ user_name: "", user_email: "", user_message: "" });
        closeModalWithCallback(() => {
          if (returnTo) {
            router.replace(returnTo);
          }
        });
      }, 1400);
    } catch {
      setFormState("idle");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at grcodes@outlook.com"
      );
    }
  };

  const closeModal = () => {
    setIsActive(false);
    setTimeout(onClose, 400);
  };

  const closeModalWithCallback = (afterClose: () => void) => {
    setIsActive(false);
    setTimeout(() => {
      onClose();
      afterClose();
    }, 400);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFieldFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!isMobileViewport()) return;
    const focusedElement = e.currentTarget;
    requestAnimationFrame(() => {
      focusedElement?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 backdrop-blur-sm sm:p-3 md:p-4"
      onClick={closeModal}
    >
      <div
        className="modal-shell relative flex h-[calc(100dvh-1rem)] max-h-[calc(100dvh-1rem)] w-full max-w-[min(42rem,100%)] flex-col overflow-hidden rounded-2xl shadow-2xl sm:h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-1.5rem)] md:h-[90vh] md:max-h-[90vh] md:w-[95vw] md:max-w-7xl md:flex-row md:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Left Half - About */}
        <div
          className={`modal-half-left theme-card flex h-[42%] min-h-0 w-full flex-col gap-6 overflow-y-auto border-b p-6 transition-transform duration-700 md:h-full md:w-1/2 md:border-b-0 md:border-r md:p-8 ${
            isActive ? "translate-y-0 md:translate-x-0" : "-translate-y-full md:translate-y-0 md:-translate-x-full"
          }`}
        >
          <div className="space-y-4">
            <h3 className="theme-text-bright text-3xl font-semibold">
              Here&apos;s a bit <span className="text-[#f28c28]">about me</span>
            </h3>
            <h4 className="theme-text text-lg font-medium">Full-Stack Software Engineer</h4>
            <div className="theme-text space-y-4 text-sm leading-relaxed">
              <p>
                I&apos;m a <span className="font-semibold text-[#f28c28]">Full-Stack Software Engineer</span> with
                a passion for building useful tools that bridge the gap between Humans and Technology.
              </p>
              <p>
                I have experience in Healtchcare (RN), Sales and Management. I have a{" "}
                <span className="font-semibold text-[#f28c28]">passion for learning new skills and technologies</span>,
                and I&apos;m always looking to improve my craft.
              </p>
              <p>
                I love to{" "}
                <span className="font-semibold text-[#f28c28]">
                  create clean, efficient, and user-friendly interfaces
                </span>{" "}
                that make people&apos;s lives easier.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, reading tech blogs, or playing
                video games.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="theme-text-bright text-xl font-semibold">Tech Stack</h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { name: "HTML", icon: SiHtml5, color: "#E34F26" },
                { name: "CSS", icon: SiCss3, color: "#1572B6" },
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, color: "#f28c28" },
                { name: "Redux", icon: SiRedux, color: "#764ABC" },
              ].map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="theme-card tech-tile group flex items-center justify-center rounded-xl border p-3 text-center transition hover:-translate-y-1"
                    style={{ "--tech-color": tech.color } as React.CSSProperties}
                    title={tech.name}
                  >
                    <Icon
                      className="tech-icon h-6 w-6 transition-all duration-300 group-hover:scale-110"
                      style={{ color: "rgba(255, 255, 255, 0.85)" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Half - Contact Form */}
        <div
          className={`modal-half-right theme-card relative flex h-[58%] min-h-0 w-full flex-col gap-6 overflow-y-auto p-6 pb-8 transition-transform duration-700 md:h-full md:w-1/2 md:p-8 ${
            isActive ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"
          }`}
        >
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#f28c28] hover:bg-white/5 md:right-6 md:top-6"
            aria-label="Close modal"
          >
            <HiX className="h-5 w-5 text-white/80" />
          </button>

          <div className="space-y-4 pt-8 md:pt-0">
            <h3 className="theme-text-bright text-3xl font-semibold">Let&apos;s have a chat!</h3>
            <h4 className="theme-text text-lg">
              I&apos;m currently open to new opportunities and collaborations.
            </h4>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6">
            <div className="space-y-2">
              <label htmlFor="user_name" className="theme-text-bright text-sm font-medium">
                Name
              </label>
              <input
                ref={nameInputRef}
                id="user_name"
                name="user_name"
                type="text"
                value={formData.user_name}
                onChange={handleChange}
                onFocus={handleFieldFocus}
                required
                minLength={2}
                pattern=".*\\S.*"
                title="Please enter your name"
                className="theme-card w-full rounded-xl border px-4 py-3 transition focus:border-[#f28c28] focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="user_email" className="theme-text-bright text-sm font-medium">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                value={formData.user_email}
                onChange={handleChange}
                onFocus={handleFieldFocus}
                required
                pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
                title="Please enter a valid email address"
                className="theme-card w-full rounded-xl border px-4 py-3 transition focus:border-[#f28c28] focus:outline-none"
              />
            </div>

            <div className="flex-1 space-y-2">
              <label htmlFor="user_message" className="theme-text-bright text-sm font-medium">
                Message
              </label>
              <textarea
                id="user_message"
                name="user_message"
                value={formData.user_message}
                onChange={handleChange}
                onFocus={handleFieldFocus}
                required
                minLength={5}
                title="Please enter a message"
                rows={6}
                className="theme-card w-full resize-none rounded-xl border px-4 py-3 transition focus:border-[#f28c28] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={formState !== "idle"}
              className="rounded-full bg-[#f28c28] px-8 py-4 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#ffb457] disabled:opacity-50"
            >
              Send it My Way
            </button>
          </form>

          {/* Loading Overlay */}
          {formState === "loading" && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#060b1a]/95 backdrop-blur-sm">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-[#f28c28]" />
            </div>
          )}

          {/* Success Overlay */}
          {formState === "success" && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#060b1a]/95 backdrop-blur-sm">
              <div className="space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f28c28]">
                  <svg
                    className="h-8 w-8 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl font-semibold text-white">
                  Thanks for the message! I&apos;ll be in touch soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
