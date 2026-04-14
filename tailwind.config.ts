import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#ede6dc",
        espresso: "#241a14",
        bronze: "#8a6a45",
        stone: "#cdbda8"
      }
    }
  },
  plugins: []
};

export default config;
