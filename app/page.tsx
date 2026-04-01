"use client";

import { useEffect, useMemo, useState } from "react";

const FAQS = [
  {
    q: "Why are buyers free?",
    a: "Mutualy keeps buyers free to maximize demand and ensure vendors are meeting real, high-intent opportunities.",
  },
  {
    q: "What counts as a qualified intro?",
    a: "A qualified intro is a buyer-vendor match with verified fit across use case, timing, and budget signals.",
  },
  {
    q: "Do unused introductions roll over?",
    a: "On select plans, unused intros can roll over within the same billing cycle or be extended by request during early access.",
  },
  {
    q: "How is this different from outbound?",
    a: "Mutualy only surfaces matches where both sides have alignment, eliminating cold outreach and increasing conversion rates.",
  },
];

export default function Home() {
  const [viewportWidth, setViewportWidth] = useState(1280);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = viewportWidth < 768;
  const isTablet = viewportWidth >= 768 && viewportWidth < 1100;

  const containerPadding = isMobile ? "0 18px" : "0 24px";
  const heroTitleSize = isMobile ? 38 : isTablet ? 48 : 58;
  const sectionTitleSize = isMobile ? 30 : 42;
  const sectionSubTitleSize = isMobile ? 30 : 38;

  const layout = useMemo(
    () => ({
      heroGrid: {
        display: "grid",
        gridTemplateColumns: isMobile || isTablet ? "1fr" : "1.2fr 0.8fr",
        gap: isMobile ? 24 : 40,
        padding: isMobile ? "40px 0 28px" : "72px 0 48px",
      } as React.CSSProperties,
      tripleGrid: {
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : isTablet
            ? "1fr 1fr"
            : "repeat(3, 1fr)",
        gap: 16,
      } as React.CSSProperties,
      dualGrid: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: 16,
      } as React.CSSProperties,
      pricingGrid: {
        display: "grid",
        gridTemplateColumns: isMobile || isTablet ? "1fr" : "0.9fr 1.1fr",
        gap: 22,
        marginTop: 24,
      } as React.CSSProperties,
      ctaRow: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        flexDirection: isMobile ? "column" : "row",
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
          "radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 30%), radial-gradient(circle at 80% 20%, rgba(34,197,94,0.1), transparent 22%), radial-gradient(circle at bottom, rgba(168,85,247,0.12), transparent 30%), #0a0f1d",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: containerPadding }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 14 : 16,
            padding: "20px 0",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Logo />
            <div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>Mutualy</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                B2B matchmaking, finally done right
              </div>
            </div>
          </div>
          <a
            href="#waitlist"
            style={{
              ...buttonGhost,
              width: isMobile ? "100%" : "auto",
              textAlign: "center",
            }}
          >
            Join the waitlist
          </a>
        </header>

        <section style={layout.heroGrid}>
          <div>
            <div style={pill}>Built for mutual buyer-seller fit</div>

            <h1
              style={{
                fontSize: heroTitleSize,
                lineHeight: isMobile ? 1.08 : 1.05,
                margin: "18px 0 18px",
                letterSpacing: isMobile ? -1 : -1.5,
              }}
            >
              Stop chasing leads.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #7dd3fc 0%, #38bdf8 50%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Start meeting mutual matches.
              </span>
            </h1>

            <p
              style={{
                fontSize: isMobile ? 17 : 20,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.72)",
                maxWidth: 720,
                marginBottom: 28,
              }}
            >
              Mutualy connects buyers and sellers when there is actual fit on
              both sides — based on tech stack, priorities, timing, budget, and
              intent.
            </p>

            <div style={{ ...layout.ctaRow, marginBottom: 32 }}>
              <a href="#buyers" style={{ ...buttonPrimary, textAlign: "center" }}>
                Apply as a Buyer
              </a>
              <a href="#vendors" style={{ ...buttonSecondary, textAlign: "center" }}>
                Apply as a Vendor
              </a>
              <a href="#pricing" style={{ ...buttonGhost, textAlign: "center" }}>
                View pricing
              </a>
            </div>

            <div style={layout.tripleGrid}>
              <InfoCard
                title="Buyer profiles"
                text="Share stack, priorities, budget, and active initiatives."
              />
              <InfoCard
                title="Vendor profiles"
                text="Define ICP, use cases, ideal customers, and timing triggers."
              />
              <InfoCard
                title="Mutual matches"
                text="Get introduced only when interest and fit align."
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 28,
              padding: isMobile ? 16 : 20,
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              alignSelf: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                flexDirection: isMobile ? "column" : "row",
                gap: 12,
                marginBottom: 18,
              }}
            >
              <div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
                  Live matching signal
                </div>
                <div style={{ fontSize: isMobile ? 18 : 20, fontWeight: 700 }}>
                  Mutual fit engine
                </div>
              </div>
              <div style={successBadge}>94% fit confidence</div>
            </div>

            <MatchCard
              buyer="Series B SaaS buyer"
              seller="Revenue enablement platform"
              reason="Strong overlap in tech stack, active initiative, and timing"
              isMobile={isMobile}
            />
            <MatchCard
              buyer="Enterprise security leader"
              seller="Compliance automation vendor"
              reason="Buying window open with matching requirements"
              isMobile={isMobile}
            />
            <MatchCard
              buyer="RevOps team"
              seller="Conversation intelligence vendor"
              reason="Mutual ICP fit with budget and rollout urgency"
              isMobile={isMobile}
            />
          </div>
        </section>

        <Section
          id="pricing"
          title="Premium pricing"
          subtitle="A premium marketplace for serious vendor access."
          sectionTitleSize={sectionTitleSize}
        >
          <p style={sectionText}>
            Mutualy is free for buyers. Vendors pay for premium access to
            high-fit buyer demand, stronger matching signals, and curated
            introductions designed to outperform traditional outbound.
          </p>

          <div style={layout.pricingGrid}>
            <div style={greenPanel}>
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
                  <div style={{ color: "#a7f3d0", fontWeight: 700 }}>
                    Buyer access
                  </div>
                  <div style={{ fontSize: 42, fontWeight: 700, marginTop: 8 }}>
                    Free
                  </div>
                </div>
                <div style={successBadge}>Always free</div>
              </div>
              <p style={mutedText}>
                Buyers should never pay to discover relevant vendors. Mutualy
                keeps access free so demand stays strong and high-intent.
              </p>
              <div style={listWrap}>
                <div>• Create a buyer profile and share active priorities</div>
                <div>• Get surfaced to relevant vendors when fit is mutual</div>
                <div>• Submit reviews to help improve trust and match quality</div>
              </div>
              <a
                href="#buyers"
                style={{ ...buttonPrimary, marginTop: 20, display: "inline-block" }}
              >
                Apply as a Buyer
              </a>
            </div>

            <div style={layout.dualGrid}>
              <PricingCard
                title="Vendor Select"
                price="$499"
                cadence="per month"
                badge="Launch tier"
                description="For vendors who want premium access to mutual-fit opportunities without committing to a large program right away."
                features={[
                  "Premium vendor profile",
                  "Access to curated buyer matches",
                  "Core fit signals and category alignment",
                  "Up to 5 curated introductions per month",
                  "Email support",
                ]}
              />
              <PricingCard
                title="Vendor Elite"
                price="$1,500"
                cadence="per month"
                badge="Most premium"
                featured
                description="For teams ready to treat Mutualy like a strategic growth channel with deeper visibility and priority access."
                features={[
                  "Everything in Vendor Select",
                  "Priority placement in premium categories",
                  "Advanced fit and intent visibility",
                  "Up to 20 curated introductions per month",
                  "Quarterly strategy review",
                  "White-glove onboarding support",
                ]}
              />
            </div>
          </div>

          <div style={{ ...panel, marginTop: 20 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
                gap: 18,
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: isMobile ? 20 : 22, fontWeight: 700 }}>
                  Optional success-based pricing
                </div>
                <p style={mutedText}>
                  For launch partners, Mutualy can also layer in curated match
                  fees for especially high-value intros. This helps align
                  platform value directly to opportunity quality.
                </p>
              </div>
              <div style={cyanPanel}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    color: "#cffafe",
                    letterSpacing: 1.3,
                  }}
                >
                  Curated intro fee
                </div>
                <div style={{ fontSize: 36, fontWeight: 700, marginTop: 8 }}>
                  $150
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)" }}>
                  per qualified intro
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="faq"
          title="FAQ"
          subtitle="Everything you need to know"
          sectionTitleSize={sectionTitleSize}
        >
          <div style={{ ...layout.dualGrid, marginTop: 20 }}>
            {FAQS.map((item) => (
              <FaqCard key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Section>

        <section style={{ paddingBottom: 20 }}>
          <div style={layout.tripleGrid}>
            <QuoteCard
              quote="We replaced cold outbound with 3 qualified intros in our first month."
              who="VP Revenue, SaaS"
            />
            <QuoteCard
              quote="The fit signal is the difference — conversations actually convert."
              who="Head of RevOps"
            />
            <QuoteCard
              quote="Finally a marketplace that prioritizes buyer intent."
              who="CRO, Cybersecurity"
            />
          </div>
        </section>

        <section style={{ padding: "10px 0 48px" }}>
          <div
            style={{
              ...panel,
              textAlign: "center",
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.10), rgba(10,15,29,0.95), rgba(167,139,250,0.10))",
              border: "1px solid rgba(34,211,238,0.2)",
            }}
          >
            <div style={{ fontSize: isMobile ? 28 : 34, fontWeight: 700 }}>
              Start getting mutual matches
            </div>
            <p style={{ ...mutedText, margin: "10px auto 0", maxWidth: 640 }}>
              Join early access or apply today.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 12,
                flexWrap: "wrap",
                flexDirection: isMobile ? "column" : "row",
                marginTop: 20,
              }}
            >
              <a href="#buyers" style={{ ...buttonPrimary, textAlign: "center" }}>
                Apply as a Buyer
              </a>
              <a href="#vendors" style={{ ...buttonSecondary, textAlign: "center" }}>
                Apply as a Vendor
              </a>
            </div>
          </div>
        </section>

        <Section
          id="how-it-works"
          title="How it works"
          subtitle=""
          sectionTitleSize={sectionTitleSize}
        >
          <div style={{ ...layout.tripleGrid, marginTop: 20 }}>
            <StepCard
              step="01"
              title="Create your profile"
              text="Buyers and vendors submit what matters: category, priorities, stack, timing, and goals."
            />
            <StepCard
              step="02"
              title="Mutualy scores the fit"
              text="The platform analyzes alignment signals to surface the strongest mutual opportunities."
            />
            <StepCard
              step="03"
              title="Get matched"
              text="When both sides make sense, Mutualy opens the door for a better conversation."
            />
          </div>
        </Section>

        <FormSection
          id="buyers"
          badge="For Buyers"
          limited
          title="Find vendors that actually fit your goals — without wasting time."
          text="Tell Mutualy what your team is evaluating, what tools you already use, and what matters most. Mutualy uses that signal to surface relevant vendors with real fit, so your team spends less time sorting through noise and more time meeting qualified options."
          bullets={[
            "Share your current stack and top priorities",
            "Highlight budget, urgency, and active initiatives",
            "Get matched only when vendor fit and buyer intent align",
          ]}
          cta="Apply as a Buyer"
          href="https://form.typeform.com/to/oLtDvuLX"
          visual={<BuyerVisual isMobile={isMobile} />}
          reverse={false}
          isMobile={isMobile}
          isTablet={isTablet}
          sectionSubTitleSize={sectionSubTitleSize}
        />

        <FormSection
          id="vendors"
          badge="For Vendors"
          limited
          reverse
          title="Meet buyers with real timing, real intent, and stronger fit signals."
          text="Create a vendor profile with your ICP, strongest use cases, and ideal buyer signals so Mutualy can route you into higher-quality opportunities instead of more cold outbound."
          bullets={[
            "Define your best-fit buyers and industries",
            "Show the outcomes and problems you solve best",
            "Get matched when buyer intent and qualification align",
          ]}
          cta="Apply as a Vendor"
          href="https://form.typeform.com/to/oYc6xZr0"
          visual={<VendorVisual isMobile={isMobile} />}
          isMobile={isMobile}
          isTablet={isTablet}
          sectionSubTitleSize={sectionSubTitleSize}
        />

        <FormSection
          id="reviews"
          badge="Reviews"
          title="Share feedback on your Mutualy experience."
          text="Buyers can submit reviews and feedback so Mutualy can build trust, improve match quality, and highlight the best vendor experiences."
          bullets={[
            "Leave product and matching feedback",
            "Help improve future recommendations",
            "Build marketplace trust through verified reviews",
          ]}
          cta="Open review form"
          href="https://form.typeform.com/to/XvlS7XLZ"
          isMobile={isMobile}
          isTablet={isTablet}
          sectionSubTitleSize={sectionSubTitleSize}
        />

        <FormSection
          id="waitlist"
          badge="Waitlist"
          reverse
          title="Join the Mutualy waitlist."
          text="Not ready to apply yet? Join the waitlist and be first to hear when Mutualy opens access to more buyers and vendors."
          bullets={[
            "Get launch updates and early access news",
            "Stay in the loop as new categories open",
            "Reserve your spot before public rollout",
          ]}
          cta="Join the waitlist"
          href="https://form.typeform.com/to/Vx8Qdbfu"
          isMobile={isMobile}
          isTablet={isTablet}
          sectionSubTitleSize={sectionSubTitleSize}
        />

        <footer
          style={{
            padding: "24px 0 36px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            color: "rgba(255,255,255,0.55)",
            fontSize: 14,
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Logo small />
            <span>© {new Date().getFullYear()} Mutualy</span>
          </div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <a href="#pricing" style={footerLink}>
              Pricing
            </a>
            <a href="#faq" style={footerLink}>
              FAQ
            </a>
            <a href="#waitlist" style={footerLink}>
              Waitlist
            </a>
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
  sectionTitleSize,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  sectionTitleSize: number;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ padding: "8px 0 24px" }}>
      <div style={panel}>
        <div style={pill}>{title}</div>
        {subtitle ? (
          <h2
            style={{ fontSize: sectionTitleSize, margin: "18px 0 0", fontWeight: 700 }}
          >
            {subtitle}
          </h2>
        ) : null}
        {children}
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
  limited,
  visual,
  isMobile,
  isTablet,
  sectionSubTitleSize,
}: {
  id: string;
  badge: string;
  title: string;
  text: string;
  bullets: string[];
  cta: string;
  href: string;
  reverse?: boolean;
  limited?: boolean;
  visual?: React.ReactNode;
  isMobile: boolean;
  isTablet: boolean;
  sectionSubTitleSize: number;
}) {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns:
      isMobile || isTablet ? "1fr" : reverse ? "1.1fr 0.9fr" : "0.9fr 1.1fr",
    gap: 22,
    alignItems: "stretch",
  };

  const textBlock = (
    <div style={sectionCol}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <div style={pill}>{badge}</div>
        {limited ? <div style={limitedPill}>Limited early access</div> : null}
      </div>
      <h3 style={{ fontSize: sectionSubTitleSize, margin: "18px 0 0", fontWeight: 700 }}>
        {title}
      </h3>
      <p style={{ ...mutedText, maxWidth: 520 }}>{text}</p>
      <div style={listWrap}>
        {bullets.map((item) => (
          <div key={item}>• {item}</div>
        ))}
      </div>
    </div>
  );

  const formBlock = (
    <div style={formCol}>
      {visual}
      <FormPanel cta={cta} href={href} isMobile={isMobile} />
    </div>
  );

  return (
    <section id={id} style={{ padding: "8px 0 24px" }}>
      <div style={panel}>
        <div style={gridStyle}>
          {!reverse || isMobile || isTablet ? (
            <>
              {textBlock}
              {formBlock}
            </>
          ) : (
            <>
              {formBlock}
              {textBlock}
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
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 28,
        background: "rgba(10,15,29,0.72)",
        padding: isMobile ? 22 : 32,
        textAlign: "center",
      }}
    >
      <div style={iconWrap}>↗</div>
      <div style={{ fontSize: isMobile ? 24 : 30, fontWeight: 700 }}>
        Open the form in a new tab
      </div>
      <p style={{ ...mutedText, maxWidth: 480, margin: "12px auto 0" }}>
        The in-app preview can block embedded Typeforms and trigger a network
        access error. Opening the form directly avoids that issue and works
        reliably.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          ...buttonPrimary,
          display: "inline-block",
          marginTop: 22,
          width: isMobile ? "100%" : "auto",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {cta}
      </a>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", marginTop: 12 }}>
        Direct Typeform link
      </div>
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
          <div style={miniLabel}>Buyer Snapshot</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>Qualified demand profile</div>
        </div>
        <div style={successBadge}>Intent verified</div>
      </div>
      <div style={{ ...twoCol, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
        <MiniCard title="Priorities" text="Security, RevOps, AI workflow" />
        <MiniCard title="Budget band" text="$25k–$75k annual" />
      </div>
      <div style={innerPanel}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(255,255,255,0.6)",
            gap: 10,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <span>Mutual fit inputs</span>
          <span>4 of 4 complete</span>
        </div>
        <Progress label="Tech stack" width="92%" />
        <Progress label="Timeline" width="89%" />
        <Progress label="Use case match" width="96%" />
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
          <div style={miniLabel}>Vendor Snapshot</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>Go-to-market profile</div>
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
          gap: 12,
        }}
      >
        <StatCard stat="52" label="buyer signals" />
        <StatCard stat="18" label="open categories" />
        <StatCard stat="91%" label="fit accuracy" />
      </div>
    </div>
  );
}

