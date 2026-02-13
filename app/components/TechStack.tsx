"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiThreedotjs,
  SiVite,
} from "react-icons/si";

const technologies = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#f28c28" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Three.js", icon: SiThreedotjs, color: "#f28c28" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white">Technology Stack</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">
          Tools I work with
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className={`theme-card tech-tile reveal group flex flex-col items-center gap-3 rounded-2xl border p-6 transition hover:-translate-y-2 hover:border-[#f28c28]/60 hover:shadow-[0_12px_40px_-20px_rgba(242,140,40,0.6)] ${
                index % 2 === 0 ? "delay-1" : "delay-2"
              }`}
              style={
                {
                  "--tech-color": tech.color,
                } as React.CSSProperties
              }
            >
              <Icon
                className="tech-icon h-12 w-12 transition-all duration-300 group-hover:scale-110"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              />
              <span
                className="tech-name text-xs font-semibold uppercase tracking-[0.2em] transition"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
              >
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
