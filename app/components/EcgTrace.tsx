"use client";

/**
 * Signature "triage-to-code" motif: an ECG monitor trace that beats across the
 * screen and then hands off into code. Nurse turned engineer, in one line.
 * Pure SVG + CSS (SMIL sweep dot) — no libraries, no runtime cost.
 */

const TEAL = "#2FB5A3";
const TEAL_BRIGHT = "#3FD4BF";

// Three PQRST heartbeats, then a flat lead-in that hands off to the code glyph.
const ECG_PATH = [
  "M0,60 L34,60 L40,52 L46,60 L56,60 L60,66 L66,18 L72,80 L78,60 L90,60 L98,50 L106,60 L110,60",
  "L144,60 L150,52 L156,60 L166,60 L170,66 L176,18 L182,80 L188,60 L200,60 L208,50 L216,60 L220,60",
  "L254,60 L260,52 L266,60 L276,60 L280,66 L286,18 L292,80 L298,60 L310,60 L318,50 L326,60 L330,60",
  "L360,60",
].join(" ");

export default function EcgTrace({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 120"
      role="img"
      aria-label="An ECG heartbeat trace flowing into code"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto" }}
    >
      {/* faint baseline */}
      <line
        x1="0"
        y1="60"
        x2="520"
        y2="60"
        stroke={TEAL}
        strokeWidth="1"
        strokeOpacity="0.14"
      />

      {/* the live trace */}
      <path
        id="ecgPath"
        className="ecg-line"
        d={ECG_PATH}
        fill="none"
        stroke={TEAL}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 6px ${TEAL})` }}
      />

      {/* monitor sweep dot travelling the trace */}
      <circle r="4" fill={TEAL_BRIGHT} style={{ filter: `drop-shadow(0 0 8px ${TEAL_BRIGHT})` }}>
        <animateMotion dur="3.4s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1" keyTimes="0;1">
          <mpath href="#ecgPath" />
        </animateMotion>
      </circle>

      {/* the hand-off: trace becomes code */}
      <g className="ecg-code">
        <text x="372" y="34" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill={TEAL} opacity="0.45">
          10110
        </text>
        <text
          x="372"
          y="70"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="30"
          fontWeight="600"
          fill={TEAL_BRIGHT}
          style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }}
        >
          &lt;/&gt;
        </text>
        <text x="372" y="90" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill={TEAL} opacity="0.45">
          01001
        </text>
      </g>
      <rect className="ecg-cursor" x="452" y="50" width="11" height="22" fill={TEAL_BRIGHT} />
    </svg>
  );
}