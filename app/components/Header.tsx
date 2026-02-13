import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="theme-header sticky top-0 z-10 border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="theme-text-bright flex items-center gap-3 text-lg font-semibold tracking-[0.2em]">
          <span className="logo-wrap">
            <Image
              src="/logo-transparent.png"
              alt="Yiannis Roussos logo"
              width={62}
              height={62}
              className="logo-accent logo-fill h-15.5 w-15.5"
            />
          </span>
          <span>Yiannis Roussos</span>
        </Link>
        <nav className="theme-text flex items-center gap-6 text-sm uppercase tracking-[0.25em]">
          <Link href="#projects" className="theme-text-bright transition hover:opacity-100">
            Projects
          </Link>
          <Link href="#about" className="theme-text-bright transition hover:opacity-100">
            About
          </Link>
          <Link href="#contact" className="theme-text-bright transition hover:opacity-100">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
