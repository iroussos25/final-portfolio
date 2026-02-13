import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="theme-footer border-t">
      <div className="theme-text mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-14 text-center text-sm lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="space-y-2 lg:max-w-xs">
          <p className="theme-text-bright text-base font-semibold">Let&apos;s build something bold.</p>
          <p>Open for freelance, collaborations, and product roles.</p>
        </div>
        <span className="logo-wrap logo-wrap-lg mx-auto">
          <Image
            src="/logo-transparent.png"
            alt="Yiannis Roussos logo"
            width={140}
            height={140}
            className="logo-accent logo-fill h-35 w-35"
          />
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.2em] lg:justify-end">
          <a className="theme-text-bright transition hover:opacity-100" href="mailto:hello@ioann.dev">
            hello@ioann.dev
          </a>
          <span className="opacity-30">|</span>
          <a className="theme-text-bright transition hover:opacity-100" href="https://github.com">
            Github
          </a>
          <span className="opacity-30">|</span>
          <a className="theme-text-bright transition hover:opacity-100" href="https://www.linkedin.com">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
