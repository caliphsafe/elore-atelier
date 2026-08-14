import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#221F1E",
          mocha: "#563D39",
          sand: "#D3BA9D",
          olive: "#344200",
          black: "#000000",
          white: "#FFFFFF",
          maroon: "#6F3035",
          clay: "#A4664E",
          bone: "#F6F0E5"
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "Arial", "sans-serif"]
      },
      maxWidth: {
        "8xl": "90rem"
      },
      letterSpacing: {
        luxe: "0.18em",
        hero: "-0.04em"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(34, 31, 30, 0.08)",
        deep: "0 22px 70px rgba(34, 31, 30, 0.14)"
      },
      borderRadius: {
        luxe: "2rem"
      }
    }
  },
  plugins: []
};

export default config;
