import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "rw-bg": "#050711",
        "rw-surface": "#0c0f1f",
        "rw-surface-alt": "#121629",
        "rw-border": "#1e2236",
        "rw-accent": "#4f46e5",
        "rw-accent-soft": "#1d2344",
        "rw-danger": "#f97373",
        "rw-muted": "#9ca3af"
      },
      boxShadow: {
        "rw-soft": "0 18px 45px rgba(0,0,0,0.65)"
      },
      backgroundImage: {
        "rw-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.16) 1px, transparent 0)"
      }
    }
  },
  plugins: [],
};

export default config;
