interface ErrorPageProps {
  statusCode?: number;
}

export default function ErrorPage({ statusCode }: ErrorPageProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020617",
        color: "#e2e8f0",
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#34d399" }}>
          REDWOUD
        </p>
        <h1 style={{ fontSize: "2rem", marginTop: "1rem" }}>
          {statusCode ? `Error ${statusCode}` : "Application Error"}
        </h1>
        <p style={{ marginTop: "1rem", color: "#94a3b8", maxWidth: "42rem" }}>
          Something went wrong while rendering this page.
        </p>
      </div>
    </main>
  );
}
