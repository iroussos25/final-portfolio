"use client"

import { useState } from "react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const delayClass = index % 2 === 0 ? "delay-1" : "delay-2";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`reveal relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[#f28c28]/60 hover:shadow-[0_18px_60px_-40px_rgba(242,140,40,0.7)] flex flex-col ${delayClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: `linear-gradient(rgba(6, 11, 26, 0.4), rgba(6, 11, 26, 0.65)), url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '320px',
      }}
    >
      {/* Title Bar */}
      <div className="relative z-10 bg-linear-to-r from-[#f28c28] to-[#ffb457] border-b border-[#ffb457] px-6 py-4">
        <h3 className="text-xl font-semibold text-black">{project.title}</h3>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-6">
        <div className="mt-auto flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-white/50">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#2f5f9e]/70 bg-[#0d1b33]/70 px-3 py-1 text-[#c6d9f5]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay */}
      <div
        className={`project-overlay absolute inset-0 z-20 flex flex-col items-start justify-end p-6 transition-transform duration-500 ease-out ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Project Details</h4>
          <p className="max-h-24 overflow-y-auto text-sm text-white/80">
            {project.detailedDescription}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f28c28] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#ffb457]"
          >
            Visit Project
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
