"use client";

import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
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
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  useEffect(() => {
    if (!isOpen) return;
    const frame = requestAnimationFrame(() => setIsActive(true));
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    try {
      await emailjs.sendForm(
        'service_grcodes',
        'template_ca6dzam',
        e.currentTarget,
        'LjuZS-A8QUs3HDnbb'
      );
      setFormState("success");
      setTimeout(() => {
        setFormState("idle");
        setFormData({ user_name: "", user_email: "", user_message: "" });
        handleClose();
      }, 2000);
    } catch {
      setFormState("idle");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at grcodes@outlook.com"
      );
    }
  };

  const handleClose = () => {
    setIsActive(false);
    setTimeout(onClose, 400);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="modal-shell relative flex h-[90vh] w-[95vw] max-w-7xl overflow-hidden rounded-3xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Left Half - About */}
        <div
          className={`modal-half-left theme-card flex w-1/2 flex-col gap-6 overflow-y-auto border-r p-8 transition-transform duration-700 ${
            isActive ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="space-y-4">
            <h3 className="theme-text-bright text-3xl font-semibold">
              Here&apos;s a bit <span className="text-[#f28c28]">about me</span>
            </h3>
            <h4 className="theme-text text-lg font-medium">Frontend Software Engineer</h4>
            <div className="theme-text space-y-4 text-sm leading-relaxed">
              <p>
                I&apos;m a <span className="font-semibold text-[#f28c28]">Frontend Software Engineer</span> with
                a passion for building web applications with amazing user experiences.
              </p>
              <p>
                I have experience in sales, management and healthcare. I have a{" "}
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
          className={`modal-half-right theme-card relative flex w-1/2 flex-col gap-6 overflow-y-auto p-8 transition-transform duration-700 ${
            isActive ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={handleClose}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#f28c28] hover:bg-white/5"
            aria-label="Close modal"
          >
            <HiX className="h-5 w-5 text-white/80" />
          </button>

          <div className="space-y-4">
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
                id="user_name"
                name="user_name"
                type="text"
                value={formData.user_name}
                onChange={handleChange}
                required
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
                required
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
                required
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
                  Thanks for the message!
                  <br />
                  I&apos;ll get back to you soon.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
