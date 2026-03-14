module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rw: {
          accent: "#0077cc",
          surface: "#f9f9f9",
          border: "#e0e0e0",
          text: "#2d2d2d",
        },
      },
    },
  },
  plugins: [],
};
