"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";

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
    a: "Vendor pricing is currently handled through curated early-access conversations.",
  },
];

const demoMatches = [
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
      "Pipeline forecasting and seller guidance built for fast-growing GTM teams.",
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
];

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#7b8193" }}>{label}</div>
      <div style={{ marginTop: 6, fontSize: 18, color: "#11182d" }}>{value}</div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#4166ff",
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          margin: "12px auto 0",
          maxWidth: 900,
          fontSize: "clamp(36px, 6vw, 72px)",
          lineHeight: 1.05,
          fontWeight: 800,
          color: "#0f1730",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: "20px auto 0",
          maxWidth: 900,
          fontSize: 20,
          lineHeight: 1.8,
          color: "#6b7285",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  subtitle,
  bullets,
  cta,
  href,
  featured = false,
  badge,
}: {
  title: string;
  price: string;
  subtitle: string;
  bullets: string[];
  cta: string;
  href: string;
  featured?: boolean;
  badge?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 28,
        border: featured ? "1px solid #cdd0fb" : "1px solid #d9deeb",
        background: "white",
        padding: 28,
        boxShadow: "0 16px 42px rgba(15,23,48,0.05)",
      }}
    >
      {badge && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translate(-50%, -50%)",
            borderRadius: 999,
            background: "linear-gradient(90deg, #4166ff, #7b4df1)",
            padding: "8px 18px",
            color: "white",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          {badge}
        </div>
      )}

      <div style={{ fontSize: 28, fontWeight: 700, color: "#11182d" }}>{title}</div>
      <div style={{ marginTop: 20, fontSize: 52, fontWeight: 800, color: "#11182d" }}>
        {price}
      </div>
      <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.8, color: "#6b7285" }}>
        {subtitle}
      </p>

      <div style={{ display: "grid", gap: 14, marginTop: 24 }}>
        {bullets.map((bullet) => (
          <div
            key={bullet}
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              fontSize: 18,
              lineHeight: 1.8,
              color: "#11182d",
            }}
          >
            <span style={{ color: "#34d3c5" }}>✓</span>
            <span>{bullet}</span>
          </div>
        ))}
      </div>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          marginTop: 24,
          display: "inline-flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          borderRadius: 20,
          padding: "18px 24px",
          textDecoration: "none",
          fontSize: 18,
          fontWeight: 700,
          color: featured ? "white" : "#11182d",
          background: featured
            ? "linear-gradient(90deg, #4166ff, #7b4df1)"
            : "#f0f1f6",
        }}
      >
        {cta}
        <ArrowRight size={20} />
      </a>
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [matchIndex, setMatchIndex] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);

  const currentMatch = demoMatches[matchIndex];

  const handleMatchAction = (action: "accept" | "decline") => {
    if (action === "accept") {
      setAcceptedCount((prev) => prev + 1);
    }
    setMatchIndex((prev) => (prev + 1) % demoMatches.length);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef1f7",
        color: "#0f1730",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#04112b",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "white",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 28,
            }}
          >
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #4166ff, #34d3c5)",
                color: "white",
                fontWeight: 800,
              }}
            >
              M
            </span>
            Mutualy
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            <Menu size={34} />
          </button>
        </div>

        {menuOpen && (
          <div
            style={{
              padding: "0 20px 20px",
              color: "rgba(255,255,255,0.8)",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div style={{ display: "grid", gap: 14 }}>
              <a href="#how-it-works" style={{ color: "white", textDecoration: "none" }}>
                How it works
              </a>
              <a href="#demo" style={{ color: "white", textDecoration: "none" }}>
                Demo
              </a>
              <a href="#pricing" style={{ color: "white", textDecoration: "none" }}>
                Pricing
              </a>
              <a href="#faq" style={{ color: "white", textDecoration: "none" }}>
                FAQ
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section
          style={{
            background: "#04112b",
            color: "white",
            padding: "56px 20px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 999,
                border: "1px solid rgba(65,102,255,0.25)",
                padding: "10px 16px",
                fontSize: 14,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              <span style={{ color: "#34d3c5", marginRight: 10 }}>●</span>
              Now in early access
            </div>

            <h1
              style={{
                fontSize: "clamp(48px, 9vw, 92px)",
                lineHeight: 0.98,
                fontWeight: 800,
                marginTop: 28,
                marginBottom: 24,
                maxWidth: 900,
              }}
            >
              B2B introductions buyers{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #4166ff, #34d3c5)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                actually want
              </span>
            </h1>

            <p
              style={{
                maxWidth: 820,
                fontSize: 20,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.62)",
              }}
            >
              Mutualy replaces cold outreach with permission-based matchmaking.
              Buyers set their priorities. Vendors match on fit. Only relevant
              conversations happen.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                marginTop: 28,
              }}
            >
              <a
                href="https://form.typeform.com/to/Vx8Qdbfu"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "18px 28px",
                  borderRadius: 20,
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 700,
                  background: "linear-gradient(90deg, #4166ff, #34d3c5)",
                }}
              >
                Join Mutualy
                <ArrowRight size={20} />
              </a>

              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "18px 28px",
                  borderRadius: 20,
                  textDecoration: "none",
                  color: "#18203a",
                  fontWeight: 700,
                  background: "white",
                }}
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        <section id="demo" style={{ maxWidth: 960, margin: "0 auto", padding: "64px 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#4166ff",
              }}
            >
              Try it yourself
            </div>
            <h2 style={{ fontSize: "clamp(34px, 6vw, 56px)", margin: "12px 0" }}>
              See how matching feels
            </h2>
            <p style={{ fontSize: 20, color: "#6b7285", lineHeight: 1.7 }}>
              Click through real-looking vendor matches on the page. Accept the
              ones that fit, decline the rest.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 16,
              color: "#6b7285",
              fontSize: 15,
            }}
          >
            <span>
              {matchIndex + 1} of {demoMatches.length} matches
            </span>
            <span>{acceptedCount} accepted</span>
          </div>

          <div
            style={{
              border: "1px solid #d9deeb",
              background: "white",
              borderRadius: 28,
              padding: 24,
              boxShadow: "0 20px 60px rgba(15,23,48,0.12)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <div style={{ display: "flex", gap: 16 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 24,
                    color: "white",
                    background: "linear-gradient(135deg, #4166ff, #7b4df1)",
                  }}
                >
                  {currentMatch.letter}
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>{currentMatch.name}</div>
                  <div style={{ fontSize: 18, color: "#6b7285" }}>{currentMatch.subtitle}</div>
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 38, fontWeight: 800, color: "#34d3c5" }}>
                  {currentMatch.match}
                </div>
                <div style={{ fontSize: 12, letterSpacing: "0.18em", color: "#9ca3af" }}>
                  MATCH
                </div>
              </div>
            </div>

            <p style={{ marginTop: 20, fontSize: 19, lineHeight: 1.7, color: "#4b5563" }}>
              {currentMatch.description}
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
              {currentMatch.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: "1px solid #d7dcf4",
                    background: "#f7f8fd",
                    color: "#4b5fd6",
                    padding: "8px 14px",
                    borderRadius: 999,
                    fontSize: 13,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                borderTop: "1px solid #e5e7ef",
                marginTop: 24,
                paddingTop: 24,
              }}
            >
              <InfoBlock label="Company" value={currentMatch.company} />
              <InfoBlock label="Stack Fit" value={currentMatch.stack} />
              <InfoBlock label="ICP Match" value={currentMatch.icp} />
              <InfoBlock label="Budget Fit" value={currentMatch.budget} />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginTop: 24,
                border: "1px solid #e5e7ef",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => handleMatchAction("decline")}
                style={{
                  padding: "18px 16px",
                  background: "white",
                  border: "none",
                  borderRight: "1px solid #e5e7ef",
                  color: "#e11d48",
                  fontSize: 18,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Decline
              </button>
              <button
                onClick={() => handleMatchAction("accept")}
                style={{
                  padding: "18px 16px",
                  background: "white",
                  border: "none",
                  color: "#10b981",
                  fontSize: 18,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Accept Intro
              </button>
            </div>
          </div>
        </section>

        <section id="how-it-works" style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 20px 64px" }}>
          <SectionHeader
            eyebrow="How it works"
            title="From profile to conversation in five steps"
            subtitle="A simple, transparent process that respects everyone’s time."
          />

          <div style={{ display: "grid", gap: 20, marginTop: 40 }}>
            {[
              ["Step 01", "Buyers create a profile", "Share your tech stack, priorities, budget, timeline, and goals in under five minutes."],
              ["Step 02", "Vendors define their ICP", "Describe your ideal customer profile, strongest use cases, and buying signals you serve best."],
              ["Step 03", "Mutualy matches on fit", "We score compatibility across the dimensions that matter most so introductions start with real alignment."],
              ["Step 04", "Buyers accept or decline", "Every introduction is permission-based. Buyers choose whether they want to engage before anything moves forward."],
              ["Step 05", "Aligned conversations begin", "Only relevant matches move forward, creating better meetings and better outcomes for both sides."],
            ].map(([step, title, text]) => (
              <div
                key={step}
                style={{
                  border: "1px solid #d9deeb",
                  background: "white",
                  borderRadius: 28,
                  padding: 24,
                  boxShadow: "0 14px 40px rgba(15,23,48,0.05)",
                }}
              >
                <div style={{ color: "#4166ff", fontWeight: 700, fontSize: 18 }}>{step}</div>
                <h3 style={{ margin: "10px 0 0", fontSize: 30 }}>{title}</h3>
                <p style={{ marginTop: 14, color: "#6b7285", lineHeight: 1.8, fontSize: 18 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px 64px" }}>
          <SectionHeader
            eyebrow="Pricing"
            title="Simple pricing for vendors. Free for buyers."
            subtitle="Buyers always join free. Vendor plans are rolling out through curated early access."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              marginTop: 40,
            }}
          >
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
        </section>

        <section id="faq" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px 64px" }}>
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            subtitle="Answers to the most common questions about the platform."
          />

          <div style={{ display: "grid", gap: 18, marginTop: 40 }}>
            {faqs.map((item, index) => {
              const isOpen = faqOpen === index;
              return (
                <button
                  key={item.q}
                  onClick={() => setFaqOpen(isOpen ? null : index)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    border: "1px solid #d9deeb",
                    background: "white",
                    borderRadius: 24,
                    padding: 24,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 16,
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: 24, fontWeight: 700, color: "#11182d" }}>
                      {item.q}
                    </div>
                    <ChevronDown
                      size={28}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "0.2s ease",
                      }}
                    />
                  </div>
                  {isOpen && (
                    <div style={{ marginTop: 16, fontSize: 18, lineHeight: 1.8, color: "#6b7285" }}>
                      {item.a}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
