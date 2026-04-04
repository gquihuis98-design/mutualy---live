"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Menu,
  Search,
  Shield,
  Target,
  UserPlus,
  Wallet,
  Zap,
} from "lucide-react";

/* =========================
   TYPES
========================= */
type DemoMatch = {
  id: number;
  letter: string;
  name: string;
  subtitle: string;
  match: string;
  description: string;
  tags: string[];
  company: string;
  stack: string;
  icp: string;
  budget: string;
};

/* =========================
   DATA
========================= */
const buyerBullets = [
  "Discover relevant solutions without inbox spam",
  "Stay in full control of every introduction",
  "Save hours filtering irrelevant vendor pitches",
];

const vendorBullets = [
  "Meet prospects already open to your solution",
  "Stop wasting effort on cold outbound",
  "Access higher-quality buyer opportunities",
];

const demoMatches: DemoMatch[] = [
  {
    id: 1,
    letter: "C",
    name: "CloudSync Pro",
    subtitle: "Data Integration Platform",
    match: "94%",
    description: "Enterprise-grade data pipelines with 200+ integrations.",
    tags: ["API-first", "SOC 2", "Enterprise"],
    company: "Series B · 120 employees",
    stack: "Snowflake, AWS",
    icp: "Mid-market SaaS",
    budget: "Within range",
  },
];

/* =========================
   MAIN PAGE
========================= */
export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerLinks = useMemo(
    () => [
      { label: "How it works", href: "#how-it-works" },
      { label: "Buyers", href: "#buyers" },
      { label: "Vendors", href: "#vendors" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#eef1f7] text-[#0f1730]">
      {/* HEADER */}
      <header className="bg-[#04112b] text-white px-6 py-5 flex justify-between items-center">
        <div className="font-bold text-xl">Mutualy</div>

        <nav className="hidden md:flex gap-6">
          {headerLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>
      </header>

      {/* HERO */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold">
          B2B introductions buyers actually want
        </h1>
        <p className="mt-4 text-gray-600">
          Permission-based matchmaking. No spam. Just real conversations.
        </p>
      </section>

      {/* BUYER CARD */}
      <section id="buyers" className="px-6 py-12">
        <SideCard
          id="buyers"
          eyebrow="For Buyers"
          title="Discover, don't get spammed"
          text="Only see vendors that actually match your needs."
          bullets={buyerBullets}
          cta="Join as Buyer"
          ctaHref="#"
          accent="buyer"
        />
      </section>

      {/* VENDOR CARD */}
      <section id="vendors" className="px-6 py-12">
        <SideCard
          id="vendors"
          eyebrow="For Vendors"
          title="Sell smarter"
          text="Meet buyers already interested in your solution."
          bullets={vendorBullets}
          cta="Join as Vendor"
          ctaHref="#"
          accent="vendor"
        />
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500">
        © Mutualy
      </footer>
    </div>
  );
}

/* =========================
   COMPONENTS
========================= */

function SideCard({
  id,
  eyebrow,
  title,
  text,
  bullets,
  cta,
  ctaHref,
  accent,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  cta: string;
  ctaHref: string;
  accent: "buyer" | "vendor";
}) {
  const isBuyer = accent === "buyer";

  return (
    <div
      id={id}
      className={`rounded-2xl p-8 ${
        isBuyer ? "bg-green-50" : "bg-blue-50"
      }`}
    >
      <div className="text-sm font-bold text-gray-500">{eyebrow}</div>

      <h2 className="text-3xl font-bold mt-2">{title}</h2>

      <p className="mt-4 text-gray-600">{text}</p>

      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b}>✓ {b}</li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className="mt-6 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl"
      >
        {cta}
        <ArrowRight size={18} />
      </a>
    </div>
  );
}