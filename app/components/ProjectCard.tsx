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
      className={`reveal relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-[#f28c28]/60 hover:shadow-[0_18px_60px_-40px_rgba(242,140,40,0.7)] ${delayClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content */}
      <div className="mb-4 h-1 w-16 rounded-full bg-linear-to-r from-[#f28c28] via-[#ffb457] to-[#2f5f9e]" />
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-white/70">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-white/50">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#2f5f9e]/70 bg-[#0d1b33]/70 px-3 py-1 text-[#c6d9f5]"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
      >
        Live Preview
        <span aria-hidden="true">→</span>
      </a>

      {/* Hover Overlay */}
      <div
        className={`project-overlay absolute inset-0 flex flex-col items-start justify-end p-6 transition-transform duration-500 ease-out ${
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
            rel="noreferrer"
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
