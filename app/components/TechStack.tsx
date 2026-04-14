"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiAngular,
  SiReact,
  SiOpenai,
  SiAmazonwebservices,
  SiTailwindcss,
  SiThreedotjs,
  SiPython,
  SiGit,
  SiRubyonrails,
  SiFirebase,
  SiAmazondynamodb,
} from "react-icons/si";

const technologies: { name: string; icon: React.ElementType; color: string; darkColor?: string }[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FF9900" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Angular", icon: SiAngular, color: "#DD0031", darkColor: "#FF4D6D" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "AI/LLM", icon: SiOpenai, color: "#10a37f" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Three.js", icon: SiThreedotjs, color: "#f28c28" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Ruby on Rails", icon: SiRubyonrails, color: "#CC0000", darkColor: "#E0115F" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
];

export default function TechStack() {
  const { theme } = useTheme();
  return (
    <section id="tech-stack" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white">Technology Stack</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">
          Core Infrastructure & Systems
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          const iconColor = theme === "dark" && tech.darkColor ? tech.darkColor : tech.color;
          return (
            <div
              key={tech.name}
              className={`group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#f28c28]/40 hover:bg-white/8 ${
                index % 2 === 0 ? "delay-1" : "delay-2"
              }`}
            >
            
              <div
                className="transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
                style={{ color: iconColor }}
              >
                <Icon className="h-10 w-10" />
              </div>
              
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-white/80">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}