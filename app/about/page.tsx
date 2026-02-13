"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-16">
      <section className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        {/* Photo Section */}
        <div className="reveal">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/ME.jpg"
              alt="Giannis Roussos"
              width={600}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-6 reveal delay-1">
          <div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">About Me</h1>
            <div className="mt-2 h-1 w-24 rounded-full bg-linear-to-r from-[#f28c28] via-[#ffb457] to-[#2f5f9e]" />
          </div>

          <div className="space-y-4 text-white/70">
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
              video games. I also love the great outdoors and playing guitar. Poorly. 
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Experience</h2>
            <ul className="mt-4 space-y-3 text-white/70">
              <li>Frontend Software Engineer</li>
              <li>Sales & Management Background</li>
              <li>Healthcare Industry Experience</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Education & Skills</h2>
            <p className="mt-4 text-white/70">
              Continuously learning and building with modern web technologies including React, Next.js, TypeScript,
              and more. Focused on creating exceptional user experiences through clean code and thoughtful design.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
