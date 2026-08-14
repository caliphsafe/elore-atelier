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
          ink: "#241C19",
          mocha: "#6F292B",
          sand: "#D5B875",
          olive: "#596044",
          clay: "#A4664E",
          bone: "#F2EBDD",
          ivory: "#FAF8F2",
          black: "#241C19",
          white: "#FAF8F2"
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "Arial", "sans-serif"]
      },
      maxWidth: { "8xl": "94rem" },
      letterSpacing: { luxe: "0.18em", hero: "-0.055em" },
      boxShadow: { soft: "0 1px 0 rgba(36,28,25,.10)" },
      borderRadius: { luxe: "0.25rem" }
    }
  },
  plugins: []
};

export default config;
