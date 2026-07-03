import { ImageResponse } from "next/og";

export const alt = "Διάσωση Ιστοσελίδων — Διορθωμένη σε 48 ώρες, σταθερή τιμή";
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
          background: "#0E1B2A",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#2FB5A3",
          }}
        >
          Διάσωση Ιστοσελίδων — Σταθερή Τιμή
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 78, fontWeight: 700, lineHeight: 1.08 }}>
          <span>Η ιστοσελίδα σου.</span>
          <span>
            Έτοιμη σε <span style={{ color: "#2FB5A3" }}>48 ώρες</span>.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 30,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Διαλογή · Επιδιόρθωση · Επαλήθευση — δωρεάν έλεγχος.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 26,
            color: "#2FB5A3",
            letterSpacing: 2,
          }}
        >
          giannisroussos.com
        </div>
      </div>
    ),
    { ...size }
  );
}
