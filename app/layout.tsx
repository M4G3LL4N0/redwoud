import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "REDWOUD",
  description: "Global intelligence system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
