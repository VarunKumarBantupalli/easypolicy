/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D47A1", // Deep Blue
        secondary: "#1565C0", // Bright Blue
        accent: "#1E88E5", // Sky Blue
        background: "#E3F2FD", // Light Blue
        surface: "#90CAF9", // Soft Blue
        textPrimary: "#0A2F6B", // Dark Blue
        textSecondary: "#5C6BC0", // Muted Blue
      },
      gradientColorStops: {
        skyToDeep: ["#1E88E5", "#0D47A1"], // Sky to Deep Blue
        softGlow: ["#E3F2FD", "#90CAF9", "#1565C0"], // Soft Blue Glow
        oceanWave: ["#008CFF", "#0A2F6B"], // Ocean Wave
      },
    },
  },
  plugins: [],
};
