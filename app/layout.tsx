import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REDWOUD | Real-Time Global Intelligence",
  description: "AI-powered real-time global intelligence platform. Monitor geopolitical risks, market signals, and strategic developments worldwide.",
  keywords: ["intelligence", "geopolitical risk", "global monitoring", "AI", "real-time data"],
  authors: [{ name: "REDWOUD" }],
  openGraph: {
    title: "REDWOUD | Real-Time Global Intelligence",
    description: "AI-powered real-time global intelligence platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="pattern-grid min-h-screen">{children}</body>
    </html>
  );
}
