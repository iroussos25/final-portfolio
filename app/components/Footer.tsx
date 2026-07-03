"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContactModal } from '../context/ContactModalContext';

export default function Footer() {
  const { openModal } = useContactModal();
  // Greek business page gets Greek chrome; everything else stays English.
  const isGreek = usePathname() === '/rescue-gr';
  const t = isGreek
    ? {
        tagline: 'Ας φτιάξουμε κάτι ξεχωριστό.',
        subtitle: 'Διαθέσιμος για freelance, συνεργασίες και ευκαιρίες εργασίας.',
        resume: 'Βιογραφικό',
      }
    : {
        tagline: "Let's build something bold.",
        subtitle: 'Open for freelance, collaborations, and employment opportunities.',
        resume: 'Resume',
      };

  return (
    <footer id="contact" className="theme-footer border-t">
      <div className="theme-text mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-14 text-center text-sm lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="space-y-2 lg:max-w-xs">
          <p className="theme-text-bright text-base font-semibold">{t.tagline}</p>
          <p>{t.subtitle}</p>
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
          <a className="theme-text-bright transition hover:opacity-100" href="https://www.linkedin.com/in/giannisr" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="opacity-30">|</span>
          <a className="theme-text-bright transition hover:opacity-100" href="/tech-resume10.pdf" target="_blank" rel="noopener noreferrer">
            {t.resume}
          </a>
        </div>
      </div>
    </footer>
  );
}
