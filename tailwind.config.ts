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
          ink: "#38402A",
          mocha: "#563D39",
          sand: "#D8CBB8",
          olive: "#38402A",
          black: "#38402A",
          white: "#FFFFFF",
          maroon: "#38402A",
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
