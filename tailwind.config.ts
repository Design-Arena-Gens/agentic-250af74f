import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "neon-lime": "#C1FF00",
        "bubblegum-pink": "#FF5FA2",
        "midnight-plum": "#1A1127",
        "mint-fizz": "#8FF7E8"
      },
      fontFamily: {
        display: ["'Lilita One'", "cursive"],
        body: ["'Space Grotesk'", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
