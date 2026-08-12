"use client";

import EcgTrace from "../components/EcgTrace";
import { useCalendly } from "../components/useCalendly";

const NAVY = "#0E1B2A";
const TEAL = "#2FB5A3";

const packages = [
  {
    name: "48ωρη Διάσωση",
    price: "€490",
    was: "€750",
    intro: "Ιδρυτική τιμή — μόνο για τους 3 πρώτους πελάτες",
    tagline: "Η ιστοσελίδα σου είναι χαλασμένη, αργή ή σε φέρνει σε δύσκολη θέση. Κάνω διαλογή, διορθώνω ό,τι είναι κρίσιμο και στη δίνω πίσω να δουλεύει — σε 48 ώρες.",
    features: [
      "Διόρθωση bugs, layout & χαλασμένων links",
      "Πλήρης προσαρμογή σε κινητά",
      "Βελτιστοποίηση ταχύτητας & απόδοσης",
      "Επιδιόρθωση φορμών & επικοινωνίας",
      "Ανέβασμα online & επαλήθευση",
    ],
    featured: true,
  },
  {
    name: "Ανακατασκευή",
    price: "€1.200",
    was: null,
    intro: null,
    tagline: "Πέρα από απλή επιδιόρθωση; Την ξαναχτίζω καθαρή, γρήγορη και σύγχρονη — ίδιο περιεχόμενο, νέες βάσεις που δεν θα χρειαστεί να ξανασώσεις.",
    features: [
      "Σύγχρονη ανακατασκευή (Next.js / React ή Ruby on Rails)",
      "Mobile-first από την αρχή",
      "Βασικά SEO & metadata",
      "Φόρμες επικοινωνίας & integrations",
      "Γρήγορη εξ ορισμού, φτιαγμένη να αντέχει",
    ],
    featured: false,
  },
  {
    name: "Αναβάθμιση AI",
    price: "από €900",
    was: null,
    intro: null,
    tagline: "Πρόσθεσε AI που πραγματικά δουλεύει — chat, περιεχόμενο ή αυτοματισμούς, φτιαγμένο να αντέχει στην πίεση.",
    features: [
      "Ενσωμάτωση AI chat / βοηθού",
      "Δημιουργία περιεχομένου & κειμένων",
      "Αυτοματισμός ροών εργασίας",
      "Ανθεκτικά fallbacks πολλαπλών μοντέλων",
      "Σύνδεση με την υπάρχουσα ιστοσελίδα σου",
    ],
    featured: false,
  },
];

// Recurring add-on, not a fourth package. Priced against the Greek market's HOURLY
// support rate (€30-60/hr), not against its €20/mo maintenance plans, because those
// plans include zero content edits.
const maintenance = {
  name: "Συντήρηση & Υποστήριξη",
  price: "€50",
  cadence: "/μήνα",
  tagline:
    "Οι ιστοσελίδες σπάνια χαλάνε μονομιάς. Σαπίζουν. Ένα plugin ενημερώνεται, μια φόρμα σταματάει να στέλνει, ένα πιστοποιητικό λήγει. Κανείς δεν το παίρνει είδηση μέχρι να τηλεφωνήσει πελάτης ότι το site δεν δουλεύει.",
  features: [
    "Ενημερώσεις συστήματος, plugins & εξαρτήσεων",
    "Καθημερινά backups εκτός server",
    "Παρακολούθηση ασφάλειας & έλεγχος για malware",
    "Έλεγχος διαθεσιμότητας 24/7. Το μαθαίνω πριν από σένα.",
    "Δύο αλλαγές περιεχομένου τον μήνα (ωράρια, προσωπικό, τιμές, φωτογραφίες)",
    "Μηνιαία αναφορά μίας σελίδας",
  ],
  compare:
    "Τα βασικά πακέτα συντήρησης στην αγορά ξεκινούν από €20 τον μήνα και δεν περιλαμβάνουν καμία αλλαγή περιεχομένου. Οι αλλαγές χρεώνονται χωριστά, €30 έως €60 την ώρα. Οι δύο αλλαγές που περιλαμβάνονται εδώ κοστίζουν €60 με €120 αλλού.",
  terms: [
    "Απάντηση σε μία εργάσιμη. Αν το site είναι εκτός λειτουργίας, αυθημερόν.",
    "Νέες σελίδες, ανασχεδιασμοί και νέες λειτουργίες κοστολογούνται χωριστά, σε τιμή πελάτη συντήρησης.",
    "Χωρίς συμβόλαιο. Ακυρώνεις όποτε θες.",
  ],
};

