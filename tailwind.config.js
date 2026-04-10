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
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-2': 'fadeIn2 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn2: {
          '0%': { opacity: 0, transform: 'translateY(5px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
};
