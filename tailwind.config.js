/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rw: {
          accent: "#2563eb",
          accentSoft: "rgba(37, 99, 235, 0.15)",
          surface: "rgba(51, 65, 85, 0.6)",
          surfaceAlt: "rgba(51, 65, 85, 0.4)",
          border: "rgba(148, 163, 184, 0.2)",
          muted: "#94a3b8",
        },
      },
      backgroundImage: {
        'rw-gradient-radial': 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.08) 40%, transparent 0%)',
      }
    },
  },
  plugins: [],
};
