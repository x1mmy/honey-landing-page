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
        honey: {
          DEFAULT: "#F5C040",
          light: "#FBDA7A",
          dark: "#D4A020",
        },
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
      boxShadow: {
        'honey': '0 4px 30px rgba(245, 192, 64, 0.2)',
        'honey-lg': '0 8px 50px rgba(245, 192, 64, 0.25)',
        'warm': '0 4px 32px rgba(58, 34, 16, 0.12)',
        'warm-lg': '0 12px 48px rgba(58, 34, 16, 0.18)',
        'warm-xl': '0 24px 64px rgba(58, 34, 16, 0.22)',
      },
      backgroundImage: {
        'gradient-honey': 'linear-gradient(135deg, #F5C040 0%, #C8760A 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FBF4E4 0%, #F2E6C8 100%)',
        'gradient-brown': 'linear-gradient(180deg, #3A2210 0%, #2A1808 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
