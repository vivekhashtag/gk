import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: "#1e3a5f",
          dark: "#0f1f3a",
        },
        orange: {
          accent: "#d97706",
          light: "#ffa500",
        },
      },
    },
  },
  plugins: [],
};
export default config;
