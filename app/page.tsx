export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0f1d",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "700px" }}>
        <h1 style={{ fontSize: "56px", marginBottom: "24px" }}>Mutualy 🚀</h1>

        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.75)", marginBottom: "32px" }}>
          B2B matchmaking — connecting buyers and vendors when there is real fit.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://form.typeform.com/to/oLtDvuLX"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "white",
              color: "black",
              padding: "14px 24px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Apply as Buyer
          </a>

          <a
            href="https://form.typeform.com/to/oYc6xZr0"
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              padding: "14px 24px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Apply as Vendor
          </a>
        </div>
      </div>
    </main>
  );
}
