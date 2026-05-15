"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/stream", label: "Stream" },
  { href: "/trends", label: "Trends" },
  { href: "/briefing", label: "Briefing" },
  { href: "/alerts", label: "Alerts" },
  { href: "/investors", label: "Investors" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-6">
          <Link
            href="/"
            className="shrink-0 text-sm font-semibold tracking-[0.2em] text-emerald-300"
            onClick={() => setOpen(false)}
          >
            REDWOUD
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-5 md:text-sm md:text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/stream"
            className="hidden rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200 transition-colors hover:border-slate-500 hover:text-white sm:inline-flex"
            onClick={() => setOpen(false)}
          >
            Open Stream
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-white md:hidden"
            aria-expanded={open}
            aria-controls="redwoud-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="redwoud-mobile-nav"
          className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-slate-800 px-4 py-3 sm:px-6 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm text-slate-200 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/stream"
            className="mt-1 rounded-lg border border-slate-700 px-3 py-2.5 text-center text-sm text-slate-200"
            onClick={() => setOpen(false)}
          >
            Open Stream
          </Link>
          <p className="px-3 pt-1 text-[11px] leading-relaxed text-slate-500">
            Public feeds and synthesized views are for orientation and planning — verify sources before trades,
            security responses, hiring, or other high-impact decisions.
          </p>
        </nav>
      )}
    </header>
  );
}
