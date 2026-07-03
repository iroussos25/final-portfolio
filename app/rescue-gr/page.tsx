import type { Metadata } from "next";
import RescueGrContent from "./RescueGrContent";

const SITE = "https://giannisroussos.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Διάσωση Ιστοσελίδων — Η Ιστοσελίδα σου Διορθωμένη σε 48 Ώρες",
  description:
    "Χαλασμένη, αργή ή παρωχημένη ιστοσελίδα; Κάνω διαλογή, διορθώνω ό,τι είναι κρίσιμο και τη δίνω πίσω να δουλεύει σε 48 ώρες — σταθερή τιμή, χωρίς χρέωση με την ώρα. Δωρεάν έλεγχος, χωρίς δέσμευση.",
  keywords: [
    "διάσωση ιστοσελίδων",
    "επισκευή ιστοσελίδας",
    "φτιάξιμο ιστοσελίδας",
    "κατασκευή ιστοσελίδων",
    "web developer Ελλάδα",
    "Next.js developer",
    "React developer",
    "Ruby on Rails developer",
    "προγραμματιστής Ruby on Rails",
    "freelance προγραμματιστής",
  ],
  alternates: {
    canonical: "/rescue-gr",
    languages: {
      en: `${SITE}/rescue`,
      el: `${SITE}/rescue-gr`,
      "x-default": `${SITE}/rescue`,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE}/rescue-gr`,
    siteName: "Γιάννης Ρούσσος — Διάσωση Ιστοσελίδων",
    title: "Η Ιστοσελίδα σου. Διορθωμένη σε 48 Ώρες. Σταθερή Τιμή.",
    description:
      "Διαλογή, επιδιόρθωση, επαλήθευση — διορθώνω χαλασμένες ή αργές ιστοσελίδες σε 48 ώρες με σταθερή τιμή. Δωρεάν έλεγχος.",
    locale: "el_GR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Διάσωση Ιστοσελίδων — Διορθωμένη σε 48 Ώρες",
    description:
      "Διορθώνω χαλασμένες ή αργές ιστοσελίδες σε 48 ώρες, σταθερή τιμή. Δωρεάν έλεγχος.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RescueGrPage() {
  return <RescueGrContent />;
}
