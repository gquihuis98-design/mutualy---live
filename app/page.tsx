"use client";

import { useEffect, useMemo, useState } from "react";

const FAQS = [
  {
    q: "Why are buyers free?",
    a: "Mutualy keeps buyers free to maximize demand and ensures vendors meet real, high-intent demand.",
  },
  {
    q: "What counts as a qualified intro?",
    a: "A qualified intro is a buyer-vendor match with alignment across category, timing, company size, and buying context.",
  },
  {
    q: "How is this different from outbound?",
    a: "Mutualy is built around mutual fit instead of cold outreach, which helps teams spend less time prospecting and more time in relevant conversations.",
  },
  {
    q: "Can vendors start small?",
    a: "Yes. Vendors can apply for launch access first, then grow into larger plans as Mutualy proves itself as a pipeline channel.",
  },
];

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const STATS = [
  { value: "2-sided", label: "fit logic" },
  { value: "94%", label: "fit confidence" },
  { value: "Free", label: "for buyers" },
];

export default function Home() {
  const [viewportWidth, setViewportWidth] = useState(1280);
  const [showWaitlistModal, setShowWaitlistModal] = useState(true);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = viewportWidth < 768;
  const isTablet = viewportWidth >= 768 && viewportWidth < 1100;

  const layout = useMemo(
    () => ({
      pagePadding: isMobile ? "0 18px" : "0 28px",
      heroGrid: {
        display: "grid",
        gridTemplateColumns: isMobile || isTablet ? "1fr" : "1.08fr 0.92fr",
        gap: isMobile ? 22 : 28,
        padding: isMobile ? "34px 0 24px" : "56px 0 36px",
      } as React.CSSProperties,
      dualGrid: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: 16,
      } as React.CSSProperties,
      tripleGrid: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
        gap: 14,
      } as React.CSSProperties,
      pricingGrid: {
        display: "grid",
        gridTemplateColumns: isMobile || isTablet ? "1fr" : "0.88fr 1.12fr",
        gap: 16,
        marginTop: 18,
      } as React.CSSProperties,
      navRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 14 : 20,
        padding: isMobile ? "18px 0" : "20px 0",
      } as React.CSSProperties,
      buttonRow: {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 12,
        alignItems: isMobile ? "stretch" : "center",
      } as React.CSSProperties,
    }),
    [isMobile, isTablet]
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 30%), radial-gradient(circle at 82% 18%, rgba(34,197,94,0.08), transparent 20%), radial-gradient(circle at bottom, rgba(168,85,247,0.12), transparent 30%), #0a0f1d",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {showWaitlistModal ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(5,10,20,0.72)",
            backdropFilter: "blur(10px)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 560,
              border: "1px solid rgba(255,255,255,0.1)",
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(10,15,29,0.96), rgba(167,139,250,0.12))",
              borderRadius: 28,
              padding: isMobile ? 24 : 30,
              boxShadow: "0 25px 80px rgba(0,0,0,0.38)",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowWaitlistModal(false)}
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                width: 38,
                height: 38,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                color: "white",
                cursor: "pointer",
                fontSize: 18,
              }}
              aria-label="Close waitlist popup"
            >
              ×
            </button>

            <div style={eyebrow}>Early access</div>
            <h2
              style={{
                fontSize: isMobile ? 30 : 40,
                lineHeight: 1.08,
                letterSpacing: -1.1,
                margin: "16px 0 12px",
                maxWidth: 440,
              }}
            >
              We’re not fully launched yet.
              <span
                style={{
                  display: "block",
                  background:
                    "linear-gradient(90deg, #7dd3fc 0%, #38bdf8 48%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Join the waitlist.
              </span>
            </h2>
            <p style={{ ...mutedText, marginTop: 0, maxWidth: 470 }}>
              Mutualy is opening access in phases. Join the waitlist to get launch
              updates, early access news, and priority entry as new categories go live.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 12,
                marginTop: 22,
              }}
            >
              <a
                href="https://form.typeform.com/to/Vx8Qdbfu"
                target="_blank"
                rel="noreferrer"
                style={{ ...buttonPrimary, textAlign: "center" }}
              >
                Join waitlist
              </a>
              <button
                onClick={() => setShowWaitlistModal(false)}
                style={{ ...buttonSecondary, textAlign: "center", cursor: "pointer" }}
              >
                Continue to site
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: layout.pagePadding }}>
        <header style={{ ...layout.navRow, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Logo />
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.4 }}>Mutualy</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.54)" }}>
                Premium B2B matchmaking
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 14 : 20,
              flexDirection: isMobile ? "column" : "row",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <nav
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {NAV_LINKS.map((item) => (
                <a key={item.label} href={item.href} style={navLink}>
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => setShowWaitlistModal(true)}
              style={{
                ...buttonGhost,
                width: isMobile ? "100%" : "auto",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Join waitlist
            </button>
          </div>
        </header>

        <section style={layout.heroGrid}>
          <div>
            <div style={eyebrow}>Built for mutual buyer-seller fit</div>
            <h1
              style={{
                fontSize: isMobile ? 38 : isTablet ? 48 : 62,
                lineHeight: isMobile ? 1.08 : 1.02,
                letterSpacing: isMobile ? -1 : -2,
                margin: "16px 0 14px",
                maxWidth: 720,
              }}
            >
              Replace cold outbound with
              <span
                style={{
                  display: "block",
                  background:
                    "linear-gradient(90deg, #7dd3fc 0%, #38bdf8 48%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                mutual-fit introductions.
              </span>
            </h1>
            <p
              style={{
                maxWidth: 700,
                fontSize: isMobile ? 17 : 19,
                lineHeight: 1.72,
                color: "rgba(255,255,255,0.72)",
                margin: 0,
              }}
            >
              Mutualy helps buyers discover relevant vendors and gives vendors premium access to better-fit opportunities — based on category, priorities, timing, budget, and intent.
            </p>

            <div style={{ ...layout.buttonRow, marginTop: 22 }}>
              <a href="#vendors" style={{ ...buttonPrimary, textAlign: "center" }}>
                Apply as a Vendor
              </a>
              <a href="#buyers" style={{ ...buttonSecondary, textAlign: "center" }}>
                Apply as a Buyer
              </a>
            </div>

            <div
              style={{
                marginTop: 24,
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0,1fr))",
                gap: 12,
              }}
            >
              {STATS.map((item) => (
                <div key={item.label} style={metricCard}>
                  <div style={{ fontSize: 24, fontWeight: 700 }}>{item.value}</div>
                  <div
                    style={{
                      marginTop: 4,
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: 1.1,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={heroShell}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                flexDirection: isMobile ? "column" : "row",
                gap: 10,
              }}
            >
              <div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.52)" }}>
                  Live matching signal
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>
                  Mutual fit engine
                </div>
              </div>
              <div style={successBadge}>94% fit confidence</div>
            </div>

            <div style={{ marginTop: 14, display: "grid", gap: 12 }}>
              <MatchCard
                buyer="Series B SaaS buyer"
                seller="Revenue enablement platform"
                reason="Strong alignment across tech stack, initiative, and timing"
                isMobile={isMobile}
              />
              <MatchCard
                buyer="Enterprise security leader"
                seller="Compliance automation vendor"
                reason="Buying window open with matching requirements and team size"
                isMobile={isMobile}
              />
              <div style={signalPanel}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <span style={miniLabel}>Platform signals</span>
                  <span style={{ color: "rgba(255,255,255,0.48)", fontSize: 12 }}>
                    3 of 3 aligned
                  </span>
                </div>
                <ProgressRow label="Category fit" width="96%" />
                <ProgressRow label="Timeline fit" width="89%" />
                <ProgressRow label="Budget fit" width="91%" />
              </div>
            </div>
          </div>
        </section>

        <Section
          id="how-it-works"
          title="How it works"
          subtitle="A cleaner path from profile to qualified conversation."
          compact
        >
          <div style={layout.tripleGrid}>
            <StepCard
              step="01"
              title="Create your profile"
              text="Buyers and vendors submit structured details around category, timing, size, goals, and priorities."
            />
            <StepCard
              step="02"
              title="Mutualy scores fit"
              text="Mutualy evaluates alignment signals and surfaces higher-quality matches instead of noisy lists."
            />
            <StepCard
              step="03"
              title="Get introduced"
              text="When both sides make sense, Mutualy opens the door to a more relevant conversation."
            />
          </div>
        </Section>

        <Section
          id="pricing"
          title="Pricing"
          subtitle="Premium access for vendors. Free access for buyers."
          compact
        >
          <div style={layout.pricingGrid}>
            <div style={buyerCard}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  alignItems: "flex-start",
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <div>
                  <div style={{ color: "#a7f3d0", fontWeight: 700, fontSize: 14 }}>
                    Buyer access
                  </div>
                  <div style={{ fontSize: 38, fontWeight: 700, marginTop: 8 }}>
                    Free
                  </div>
                </div>
                <div style={successBadge}>Always free</div>
              </div>
              <p style={mutedText}>
                Buyers should never pay to discover relevant vendors. Free access keeps
                demand strong and the network high-intent.
              </p>
              <div style={listWrap}>
                <div>• Share your priorities, timing, and buying context</div>
                <div>• Get surfaced to vendors only when there is mutual fit</div>
                <div>• Submit reviews to improve trust and quality over time</div>
              </div>
            </div>

            <div style={layout.dualGrid}>
              <PricingCard
                title="Vendor Select"
                price="$499"
                cadence="per month"
                badge="Launch tier"
                description="For vendors who want premium access to mutual-fit opportunities without jumping into a large program first."
                features={[
                  "Premium vendor profile",
                  "Curated buyer matches",
                  "Core fit signals and category alignment",
                  "Up to 5 introductions per month",
                ]}
              />
              <PricingCard
                title="Vendor Elite"
                price="$1,500"
                cadence="per month"
                badge="Most premium"
                featured
                description="For teams ready to treat Mutualy like a strategic growth channel with priority visibility and deeper signal access."
                features={[
                  "Everything in Vendor Select",
                  "Priority placement in premium categories",
                  "Advanced fit and intent visibility",
                  "Up to 20 introductions per month",
                ]}
              />
            </div>
          </div>

          <div style={{ ...subtlePanel, marginTop: 14 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
                gap: 14,
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>
                  Optional success-based pricing
                </div>
                <p style={{ ...mutedText, marginTop: 8 }}>
                  For launch partners, Mutualy can layer in curated intro fees for
                  especially high-value opportunities.
                </p>
              </div>
              <div style={cyanPanelCompact}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    color: "#cffafe",
                    letterSpacing: 1.2,
                  }}
                >
                  Curated intro fee
                </div>
                <div style={{ fontSize: 30, fontWeight: 700, marginTop: 4 }}>
                  $150
                </div>
              </div>
            </div>
          </div>
        </Section>

        <FormSection
          id="buyers"
          badge="For Buyers"
          title="Find vendors that actually fit your goals."
          text="Tell Mutualy what your team is evaluating, what tools you already use, and what matters most. Mutualy uses that signal to surface relevant vendors with real fit."
          bullets={[
            "Share your stack, priorities, and timeline",
            "Highlight urgency, initiative, and budget context",
            "Get matched only when fit and buyer intent align",
          ]}
          cta="Apply as a Buyer"
          href="https://form.typeform.com/to/oLtDvuLX"
          visual={<BuyerVisual isMobile={isMobile} />}
          isMobile={isMobile}
          isTablet={isTablet}
        />

        <FormSection
          id="vendors"
          badge="For Vendors"
          reverse
          title="Meet buyers with stronger fit signals and better timing."
          text="Create a vendor profile with your ICP, strongest use cases, and ideal buyer signals so Mutualy can route you into higher-quality opportunities instead of more outbound noise."
          bullets={[
            "Define your best-fit buyers and company sizes",
            "Show the outcomes and problems you solve best",
            "Get surfaced when buyer intent and qualification align",
          ]}
          cta="Apply as a Vendor"
          href="https://form.typeform.com/to/oYc6xZr0"
          visual={<VendorVisual isMobile={isMobile} />}
          isMobile={isMobile}
          isTablet={isTablet}
        />

        <Section
          id="faq"
          title="FAQ"
          subtitle="Everything you need to know before joining."
          compact
        >
          <div style={layout.dualGrid}>
            {FAQS.map((item) => (
              <FaqCard key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Section>

        <section style={{ padding: "4px 0 22px" }}>
          <div style={layout.tripleGrid}>
            <QuoteCard
              quote="We replaced cold outbound with qualified intros that were actually worth taking."
              who="VP Revenue, SaaS"
            />
            <QuoteCard
              quote="The fit signal is the difference. Conversations start closer to relevance."
              who="Head of RevOps"
            />
            <QuoteCard
              quote="It feels more like a premium network than another lead source."
              who="CRO, Cybersecurity"
            />
          </div>
        </section>

        <section style={{ padding: "4px 0 22px" }}>
          <div style={ctaPanel}>
            <div>
              <div style={{ fontSize: isMobile ? 28 : 34, fontWeight: 700 }}>
                Start with mutual fit.
              </div>
              <p style={{ ...mutedText, maxWidth: 560, marginTop: 8 }}>
                Apply as a buyer, apply as a vendor, or join the waitlist while
                Mutualy expands access.
              </p>
            </div>
            <div
              style={{
                ...layout.buttonRow,
                justifyContent: isMobile ? "stretch" : "flex-end",
              }}
            >
              <a href="#vendors" style={{ ...buttonPrimary, textAlign: "center" }}>
                Apply as a Vendor
              </a>
              <button
                onClick={() => setShowWaitlistModal(true)}
                style={{ ...buttonSecondary, textAlign: "center", cursor: "pointer" }}
              >
                Join waitlist
              </button>
            </div>
          </div>
        </section>

        <FormSection
          id="reviews"
          badge="Reviews"
          title="Share feedback on your Mutualy experience."
          text="Buyers can submit reviews and feedback so Mutualy can improve match quality and strengthen vendor trust over time."
          bullets={[
            "Leave product and matching feedback",
            "Help improve future recommendations",
            "Strengthen marketplace trust with verified reviews",
          ]}
          cta="Open review form"
          href="https://form.typeform.com/to/XvlS7XLZ"
          isMobile={isMobile}
          isTablet={isTablet}
        />

        <footer
          style={{
            padding: "20px 0 34px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            gap: 12,
            color: "rgba(255,255,255,0.55)",
            fontSize: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Logo small />
            <span>© {new Date().getFullYear()} Mutualy</span>
          </div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            {NAV_LINKS.map((item) => (
              <a key={item.label} href={item.href} style={footerLink}>
                {item.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  subtitle,
  compact,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  compact?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ padding: compact ? "4px 0 22px" : "6px 0 24px" }}>
      <div style={sectionPanel}>
        <div style={eyebrow}>{title}</div>
        {subtitle ? (
          <h2
            style={{
              fontSize: 34,
              margin: "14px 0 0",
              fontWeight: 700,
              letterSpacing: -1.2,
            }}
          >
            {subtitle}
          </h2>
        ) : null}
        <div style={{ marginTop: subtitle ? 16 : 0 }}>{children}</div>
      </div>
    </section>
  );
}

function FormSection({
  id,
  badge,
  title,
  text,
  bullets,
  cta,
  href,
  reverse,
  visual,
  isMobile,
  isTablet,
}: {
  id: string;
  badge: string;
  title: string;
  text: string;
  bullets: string[];
  cta: string;
  href: string;
  reverse?: boolean;
  visual?: React.ReactNode;
  isMobile: boolean;
  isTablet: boolean;
}) {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns:
      isMobile || isTablet ? "1fr" : reverse ? "1fr 1.02fr" : "1.02fr 1fr",
    gap: 18,
    alignItems: "stretch",
  };

  const textCol = (
    <div style={sectionCol}>
      <div style={eyebrow}>{badge}</div>
      <h3
        style={{
          fontSize: isMobile ? 28 : 34,
          margin: "14px 0 0",
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        {title}
      </h3>
      <p style={{ ...mutedText, maxWidth: 560 }}>{text}</p>
      <div style={listWrap}>
        {bullets.map((item) => (
          <div key={item}>• {item}</div>
        ))}
      </div>
    </div>
  );

  const formColNode = (
    <div style={formCol}>
      {visual}
      <FormPanel cta={cta} href={href} isMobile={isMobile} />
    </div>
  );

  return (
    <section id={id} style={{ padding: "4px 0 22px" }}>
      <div style={sectionPanel}>
        <div style={gridStyle}>
          {!reverse || isMobile || isTablet ? (
            <>
              {textCol}
              {formColNode}
            </>
          ) : (
            <>
              {formColNode}
              {textCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function FormPanel({
  cta,
  href,
  isMobile,
}: {
  cta: string;
  href: string;
  isMobile: boolean;
}) {
  return (
    <div style={formPanel}>
      <div style={iconWrap}>↗</div>
      <div style={{ fontSize: isMobile ? 24 : 28, fontWeight: 700 }}>
        Open the form in a new tab
      </div>
      <p style={{ ...mutedText, maxWidth: 460, margin: "10px auto 0" }}>
        The in-app preview can block embedded Typeforms. Opening the form directly
        keeps the experience clean and reliable.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          ...buttonPrimary,
          display: "inline-block",
          marginTop: 18,
          width: isMobile ? "100%" : "auto",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {cta}
      </a>
    </div>
  );
}

function BuyerVisual({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={visualBox}>
      <div
        style={{
          ...visualHeader,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <div>
          <div style={miniLabel}>Buyer snapshot</div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Qualified demand profile</div>
        </div>
        <div style={successBadge}>Intent verified</div>
      </div>
      <div style={{ ...twoCol, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
        <MiniCard title="Priorities" text="Security, RevOps, AI workflow" />
        <MiniCard title="Budget band" text="$25k–$75k annual" />
      </div>
      <div style={signalPanel}>
        <ProgressRow label="Tech stack" width="92%" />
        <ProgressRow label="Timeline" width="89%" />
        <ProgressRow label="Use case match" width="96%" />
      </div>
    </div>
  );
}

function VendorVisual({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={visualBox}>
      <div
        style={{
          ...visualHeader,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <div>
          <div style={miniLabel}>Vendor snapshot</div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Go-to-market profile</div>
        </div>
        <div style={cyanBadge}>ICP aligned</div>
      </div>
      <div style={{ ...twoCol, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
        <MiniCard title="Best-fit segment" text="Mid-market to enterprise" />
        <MiniCard title="Use-case strength" text="Compliance, enablement, ROI" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
          gap: 10,
        }}
      >
        <StatCard stat="52" label="buyer signals" />
        <StatCard stat="18" label="open categories" />
        <StatCard stat="91%" label="fit accuracy" />
      </div>
    </div>
  );
}

function ProgressRow({ label, width }: { label: string; width: string }) {
  return (
    <div style={{ marginTop: 12 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 6,
        }}
      >
        <span>{label}</span>
        <span>{width}</span>
      </div>
      <div
        style={{
          height: 8,
          borderRadius: 999,
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width,
            height: 8,
            borderRadius: 999,
            background: "linear-gradient(90deg, #7dd3fc, #38bdf8, #a78bfa)",
          }}
        />
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  cadence,
  badge,
  description,
  features,
  featured,
}: {
  title: string;
  price: string;
  cadence: string;
  badge: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div style={{ ...pricingCardBase, ...(featured ? pricingCardFeatured : {}) }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "flex-start",
        }}
      >
        <div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>{title}</div>
          <div style={{ ...mutedText, fontSize: 14 }}>{description}</div>
        </div>
        <div style={featured ? cyanBadge : neutralBadge}>{badge}</div>
      </div>
      <div
        style={{
          marginTop: 18,
          display: "flex",
          alignItems: "end",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700 }}>{price}</div>
        <div style={{ color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>{cadence}</div>
      </div>
      <div style={{ ...listWrap, marginTop: 14 }}>
        {features.map((feature) => (
          <div key={feature}>• {feature}</div>
        ))}
      </div>
    </div>
  );
}

function MatchCard({
  buyer,
  seller,
  reason,
  isMobile,
}: {
  buyer: string;
  seller: string;
  reason: string;
  isMobile: boolean;
}) {
  return (
    <div style={matchCard}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 14,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <div>
          <div style={miniLabel}>Buyer</div>
          <div style={{ marginTop: 5, fontWeight: 600 }}>{buyer}</div>
        </div>
        {!isMobile ? <div style={{ color: "#67e8f9" }}>×</div> : null}
        <div style={{ textAlign: isMobile ? "left" : "right" }}>
          <div style={miniLabel}>Vendor</div>
          <div style={{ marginTop: 5, fontWeight: 600 }}>{seller}</div>
        </div>
      </div>
      <div style={matchReason}>{reason}</div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div style={compactCard}>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ marginTop: 8, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
        {text}
      </div>
    </div>
  );
}

function QuoteCard({ quote, who }: { quote: string; who: string }) {
  return (
    <div style={compactCard}>
      <div style={{ lineHeight: 1.7, color: "rgba(255,255,255,0.82)" }}>
        “{quote}”
      </div>
      <div
        style={{
          marginTop: 12,
          fontSize: 12,
          color: "rgba(255,255,255,0.44)",
          textTransform: "uppercase",
          letterSpacing: 1.2,
        }}
      >
        {who}
      </div>
    </div>
  );
}

function FaqCard({ q, a }: { q: string; a: string }) {
  return (
    <div style={compactCard}>
      <div style={{ fontSize: 18, fontWeight: 700 }}>{q}</div>
      <div style={{ marginTop: 10, lineHeight: 1.7, color: "rgba(255,255,255,0.64)" }}>
        {a}
      </div>
    </div>
  );
}

function StepCard({ step, title, text }: { step: string; title: string; text: string }) {
  return (
    <div style={compactCard}>
      <div
        style={{
          fontSize: 12,
          color: "#a5f3fc",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.2,
        }}
      >
        {step}
      </div>
      <div style={{ fontSize: 21, fontWeight: 700, marginTop: 10 }}>{title}</div>
      <div style={{ marginTop: 10, lineHeight: 1.7, color: "rgba(255,255,255,0.64)" }}>
        {text}
      </div>
    </div>
  );
}

function MiniCard({ title, text }: { title: string; text: string }) {
  return (
    <div style={compactCard}>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ marginTop: 6, fontSize: 14, color: "rgba(255,255,255,0.54)" }}>
        {text}
      </div>
    </div>
  );
}

function StatCard({ stat, label }: { stat: string; label: string }) {
  return (
    <div style={{ ...compactCard, textAlign: "center" }}>
      <div style={{ fontSize: 26, fontWeight: 700 }}>{stat}</div>
      <div
        style={{
          marginTop: 4,
          fontSize: 11,
          color: "rgba(255,255,255,0.42)",
          textTransform: "uppercase",
          letterSpacing: 1.1,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function Logo({ small }: { small?: boolean }) {
  const size = small ? 30 : 42;
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mutualyGrad" x1="16" y1="14" x2="102" y2="106" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DD3FC" />
          <stop offset="0.5" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="104" height="104" rx="30" fill="url(#mutualyGrad)" />
      <path
        d="M32 77V43h9.5l18.5 19 18.5-19H88v34h-10V58.4L60 76 42 58.4V77H32Z"
        fill="#0A0F1D"
      />
      <circle cx="60" cy="60" r="49" stroke="rgba(255,255,255,0.32)" />
    </svg>
  );
}

const sectionPanel: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.035)",
  borderRadius: 28,
  padding: 24,
};

const compactCard: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.035)",
  borderRadius: 22,
  padding: 18,
};

const metricCard: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  borderRadius: 18,
  padding: 16,
};

const heroShell: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  borderRadius: 28,
  padding: 18,
  boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
};

const matchCard: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(10,15,29,0.74)",
  borderRadius: 18,
  padding: 14,
};

const matchReason: React.CSSProperties = {
  marginTop: 12,
  borderRadius: 14,
  background: "rgba(255,255,255,0.05)",
  padding: "10px 12px",
  color: "rgba(255,255,255,0.66)",
  lineHeight: 1.6,
  fontSize: 14,
};

const signalPanel: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 18,
  padding: 14,
  background: "rgba(10,15,29,0.72)",
};

const pricingCardBase: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  borderRadius: 24,
  padding: 22,
};

const pricingCardFeatured: React.CSSProperties = {
  border: "1px solid rgba(34,211,238,0.25)",
  background:
    "linear-gradient(135deg, rgba(34,211,238,0.10), rgba(10,15,29,0.95), rgba(167,139,250,0.10))",
};

const buyerCard: React.CSSProperties = {
  border: "1px solid rgba(52,211,153,0.18)",
  background: "rgba(52,211,153,0.06)",
  borderRadius: 24,
  padding: 22,
};

const subtlePanel: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  borderRadius: 22,
  padding: 18,
};

const cyanPanelCompact: React.CSSProperties = {
  border: "1px solid rgba(34,211,238,0.2)",
  background: "rgba(34,211,238,0.1)",
  borderRadius: 18,
  padding: 16,
  textAlign: "center",
};

const formPanel: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 24,
  background: "rgba(10,15,29,0.72)",
  padding: 24,
  textAlign: "center",
};

const visualBox: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 24,
  padding: 18,
  background:
    "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(10,15,29,0.95), rgba(167,139,250,0.08))",
};

const visualHeader: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 14,
  marginBottom: 14,
};

const ctaPanel: React.CSSProperties = {
  border: "1px solid rgba(34,211,238,0.2)",
  background:
    "linear-gradient(135deg, rgba(34,211,238,0.10), rgba(10,15,29,0.95), rgba(167,139,250,0.10))",
  borderRadius: 28,
  padding: 24,
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 18,
};

const buttonPrimary: React.CSSProperties = {
  background: "white",
  color: "black",
  padding: "14px 20px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 700,
};

const buttonSecondary: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.14)",
  color: "white",
  padding: "14px 20px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 700,
  background: "rgba(255,255,255,0.03)",
};

const buttonGhost: React.CSSProperties = {
  border: "1px solid rgba(34,211,238,0.22)",
  color: "#cffafe",
  padding: "14px 20px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 700,
  background: "rgba(34,211,238,0.08)",
};

const eyebrow: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid rgba(34,211,238,0.24)",
  background: "rgba(34,211,238,0.08)",
  color: "#cffafe",
  borderRadius: 999,
  padding: "7px 12px",
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1.4,
};

const successBadge: React.CSSProperties = {
  border: "1px solid rgba(52,211,153,0.25)",
  background: "rgba(52,211,153,0.1)",
  color: "#bbf7d0",
  borderRadius: 999,
  padding: "7px 11px",
  fontSize: 12,
  fontWeight: 700,
};

const cyanBadge: React.CSSProperties = {
  border: "1px solid rgba(34,211,238,0.25)",
  background: "rgba(34,211,238,0.1)",
  color: "#cffafe",
  borderRadius: 999,
  padding: "7px 11px",
  fontSize: 12,
  fontWeight: 700,
};

const neutralBadge: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.04)",
  color: "rgba(255,255,255,0.62)",
  borderRadius: 999,
  padding: "7px 11px",
  fontSize: 12,
  fontWeight: 700,
};

const mutedText: React.CSSProperties = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
  marginTop: 12,
};

const listWrap: React.CSSProperties = {
  display: "grid",
  gap: 10,
  marginTop: 16,
  color: "rgba(255,255,255,0.66)",
  lineHeight: 1.6,
};

const sectionCol: React.CSSProperties = {
  padding: 2,
};

const formCol: React.CSSProperties = {
  display: "grid",
  gap: 14,
};

const twoCol: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 10,
};

const miniLabel: React.CSSProperties = {
  fontSize: 11,
  color: "rgba(165,243,252,0.75)",
  textTransform: "uppercase",
  letterSpacing: 1.5,
};

const iconWrap: React.CSSProperties = {
  width: 58,
  height: 58,
  borderRadius: 18,
  border: "1px solid rgba(34,211,238,0.25)",
  background: "rgba(34,211,238,0.1)",
  color: "#cffafe",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 16px",
  fontSize: 24,
  fontWeight: 700,
};

const navLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.66)",
  textDecoration: "none",
  fontSize: 14,
};

const footerLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.68)",
  textDecoration: "none",
  fontSize: 14,
};