const steps = [
  {
    n: "01",
    title: "Δωρεάν έλεγχος",
    body: "Στείλε μου την ιστοσελίδα σου. Κάνω μια διαλογή και σου λέω ακριβώς τι φταίει και τι χρειάζεται για να διορθωθεί — χωρίς χρέωση, χωρίς δέσμευση.",
  },
  {
    n: "02",
    title: "Προκαταβολή 50% — διορθώνω σε 48 ώρες",
    body: "Εγκρίνεις μια σταθερή τιμή και πληρώνεις τα μισά προκαταβολικά. Μπαίνω και το διορθώνω μέσα σε 48 ώρες. Χωρίς παρεκκλίσεις, χωρίς κρυφές χρεώσεις.",
  },
  {
    n: "03",
    title: "Το ελέγχεις, πληρώνεις το υπόλοιπο",
    body: "Σου το δίνω πίσω να δουλεύει και ελεγμένο. Το βλέπεις live. Ευχαριστημένος; Πληρώνεις το υπόλοιπο. Τέλος.",
  },
];

export default function RescueGrContent() {
  const { openCalendly } = useCalendly();

  return (
    <main className="w-full flex-1 text-white" style={{ background: NAVY }}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-14 sm:px-6 sm:py-16 md:gap-28 md:py-20">
        {/* 1. HERO */}
        <section className="reveal flex flex-col items-center gap-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] sm:text-xs sm:tracking-[0.4em]" style={{ color: TEAL }}>
            Διάσωση Ιστοσελίδων — Σταθερή Τιμή
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] max-[480px]:text-[2.1rem] sm:text-6xl md:text-7xl">
            Η ιστοσελίδα σου.
            <br />
            Διορθωμένη σε <span style={{ color: TEAL }}>48 ώρες</span>.
            <br />
            Σταθερή τιμή.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            10 χρόνια στη ΜΕΘ. Τώρα φτιάχνω ιστοσελίδες με την ίδια λογική —{" "}
            <span className="font-semibold" style={{ color: TEAL }}>
              διαλογή, επιδιόρθωση, επαλήθευση.
            </span>
          </p>

          {/* Signature ECG motif */}
          <div className="w-full max-w-3xl py-2">
            <EcgTrace />
          </div>

          <button
            onClick={openCalendly}
            className="rounded-full px-8 py-4 text-sm font-semibold text-[#0E1B2A] transition hover:-translate-y-0.5"
            style={{ background: TEAL }}
          >
            Κλείσε δωρεάν έλεγχο
          </button>
        </section>

        {/* 2. PACKAGES */}
        <section className="space-y-10">
          <div className="reveal text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Τρεις τρόποι να ξεκινήσεις</h2>
            <p className="mt-3 text-white/60">Μία σταθερή τιμή. Χωρίς χρέωση με την ώρα. Χωρίς εκπλήξεις.</p>
            {/* Reframes the flat fee against the hourly rate buyers already have in mind,
                so the number reads as a cap rather than as a bigger bill. */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
              Οι περισσότεροι χρεώνουν €30 με €60 την ώρα. Αν η δουλειά πάρει 14 ώρες αντί για 10, πληρώνεις 14.
              Εδώ η τιμή είναι μία και δεν αλλάζει, είτε μου πάρει 6 ώρες είτε 20. Το ρίσκο του χρόνου το κρατάω εγώ.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""} flex flex-col rounded-3xl border p-6 sm:p-8`}
                style={{
                  background: pkg.featured ? "rgba(47,181,163,0.08)" : "rgba(255,255,255,0.04)",
                  borderColor: pkg.featured ? "rgba(47,181,163,0.5)" : "rgba(255,255,255,0.1)",
                }}
              >
                {/* Badge slot renders in every card so headings stay aligned across the
                    row. Non-featured cards get an invisible copy — same markup, so the
                    reserved height can't drift if the badge's styling changes. Hidden
                    below md, where the cards stack and alignment doesn't apply. */}
                <span
                  aria-hidden={!pkg.featured}
                  className={`mb-4 w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E1B2A] ${
                    pkg.featured ? "inline-block" : "hidden md:inline-block md:invisible"
                  }`}
                  style={{ background: pkg.featured ? TEAL : "transparent" }}
                >
                  Πιο Δημοφιλές
                </span>
                <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                <div className="mt-3 flex flex-wrap items-baseline gap-2">
                  <span className="text-4xl font-semibold" style={{ color: TEAL }}>
                    {pkg.price}
                  </span>
                  {/* Regular price shown struck through so the founding price reads as a
                      discount instead of a list price. */}
                  {pkg.was && (
                    <span className="text-xl font-medium text-white/40 line-through">{pkg.was}</span>
                  )}
                </div>
                {pkg.intro && (
                  <p className="mt-2 text-xs font-medium" style={{ color: TEAL }}>
                    {pkg.intro}
                  </p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-white/70">{pkg.tagline}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0" style={{ color: TEAL }} aria-hidden="true">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openCalendly}
                  className="mt-8 rounded-full border px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  style={{
                    background: pkg.featured ? TEAL : "transparent",
                    color: pkg.featured ? NAVY : "#ffffff",
                    borderColor: TEAL,
                  }}
                >
                  {pkg.featured ? "Ξεκίνα τη διάσωση" : "Ξεκίνα"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 2b. RESCUE vs NEW SITE — kills the €699 template-site anchor before the
            visitor makes that comparison silently and walks. */}
        <section className="reveal -mt-10 rounded-3xl border border-white/10 bg-white/4 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white">Γιατί διάσωση και όχι καινούρια ιστοσελίδα;</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
            Μια καινούρια ιστοσελίδα από πρότυπο ξεκινά γύρω στα €699. Μοιάζει παρόμοιο κόστος. Δεν είναι το ίδιο
            πράγμα. Η διάσωση κρατάει το περιεχόμενό σου, το ιστορικό SEO και τη θέση σου στο Google. Μια καινούρια
            ιστοσελίδα τα μηδενίζει και ξεκινάς από την αρχή.
          </p>
          <p className="mt-4 text-xs text-white/40">Οι τιμές δεν περιλαμβάνουν ΦΠΑ.</p>
        </section>

        {/* 2c. MAINTENANCE — recurring add-on, deliberately outside the packages grid */}
        <section
          className="reveal rounded-3xl border p-6 sm:p-8 md:p-10"
          style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: TEAL }}>
                Μετά την επιδιόρθωση
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{maintenance.name}</h2>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-semibold" style={{ color: TEAL }}>
                  {maintenance.price}
                </span>
                <span className="text-lg text-white/60">{maintenance.cadence}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{maintenance.tagline}</p>
              <button
                onClick={openCalendly}
                className="mt-8 rounded-full border px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                style={{ background: "transparent", borderColor: TEAL }}
              >
                Πρροσθήκη
              </button>
            </div>

            <div>
              <ul className="space-y-3 text-sm text-white/80">
                {maintenance.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0" style={{ color: TEAL }} aria-hidden="true">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p
                className="mt-6 rounded-2xl border p-4 text-xs leading-relaxed text-white/70"
                style={{ borderColor: "rgba(47,181,163,0.35)", background: "rgba(47,181,163,0.06)" }}
              >
                {maintenance.compare}
              </p>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/50">
                {maintenance.terms.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. HOW IT WORKS */}
        <section className="space-y-10">
          <div className="reveal text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Πώς λειτουργεί</h2>
            <p className="mt-3 text-white/60">
              Διαλογή, επιδιόρθωση, επαλήθευση — το ίδιο πρωτόκολλο που εφάρμοζα στη Μονάδα.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""} rounded-3xl border border-white/10 bg-white/4 p-6 sm:p-8`}
              >
                <span className="text-3xl font-semibold" style={{ color: TEAL }}>
                  {step.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FOUNDING-CLIENT NOTE */}
        <section
          className="reveal rounded-3xl border p-8 text-center sm:p-10"
          style={{ borderColor: "rgba(47,181,163,0.4)", background: "rgba(47,181,163,0.06)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: TEAL }}>
            Ιδρυτικοί Πελάτες
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
            Οι πρώτοι 3 πελάτες κλείνουν τη 48ωρη Διάσωση στα <span style={{ color: TEAL }}>€490</span> αντί για €750.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Με αντάλλαγμα μια ειλικρινή μαρτυρία. Χτίζω το πορτφόλιό μου· εσύ παίρνεις μια διορθωμένη ιστοσελίδα στην
            ιδρυτική τιμή. Μόλις κλείσουν οι 3 θέσεις, η τιμή πάει στα €750.
          </p>
          <button
            onClick={openCalendly}
            className="mt-8 rounded-full px-8 py-4 text-sm font-semibold text-[#0E1B2A] transition hover:-translate-y-0.5"
            style={{ background: TEAL }}
          >
            Κλείσε ιδρυτική θέση
          </button>
        </section>

        {/* 5. CTA (repeated) */}
        <section className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
            Στείλε μου την ιστοσελίδα σου. Θα σου πω τι φταίει — δωρεάν.
          </h2>
          <button
            onClick={openCalendly}
            className="rounded-full px-10 py-4 text-base font-semibold text-[#0E1B2A] transition hover:-translate-y-0.5"
            style={{ background: TEAL }}
          >
            Κλείσε δωρεάν έλεγχο
          </button>
        </section>

        {/* 6. FOOTER credential + portfolio link */}
        <section className="border-t border-white/10 pt-10 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60">
            10 χρόνια στη ΜΕΘ. Τώρα φτιάχνω ιστοσελίδες με την ίδια λογική — διαλογή, επιδιόρθωση, επαλήθευση.{" "}
            <span className="text-white/80">— Γιάννης Ρούσσος</span>
          </p>
          <a
            href="https://giannisroussos.dev"
            className="mt-5 inline-block text-sm font-semibold transition hover:opacity-80"
            style={{ color: TEAL }}
          >
            Δείτε τη δουλειά μου → giannisroussos.dev
          </a>
        </section>
      </div>
    </main>
  );
}
