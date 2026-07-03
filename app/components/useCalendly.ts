"use client";

import { useCallback, useEffect } from "react";

// Your Calendly scheduling link. Replace the placeholder with your real event
// URL, e.g. "https://calendly.com/giannisroussos/free-audit".
// Optionally override per-environment via NEXT_PUBLIC_CALENDLY_URL in Vercel.
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/grcodes/30min";

const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";
const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

/**
 * Loads the Calendly popup widget on demand. Assets are injected only when a
 * component that calls this hook mounts, so they never load on the .dev
 * portfolio (which the middleware keeps free of the /rescue routes entirely).
 */
export function useCalendly() {
  useEffect(() => {
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = WIDGET_CSS;
      document.head.appendChild(link);
    }
    if (!document.querySelector(`script[src="${WIDGET_JS}"]`)) {
      const script = document.createElement("script");
      script.src = WIDGET_JS;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Widget script not ready yet — fall back to opening the scheduler directly.
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }, []);

  return { openCalendly };
}
