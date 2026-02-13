"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="theme-card flex h-10 w-10 items-center justify-center rounded-full border transition hover:border-[#f28c28]"
        aria-label="Toggle theme"
      >
        <HiSun className="h-5 w-5 text-white/80" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-card flex h-10 w-10 items-center justify-center rounded-full border transition hover:border-[#f28c28]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <HiSun className="h-5 w-5 text-white/80" />
      ) : (
        <HiMoon className="h-5 w-5 text-gray-800" />
      )}
    </button>
  );
}
