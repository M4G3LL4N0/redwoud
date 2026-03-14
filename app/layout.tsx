import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REDWOUD",
  description: "AI-powered real-time global intelligence platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
