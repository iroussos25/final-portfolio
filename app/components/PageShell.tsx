"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="page-shell">
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
