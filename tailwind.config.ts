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
        cream: {
          DEFAULT: "#FBF4E4",
          dark: "#F2E6C8",
        },
        amber: {
          DEFAULT: "#C8760A",
          light: "#E8971A",
        },
        honey: "#F5C040",
        brown: {
          DEFAULT: "#3A2210",
          mid: "#6B3D1E",
          light: "#A0622A",
        },
        "white-warm": "#FFFDF6",
        text: {
          DEFAULT: "#2E1A0E",
          soft: "#7A4F2E",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Lora'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