function Progress({ label, width }: { label: string; width: string }) {
  return (
    <div style={{ marginTop: 14 }}>
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
    <div
      style={{
        border: featured
          ? "1px solid rgba(34,211,238,0.25)"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: 28,
        background: featured
          ? "linear-gradient(135deg, rgba(34,211,238,0.10), rgba(10,15,29,0.95), rgba(167,139,250,0.10))"
          : "rgba(255,255,255,0.04)",
        padding: 24,
      }}
    >
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
      <div style={{ marginTop: 22, display: "flex", alignItems: "end", gap: 8, flexWrap: "wrap" }}>
        <div style={{ fontSize: 42, fontWeight: 700 }}>{price}</div>
        <div style={{ color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>{cadence}</div>
      </div>
      <div style={{ ...listWrap, marginTop: 18 }}>
        {features.map((feature) => (
          <div key={feature}>• {feature}</div>
        ))}
      </div>
      <a
        href="#vendors"
        style={{
          ...(featured ? buttonPrimary : buttonSecondary),
          display: "inline-block",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Apply as a Vendor
      </a>
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
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(10,15,29,0.75)",
        borderRadius: 22,
        padding: 16,
        marginTop: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <div>
          <div style={miniLabel}>Match</div>
          <div style={{ marginTop: 6, fontWeight: 600 }}>{buyer}</div>
        </div>
        {!isMobile ? <div style={{ color: "#67e8f9" }}>×</div> : null}
        <div style={{ textAlign: isMobile ? "left" : "right" }}>
          <div style={miniLabel}>Partner</div>
          <div style={{ marginTop: 6, fontWeight: 600 }}>{seller}</div>
        </div>
      </div>
      <div
        style={{
          marginTop: 14,
          borderRadius: 16,
          background: "rgba(255,255,255,0.05)",
          padding: "10px 12px",
          color: "rgba(255,255,255,0.68)",
          lineHeight: 1.6,
          fontSize: 14,
        }}
      >
        {reason}
      </div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div style={smallCard}>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ marginTop: 8, color: "rgba(255,255,255,0.62)", lineHeight: 1.6 }}>
        {text}
      </div>
    </div>
  );
}

function QuoteCard({ quote, who }: { quote: string; who: string }) {
  return (
    <div style={smallCard}>
      <div style={{ lineHeight: 1.7, color: "rgba(255,255,255,0.82)" }}>“{quote}”</div>
      <div
        style={{
          marginTop: 14,
          color: "rgba(255,255,255,0.45)",
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: 1.4,
        }}
      >
        {who}
      </div>
    </div>
  );
}

function FaqCard({ q, a }: { q: string; a: string }) {
  return (
    <div style={smallCard}>
      <div style={{ fontSize: 18, fontWeight: 700 }}>{q}</div>
      <div style={{ marginTop: 10, lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>
        {a}
      </div>
    </div>
  );
}

function StepCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div style={smallCard}>
      <div style={{ color: "#a5f3fc", fontWeight: 700 }}>{step}</div>
      <div style={{ fontSize: 22, fontWeight: 700, marginTop: 12 }}>{title}</div>
      <div style={{ marginTop: 12, lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>
        {text}
      </div>
    </div>
  );
}

function MiniCard({ title, text }: { title: string; text: string }) {
  return (
    <div style={smallCard}>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ marginTop: 6, color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
        {text}
      </div>
    </div>
  );
}

function StatCard({ stat, label }: { stat: string; label: string }) {
  return (
    <div style={{ ...smallCard, textAlign: "center" }}>
      <div style={{ fontSize: 28, fontWeight: 700 }}>{stat}</div>
      <div
        style={{
          marginTop: 4,
          fontSize: 12,
          color: "rgba(255,255,255,0.45)",
          textTransform: "uppercase",
          letterSpacing: 1.2,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function Logo({ small }: { small?: boolean }) {
  const size = small ? 32 : 44;
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="mutualyGrad"
          x1="16"
          y1="14"
          x2="102"
          y2="106"
          gradientUnits="userSpaceOnUse"
        >
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

const panel: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  borderRadius: 32,
  padding: 32,
};

const smallCard: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  borderRadius: 24,
  padding: 20,
};

const buttonPrimary: React.CSSProperties = {
  background: "white",
  color: "black",
  padding: "14px 22px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 700,
};

const buttonSecondary: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  padding: "14px 22px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 700,
  background: "rgba(255,255,255,0.03)",
};

const buttonGhost: React.CSSProperties = {
  border: "1px solid rgba(34,211,238,0.22)",
  color: "#cffafe",
  padding: "14px 22px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 700,
  background: "rgba(34,211,238,0.08)",
};

const pill: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid rgba(34,211,238,0.25)",
  background: "rgba(34,211,238,0.08)",
  color: "#cffafe",
  borderRadius: 999,
  padding: "8px 14px",
  fontSize: 12,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1.5,
};

const limitedPill: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid rgba(251,191,36,0.2)",
  background: "rgba(251,191,36,0.1)",
  color: "#fde68a",
  borderRadius: 999,
  padding: "8px 14px",
  fontSize: 12,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1.2,
};

const successBadge: React.CSSProperties = {
  border: "1px solid rgba(52,211,153,0.25)",
  background: "rgba(52,211,153,0.1)",
  color: "#bbf7d0",
  borderRadius: 999,
  padding: "8px 12px",
  fontSize: 12,
  fontWeight: 700,
};

const cyanBadge: React.CSSProperties = {
  border: "1px solid rgba(34,211,238,0.25)",
  background: "rgba(34,211,238,0.1)",
  color: "#cffafe",
  borderRadius: 999,
  padding: "8px 12px",
  fontSize: 12,
  fontWeight: 700,
};

const neutralBadge: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.04)",
  color: "rgba(255,255,255,0.65)",
  borderRadius: 999,
  padding: "8px 12px",
  fontSize: 12,
  fontWeight: 700,
};

const greenPanel: React.CSSProperties = {
  border: "1px solid rgba(52,211,153,0.18)",
  background: "rgba(52,211,153,0.06)",
  borderRadius: 28,
  padding: 24,
};

const cyanPanel: React.CSSProperties = {
  border: "1px solid rgba(34,211,238,0.2)",
  background: "rgba(34,211,238,0.1)",
  borderRadius: 22,
  padding: 20,
  textAlign: "center",
};

const mutedText: React.CSSProperties = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
  marginTop: 14,
};

const sectionText: React.CSSProperties = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginTop: 14,
  maxWidth: 820,
};

const listWrap: React.CSSProperties = {
  display: "grid",
  gap: 10,
  marginTop: 18,
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.6,
};

const sectionCol: React.CSSProperties = {
  padding: 6,
};

const formCol: React.CSSProperties = {
  display: "grid",
  gap: 18,
};

const visualBox: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 28,
  padding: 20,
  background:
    "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(10,15,29,0.95), rgba(167,139,250,0.08))",
};

const visualHeader: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 16,
  marginBottom: 16,
};

const innerPanel: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 22,
  padding: 16,
  background: "rgba(10,15,29,0.7)",
  marginTop: 14,
};

const twoCol: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
};

const miniLabel: React.CSSProperties = {
  fontSize: 11,
  color: "rgba(165,243,252,0.75)",
  textTransform: "uppercase",
  letterSpacing: 1.6,
};

const iconWrap: React.CSSProperties = {
  width: 64,
  height: 64,
  borderRadius: 20,
  border: "1px solid rgba(34,211,238,0.25)",
  background: "rgba(34,211,238,0.1)",
  color: "#cffafe",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 18px",
  fontSize: 28,
  fontWeight: 700,
};

const footerLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.7)",
  textDecoration: "none",
};
