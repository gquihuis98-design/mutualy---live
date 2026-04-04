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

const problems = [
  {
    icon: "🚫",
    title: "Cold outreach is broken",
    text: "Buyers ignore irrelevant pitches. Vendors waste hours chasing people who were never a fit in the first place.",
  },
  {
    icon: "🕒",
    title: "Sellers waste effort",
    text: "Revenue teams spend too much time prospecting instead of speaking with buyers who actually have intent.",
  },
  {
    icon: "🎯",
    title: "Buyers can’t find fit",
    text: "Procurement and revenue leaders are overwhelmed by noise and struggle to discover the right vendors quickly.",
  },
  {
    icon: "🤝",
    title: "Mutualy fixes this",
    text: "Permission-based introductions mean every conversation starts with mutual interest and verified fit. No spam. No waste.",
    highlight: true,
  },
] as const;

const steps = [
  {
    step: "Step 01",
    icon: UserPlus,
    title: "Buyers create a profile",
    text: "Share your tech stack, priorities, budget, timeline, and goals in under five minutes.",
  },
  {
    step: "Step 02",
    icon: Target,
    title: "Vendors define their ICP",
    text: "Describe your ideal customer profile, strongest use cases, and buying signals you serve best.",
  },
  {
    step: "Step 03",
    icon: Zap,
    title: "Mutualy matches on fit",
    text: "We score compatibility across the dimensions that matter most so introductions start with real alignment.",
  },
  {
    step: "Step 04",
    icon: Shield,
    title: "Buyers accept or decline",
    text: "Every introduction is permission-based. Buyers choose whether they want to engage before anything moves forward.",
  },
  {
    step: "Step 05",
    icon: ArrowRight,
    title: "Aligned conversations begin",
    text: "Only relevant matches move forward, creating better meetings and better outcomes for both sides.",
  },
] as const;

const matchSignals = [
  {
    icon: Search,
    title: "Tech Stack",
    text: "Current tools, integrations, and infrastructure",
  },
  {
    icon: Target,
    title: "Business Priorities",
    text: "Strategic goals and active pain points",
  },
  {
    icon: Wallet,
    title: "Budget & Authority",
    text: "Spending range and decision-making level",
  },
  {
    icon: CalendarDays,
    title: "Timeline",
    text: "Buying urgency and evaluation window",
  },
  {
    icon: Shield,
    title: "Company Profile",
    text: "Size, industry, growth stage, and geography",
  },
  {
    icon: Zap,
    title: "ICP Fit Score",
    text: "Vendor-to-buyer ideal profile alignment",
  },
] as const;

const buyerBullets = [
  "Discover relevant solutions without inbox spam",
  "Stay in full control of every introduction",
  "Save hours filtering irrelevant vendor pitches",
] as const;

const vendorBullets = [
  "Meet prospects already open to your solution",
  "Stop wasting effort on cold outbound",
  "Access higher-quality buyer opportunities",
] as const;

const stats = [
  { value: "87%", label: "Match acceptance rate" },
  { value: "3.2x", label: "Faster to first meeting" },
  { value: "12hrs", label: "Average time saved" },
  { value: "94%", label: "Intro quality score" },
] as const;

const faqs = [
  {
    q: "How do matches work?",
    a: "Mutualy compares buyer priorities and vendor fit across category, budget, company profile, timing, and intent signals before surfacing an introduction.",
  },
  {
    q: "Who controls introductions?",
    a: "Buyers do. Every introduction is permission-based, so vendors only get access when a buyer chooses to engage.",
  },
  {
    q: "Is it free for buyers?",
    a: "Yes. Buyers join and discover relevant vendors for free.",
  },
  {
    q: "When do vendors pay?",
    a: "Mutualy can support premium vendor access and curated plans, but pricing is currently available through early access conversations.",
  },
  {
    q: "What information is shared?",
    a: "Only the information needed to evaluate fit and make a qualified introduction is used in the matching process.",
  },
  {
    q: "How is Mutualy different from lead databases or intent tools?",
    a: "Lead databases provide names. Mutualy is designed to create permission-based introductions built on actual fit and buyer openness.",
  },
] as const;

