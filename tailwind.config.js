/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#14b8a6", secondary: "#78716c", dark: "#020617" },
    },
  },
  plugins: [],
};
