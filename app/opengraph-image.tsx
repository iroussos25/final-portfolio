import { ImageResponse } from "next/og";

export const alt = "Giannis Roussos — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #060b1a 0%, #0d1830 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#ffb457",
          }}
        >
          Full-Stack Software Engineer
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 88, fontWeight: 700 }}>
          Giannis Roussos
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 900,
          }}
        >
          AI orchestration & resilient systems. React · TypeScript · Next.js. Evaluating frontier models for leading AI labs.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            color: "#f28c28",
            letterSpacing: 2,
          }}
        >
          giannisroussos.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