const logos = ["Acme Corp", "NovaTech", "Synapse", "CloudBase", "Vertex AI", "Dataflow"] as const;

const demoMatches: DemoMatch[] = [
  {
    id: 1,
    letter: "C",
    name: "CloudSync Pro",
    subtitle: "Data Integration Platform",
    match: "94%",
    description:
      "Enterprise-grade data pipeline orchestration with real-time sync across 200+ connectors.",
    tags: ["API-first", "SOC 2 Certified", "Enterprise Ready"],
    company: "Series B · 120 employees",
    stack: "Snowflake, AWS",
    icp: "Mid-market SaaS",
    budget: "Within range",
  },
  {
    id: 2,
    letter: "V",
    name: "VelocityAI",
    subtitle: "Revenue Intelligence",
    match: "91%",
    description:
      "Pipeline forecasting and seller guidance built for fast-growing GTM teams with lean RevOps functions.",
    tags: ["Forecasting", "RevOps", "AI Insights"],
    company: "Series C · 280 employees",
    stack: "Salesforce, Gong",
    icp: "B2B SaaS",
    budget: "Strong fit",
  },
  {
    id: 3,
    letter: "S",
    name: "SignalStack",
    subtitle: "Buying Signal Platform",
    match: "88%",
    description:
      "Surface account-level signals and trigger relevant workflows without adding outbound noise.",
    tags: ["Signals", "Automation", "Intent"],
    company: "Growth stage · 85 employees",
    stack: "HubSpot, Segment",
    icp: "Modern revenue teams",
    budget: "Within range",
  },
  {
    id: 4,
    letter: "P",
    name: "ProcurePilot",
    subtitle: "Vendor Evaluation Workspace",
    match: "86%",
    description:
      "Collaborative vendor review workflows for procurement teams managing multi-stakeholder decisions.",
    tags: ["Procurement", "Workflow", "Collaboration"],
    company: "Enterprise · 1,200 employees",
    stack: "Okta, Slack",
    icp: "Procurement leaders",
    budget: "Needs approval",
  },
];

