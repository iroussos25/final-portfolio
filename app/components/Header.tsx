"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useContactModal } from "../context/ContactModalContext";

export default function Header() {
  const { openModal } = useContactModal();
  return (
    <header className="theme-header sticky top-0 z-10 border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-5">
        <Link href="/" className="theme-text-bright flex min-w-0 items-center gap-2 text-base font-semibold tracking-[0.12em] sm:gap-3 sm:text-lg sm:tracking-[0.2em]">
          <span className="logo-wrap shrink-0 transition-all duration-300 hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(242,140,40,0.9),0_0_60px_rgba(242,140,40,0.6),0_0_80px_rgba(242,140,40,0.3)]">
            <Image
              src="/transparent-logo.svg"
              alt="Giannis Roussos logo"
              width={62}
              height={62}
              className="logo-fill h-10 w-10 sm:h-12 sm:w-12"
            />
          </span>
          <span className="hidden min-[560px]:inline">Giannis Roussos</span>
        </Link>
        <nav className="theme-text flex shrink-0 items-center gap-3 text-[11px] uppercase tracking-[0.12em] min-[420px]:gap-4 min-[420px]:text-xs min-[420px]:tracking-[0.18em] sm:gap-6 sm:text-sm sm:tracking-[0.25em]">
          <Link href="/#projects" className="theme-text-bright transition hover:opacity-100">
            Projects
          </Link>
          <Link href="/about" className="theme-text-bright transition hover:opacity-100">
            About
          </Link>
          <button
            onClick={openModal}
            className="theme-text-bright transition hover:opacity-100 cursor-pointer"
          >
            CONTACT
          </button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
