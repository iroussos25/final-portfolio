"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { ContactModalProvider } from "../context/ContactModalContext";
import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ContactModalProvider>
        <div className="page-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </ContactModalProvider>
    </ThemeProvider>
  );
}