export default function MutualyEliteLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [matchIndex, setMatchIndex] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);

  const headerLinks = useMemo(
    () => [
      { label: "How it works", href: "#how-it-works" },
      { label: "For Buyers", href: "#buyers" },
      { label: "For Vendors", href: "#vendors" },
      { label: "FAQ", href: "#faq" },
    ],
    []
  );

  const currentMatch = demoMatches[matchIndex];

  const handleMatchAction = (action: "accept" | "decline") => {
    if (action === "accept") {
      setAcceptedCount((prev) => prev + 1);
    }
    setMatchIndex((prev) => (prev + 1) % demoMatches.length);
  };

  return (
    <div className="min-h-screen bg-[#eef1f7] text-[#0f1730] font-sans">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04112b] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-6">
          <a href="#top" className="flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4166ff] to-[#34d3c5] text-[22px] font-extrabold tracking-[-0.05em] shadow-[0_10px_30px_rgba(52,211,197,0.18)]">
              M
            </span>
            <span className="text-[28px] font-extrabold tracking-[-0.03em] md:text-[34px]">Mutualy</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {headerLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-white/75 transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a
              href="https://form.typeform.com/to/Vx8Qdbfu"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-[#121a32] transition hover:bg-white/90"
            >
              Join waitlist
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-2xl p-2.5 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={34} strokeWidth={2.3} />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[linear-gradient(180deg,#04112b,#06163a)] px-5 py-6 md:hidden">
            <div className="mx-auto max-w-6xl">
              <div className="text-[22px] font-extrabold text-white">Mutualy</div>
              <p className="mt-4 max-w-sm text-[15px] leading-8 text-white/45">
                Permission-based B2B matchmaking. Better conversations, better outcomes.
              </p>

              <div className="mt-8 space-y-8">
                <div>
                  <div className="mb-4 text-[14px] font-semibold text-white">Product</div>
                  <div className="space-y-5 text-[15px] text-white/45">
                    {headerLinks.map((item) => (
                      <a key={item.label} href={item.href} className="block" onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </a>
                    ))}
                    <a href="#pricing-coming" className="block" onClick={() => setMenuOpen(false)}>
                      Pricing
                    </a>
                  </div>
                </div>

                <div>
                  <div className="mb-4 text-[14px] font-semibold text-white">Connect</div>
                  <div className="space-y-5 text-[15px] text-white/45">
                    <a href="https://form.typeform.com/to/oLtDvuLX" target="_blank" rel="noreferrer" className="block">
                      Apply as Buyer
                    </a>
                    <a href="https://form.typeform.com/to/oYc6xZr0" target="_blank" rel="noreferrer" className="block">
                      Apply as Vendor
                    </a>
                    <a href="https://form.typeform.com/to/Vx8Qdbfu" target="_blank" rel="noreferrer" className="block">
                      Join Waitlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[#04112b] pb-14 pt-10 text-white md:pb-20 md:pt-14">
          <div
            className="absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(64,112,255,0.24),transparent_60%)]" />

          <div className="relative mx-auto max-w-6xl px-5 md:px-6">
            <div className="inline-flex rounded-full border border-[#3e62ff]/25 bg-[#2445d8]/18 px-4 py-2 text-sm font-medium text-white/85 shadow-[0_0_0_1px_rgba(80,120,255,0.12)]">
              <span className="mr-3 text-[#34d3c5]">●</span>
              Now in early access
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h1 className="max-w-4xl text-[56px] font-extrabold leading-[0.98] tracking-[-0.06em] text-white sm:text-[68px] md:text-[82px] lg:text-[92px]">
                  B2B introductions buyers{" "}
                  <span className="bg-gradient-to-r from-[#4166ff] via-[#3d8df7] to-[#34d3c5] bg-clip-text text-transparent">
                    actually want
                  </span>
                </h1>
                <p className="mt-8 max-w-3xl text-[18px] leading-9 text-white/52 md:text-[20px]">
                  Mutualy replaces cold outreach with permission-based matchmaking. Buyers set their priorities. Vendors match on fit. Only relevant conversations happen.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://form.typeform.com/to/Vx8Qdbfu"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-[22px] bg-gradient-to-r from-[#4166ff] via-[#3b91f6] to-[#34d3c5] px-7 py-5 text-[18px] font-semibold text-white shadow-[0_18px_50px_rgba(41,106,255,0.26)]"
                  >
                    Join Mutualy
                    <ArrowRight className="ml-3" size={22} />
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center rounded-[22px] bg-white/90 px-7 py-5 text-[18px] font-semibold text-[#18203a]"
                  >
                    See how it works
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 text-white/60">
                  <div className="flex items-start gap-2 text-[16px] leading-7">
                    <span className="text-[#34d3c5]">✓</span>
                    <span>Free for buyers</span>
                  </div>
                  <div className="flex items-start gap-2 text-[16px] leading-7">
                    <span className="text-[#34d3c5]">✓</span>
                    <span>No cold outreach</span>
                  </div>
                  <div className="flex items-start gap-2 text-[16px] leading-7">
                    <span className="text-[#34d3c5]">✓</span>
                    <span>Permission-based</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-[18px] font-semibold">Your Matches</div>
                    <div className="text-[16px] text-white/55">3 new</div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      {
                        name: "CloudSync Pro",
                        subtitle: "Data Integration",
                        match: "94%",
                        badge: "New",
                        chips: ["API-first", "SOC 2", "Enterprise"],
                      },
                      {
                        name: "VelocityAI",
                        subtitle: "Revenue Intelligence",
                        match: "89%",
                        badge: "Strong",
                        chips: ["Forecasting", "RevOps", "Growth"],
                      },
                    ].map((item) => (
                      <div key={item.name} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#4166ff] to-[#7b4df1] text-xl font-bold text-white">
                              {item.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-[18px] font-semibold">{item.name}</div>
                              <div className="text-[15px] text-white/45">{item.subtitle}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[22px] font-bold text-[#39b2f0]">{item.match}</div>
                            <div className="mt-2 inline-flex rounded-full border border-[#2fd7c1]/30 bg-[#2fd7c1]/10 px-3 py-1 text-xs font-semibold text-[#34d3c5]">
                              {item.badge}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.chips.map((chip) => (
                            <div key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[13px] text-white/65">
                              {chip}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="The Problem"
            title="B2B outreach is broken for everyone"
            subtitle="Buyers are drowning in irrelevant pitches. Sellers are burning budget on cold leads. There has to be a better way."
            dark={false}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {problems.map((item) => (
              <div
                key={item.title}
                className={`rounded-[30px] border p-7 md:p-8 ${
                  item.highlight
                    ? "border-[#bfd0ff] bg-[#eef3ff]"
                    : "border-[#d9deeb] bg-white shadow-[0_14px_40px_rgba(15,23,48,0.06)]"
                }`}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-[20px] text-[28px] ${item.highlight ? "bg-[#dcf7f2]" : "bg-[#f4f5fa]"}`}>
                  {item.icon}
                </div>
                <h3 className="mt-8 text-[26px] font-bold tracking-[-0.03em] text-[#0f1730]">{item.title}</h3>
                <p className="mt-5 text-[18px] leading-9 text-[#6b7285]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-12 md:px-6 md:py-16">
          <div className="text-center">
            <div className="text-sm font-semibold tracking-widest text-[#4166ff] uppercase">Try it yourself</div>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0f1730] md:text-5xl">See how matching feels</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6b7285]">
              Prospects can click through real-looking vendor matches on the page. Accept the ones that fit, decline the rest.
            </p>
          </div>

          <div className="mt-10">
            <div className="mb-4 flex justify-between text-sm text-gray-500">
              <span>
                {matchIndex + 1} of {demoMatches.length} matches
              </span>
              <span>{acceptedCount} accepted</span>
            </div>

            <div className="relative mx-auto max-w-3xl">
              <div className="pointer-events-none absolute inset-0 -z-10 translate-y-4 scale-[0.97] rounded-[30px] border border-[#d9deeb] bg-[#eef1f7] opacity-70" />
              <div className="pointer-events-none absolute inset-0 -z-20 translate-y-8 scale-[0.94] rounded-[30px] border border-[#d9deeb] bg-[#e8ebf3] opacity-50" />

              <div
                key={currentMatch.id}
                className="relative overflow-hidden rounded-[30px] border border-[#d9deeb] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,48,0.12)] transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4166ff] to-[#7b4df1] text-2xl font-bold text-white">
                      {currentMatch.letter}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-xl font-semibold text-[#11182d]">{currentMatch.name}</div>
                      <div className="truncate text-base text-gray-500">{currentMatch.subtitle}</div>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-3xl font-bold text-[#34d3c5]">{currentMatch.match}</div>
                    <div className="text-xs tracking-[0.18em] text-gray-400">MATCH</div>
                  </div>
                </div>

                <p className="mt-5 text-lg leading-8 text-gray-600">{currentMatch.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {currentMatch.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#d7dcf4] bg-[#f7f8fd] px-3 py-1.5 text-xs text-[#4b5fd6]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#e5e7ef] pt-6 text-sm text-gray-600 sm:grid-cols-2">
                  <div>
                    <span className="font-semibold text-[#7b8193]">Company</span>
                    <div className="text-lg text-[#11182d]">{currentMatch.company}</div>
                  </div>
                  <div>
                    <span className="font-semibold text-[#7b8193]">Stack Fit</span>
                    <div className="text-lg text-[#11182d]">{currentMatch.stack}</div>
                  </div>
                  <div>
                    <span className="font-semibold text-[#7b8193]">ICP Match</span>
                    <div className="text-lg text-[#11182d]">{currentMatch.icp}</div>
                  </div>
                  <div>
                    <span className="font-semibold text-[#7b8193]">Budget Fit</span>
                    <div className="text-lg text-[#11182d]">{currentMatch.budget}</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-[#e5e7ef]">
                  <button
                    onClick={() => handleMatchAction("decline")}
                    className="border-r border-[#e5e7ef] bg-white py-4 text-lg font-semibold text-rose-500 transition hover:bg-rose-50"
                  >
                    Decline
                  </button>
                  <button
                    onClick={() => handleMatchAction("accept")}
                    className="bg-white py-4 text-lg font-semibold text-emerald-500 transition hover:bg-emerald-50"
                  >
                    Accept Intro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="How it works"
            title="From profile to conversation in five steps"
            subtitle="A simple, transparent process that respects everyone’s time."
            dark={false}
          />
          <div className="mt-10 space-y-6">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex items-start gap-5 rounded-[30px] border border-[#d9deeb] bg-white p-6 shadow-[0_14px_40px_rgba(15,23,48,0.05)] md:p-7">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#4166ff] to-[#7c4df0] text-white shadow-[0_14px_34px_rgba(65,102,255,0.22)]">
                    <Icon size={34} />
                  </div>
                  <div className="pt-1">
                    <div className="text-[18px] font-semibold text-[#4166ff]">{item.step}</div>
                    <h3 className="mt-2 text-[30px] font-extrabold tracking-[-0.04em] text-[#0f1730]">{item.title}</h3>
                    <p className="mt-4 text-[18px] leading-9 text-[#6b7285]">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="Platform"
            title="Built for both sides of the table"
            subtitle="Whether you're buying or selling, Mutualy ensures every interaction is worth your time."
            dark={false}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <SideCard
              eyebrow="For Buyers"
              title="Discover, don't get spammed"
              text="Create a profile, set your priorities, and only hear from vendors that match your needs. You're always in control."
              bullets={buyerBullets}
              cta="Join as a Buyer — It's Free"
              ctaHref="https://form.typeform.com/to/oLtDvuLX"
              accent="buyer"
            />
            <SideCard
              eyebrow="For Vendors"
              title="Sell to people who want to buy"
              text="Define your ideal customer profile. Mutualy matches you with buyers who fit — and who’ve opted in to hear from you."
              bullets={vendorBullets}
              cta="Join as a Vendor"
              ctaHref="https://form.typeform.com/to/oYc6xZr0"
              accent="vendor"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#04112b] py-14 text-white md:py-20">
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.34) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <SectionHeader
              eyebrow="Matching Engine"
              title="Intelligent matching across every dimension"
              subtitle="Mutualy scores compatibility on the signals that matter — so every introduction has real potential."
              dark
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {matchSignals.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#4166ff] to-[#7c4df0] text-white">
                      <Icon size={30} />
                    </div>
                    <h3 className="mt-8 text-[24px] font-bold tracking-[-0.03em] text-white">{item.title}</h3>
                    <p className="mt-4 text-[18px] leading-9 text-white/46">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-[30px] border border-[#2fd7c1]/25 bg-[linear-gradient(180deg,rgba(20,53,86,0.64),rgba(10,26,56,0.6))] p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
              <h3 className="text-[28px] font-extrabold tracking-[-0.04em] text-white md:text-[36px]">Permission-Based Pipeline™</h3>
              <p className="mx-auto mt-5 max-w-4xl text-[19px] leading-9 text-white/52">
                Every introduction on Mutualy requires buyer consent. Vendors never reach out cold — buyers choose to engage. This creates a pipeline built on mutual interest, not interruption.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing-coming" className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple pricing for vendors. Free for buyers."
            subtitle="Buyers always join free. Vendor plans are rolling out through curated early access."
            dark={false}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <PricingCard
              title="Early Access"
              price="Coming soon"
              subtitle="For vendors exploring Mutualy first"
              bullets={[
                "Priority waitlist access",
                "Early category entry",
                "Founding vendor consideration",
                "Curated onboarding",
              ]}
              cta="Join waitlist"
              href="https://form.typeform.com/to/Vx8Qdbfu"
            />
            <PricingCard
              title="Premium"
              price="Custom"
              subtitle="For vendors ready for priority matching and insights"
              bullets={[
                "Priority matching",
                "Advanced ICP insights",
                "Higher visibility",
                "Dedicated support",
              ]}
              cta="Request early access"
              href="https://form.typeform.com/to/oYc6xZr0"
              featured
              badge="Most Popular"
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              subtitle="Tailored for larger teams with workflow needs"
              bullets={[
                "Everything in Premium",
                "Custom matching rules",
                "Workflow guidance",
                "Priority support",
              ]}
              cta="Talk to us"
              href="https://form.typeform.com/to/oYc6xZr0"
            />
          </div>

          <p className="mt-8 text-center text-[18px] leading-8 text-[#6f7688]">
            🎉 Buyers join Mutualy completely free. No credit card required.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="Built for"
            title="Built for modern revenue teams and procurement leaders"
            subtitle="Mutualy is being designed around a simple principle: better B2B conversations start with fit, context, and permission."
            dark={false}
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Permission-based",
                text: "Every introduction is designed to begin with buyer awareness and control.",
              },
              {
                title: "Fit-first",
                text: "Matches are based on relevance, priorities, and buying context instead of pure volume.",
              },
              {
                title: "Lower-noise pipeline",
                text: "Built to reduce cold outreach and increase conversation quality.",
              },
              {
                title: "Early-access product",
                text: "We’re intentionally building with care before publicly claiming customer traction.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#d9deeb] bg-white p-7 shadow-[0_14px_40px_rgba(15,23,48,0.04)] md:p-8"
              >
                <div className="text-[24px] font-bold tracking-[-0.03em] text-[#11182d]">{item.title}</div>
                <div className="mt-4 text-[18px] leading-8 text-[#6b7285]">{item.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-10 text-center md:px-6 md:py-12">
          <div className="rounded-[32px] border border-[#d9deeb] bg-white p-8 shadow-[0_14px_40px_rgba(15,23,48,0.04)] md:p-10">
            <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[#4166ff]">
              Pre-launch note
            </div>
            <div className="mt-5 text-[28px] font-extrabold leading-[1.25] tracking-[-0.03em] text-[#11182d] md:text-[40px]">
              Mutualy is currently in early access.
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-[18px] leading-9 text-[#6b7285] md:text-[20px]">
              We are focused on building the right product foundation before publishing customer logos, testimonials, or performance claims. Early-access members help shape the experience.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://form.typeform.com/to/Vx8Qdbfu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[22px] bg-gradient-to-r from-[#4166ff] via-[#3b91f6] to-[#34d3c5] px-7 py-5 text-[18px] font-semibold text-white shadow-[0_18px_50px_rgba(41,106,255,0.20)]"
              >
                Join early access
                <ArrowRight className="ml-3" size={22} />
              </a>
              <a
                href="https://form.typeform.com/to/oLtDvuLX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[22px] bg-[#f4f6fb] px-7 py-5 text-[18px] font-semibold text-[#11182d]"
              >
                Apply as a buyer
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            subtitle="Answers to the most common questions about the platform."
            dark={false}
          />

          <div className="mt-10 space-y-5">
            {faqs.map((item, index) => {
              const isOpen = faqOpen === index;
              return (
                <button
                  key={item.q}
                  onClick={() => setFaqOpen(isOpen ? null : index)}
                  className="w-full rounded-[28px] border border-[#d9deeb] bg-white px-6 py-7 text-left shadow-[0_12px_34px_rgba(15,23,48,0.04)] transition"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[24px] font-bold tracking-[-0.03em] text-[#11182d] md:text-[28px]">{item.q}</div>
                    <ChevronDown className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`} size={28} />
                  </div>
                  {isOpen && <div className="mt-5 max-w-4xl text-[18px] leading-9 text-[#6b7285]">{item.a}</div>}
                </button>
              );
            })}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#04112b] py-16 text-white md:py-20">
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.34) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(64,112,255,0.22),transparent_60%)]" />

          <div className="relative mx-auto max-w-5xl px-5 text-center md:px-6">
            <h2 className="text-[48px] font-extrabold leading-[1.02] tracking-[-0.06em] md:text-[76px]">
              Stop spraying and praying.{" "}
              <span className="bg-gradient-to-r from-[#4166ff] via-[#3b91f6] to-[#34d3c5] bg-clip-text text-transparent">
                Start matching.
              </span>
            </h2>
            <p className="mx-auto mt-7 max-w-4xl text-[19px] leading-9 text-white/50 md:text-[22px]">
              Join the platform where B2B conversations start with mutual interest, verified fit, and real buying intent.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://form.typeform.com/to/oLtDvuLX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[22px] bg-gradient-to-r from-[#4166ff] via-[#3b91f6] to-[#34d3c5] px-8 py-5 text-[18px] font-semibold text-white shadow-[0_18px_50px_rgba(41,106,255,0.26)]"
              >
                Join as a Buyer — Free
              </a>
              <a
                href="https://form.typeform.com/to/Vx8Qdbfu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[22px] border border-white/10 bg-white/5 px-8 py-5 text-[18px] font-semibold text-white"
              >
                Join waitlist
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-[#020617] px-5 py-10 text-center md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-[28px] font-extrabold tracking-[-0.03em] text-white">Mutualy</div>
          <p className="mt-3 text-[16px] leading-8 text-white/42">Permission-based B2B matchmaking.</p>
          <div className="mt-6 flex justify-center gap-6 text-[15px] text-white/55">
            <a href="#faq">FAQ</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center">
      <div className={`text-[16px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-[#34d3c5]" : "text-[#4166ff]"}`}>
        {eyebrow}
      </div>
      <h2 className={`mx-auto mt-4 max-w-5xl text-[46px] font-extrabold leading-[1.05] tracking-[-0.06em] md:text-[76px] ${dark ? "text-white" : "text-[#0f1730]"}`}>
        {title}
      </h2>
      <p className={`mx-auto mt-6 max-w-4xl text-[19px] leading-9 md:text-[22px] ${dark ? "text-white/48" : "text-[#6b7285]"}`}>
        {subtitle}
      </p>
    </div>
  );
}

function SideCard({
  eyebrow,
  title,
  text,
  bullets,
  cta,
  ctaHref,
  accent,
}: {
  eyebrow: string;
  title: string;
  text: string;
  bullets: readonly string[];
  cta: string;
  ctaHref: string;
  accent: "buyer" | "vendor";
}) {
  const buyer = accent === "buyer";
  return (
    <div className={`rounded-[32px] border p-8 md:p-9 ${buyer ? "border-[#bcebe3] bg-[#effaf8]" : "border-[#cdd0fb] bg-[#f1f2ff]"}`}>
      <div className={`text-[18px] font-semibold uppercase tracking-[0.18em] ${buyer ? "text-[#34d3c5]" : "text-[#4166ff]"}`}>
        {eyebrow}
      </div>
      <h3 className="mt-5 text-[46px] font-extrabold leading-[1.1] tracking-[-0.05em] text-[#11182d]">{title}</h3>
      <p className="mt-6 text-[19px] leading-9 text-[#6b7285]">{text}</p>

      <div className="mt-7 space-y-5">
        {bullets.map((bullet) => (
          <div key={bullet} className="flex items-start gap-3 text-[18px] leading-8 text-[#11182d]">
            <span className="mt-1 text-[#34d3c5]">✓</span>
            <span>{bullet}</span>
     