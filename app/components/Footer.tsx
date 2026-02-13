"use client";

import Image from 'next/image';
import { useContactModal } from '../context/ContactModalContext';

export default function Footer() {
  const { openModal } = useContactModal();

  return (
    <footer id="contact" className="theme-footer border-t">
      <div className="theme-text mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-14 text-center text-sm lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="space-y-2 lg:max-w-xs">
          <p className="theme-text-bright text-base font-semibold">Let&apos;s build something bold.</p>
          <p>Open for freelance, collaborations, and employment opportunities.</p>
        </div>
        <button 
          onClick={openModal}
          className="logo-wrap logo-wrap-lg mx-auto cursor-pointer transition-all duration-300 hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(242,140,40,0.9),0_0_60px_rgba(242,140,40,0.6),0_0_80px_rgba(242,140,40,0.3)]"
          aria-label="Open contact modal"
        >
          <Image
            src="/transparent-logo.svg"
            alt="Giannis Roussos logo"
            width={140}
            height={140}
            className="logo-fill h-35 w-35"
          />
        </button>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.2em] lg:justify-end">
          <a className="theme-text-bright transition hover:opacity-100" href="mailto:grcodes@outlook.com">
            grcodes@outlook.com
          </a>
          <span className="opacity-30">|</span>
          <a className="theme-text-bright transition hover:opacity-100" href="https://github.com/iroussos25" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <span className="opacity-30">|</span>
          <a className="theme-text-bright transition hover:opacity-100" href="https://www.linkedin.com/in/ioannis-roussos-a42a7912

" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
