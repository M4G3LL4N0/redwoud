import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/ui/site-header";

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
      <body className="bg-slate-950 text-slate-100 antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
