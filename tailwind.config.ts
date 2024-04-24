import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      "light-gray": "#EDEFF1",
      "medium-gray": "#B9B9B9",
      "light-violet": "#DED4E3",
      "dark-blue": "#25305E",
      "medium-blue": "#578DB0",
      "light-blue": "#62BDD6",
      alert: "#dc2626",
      black: "#000",
      white: "#fff",
    },
  },
  plugins: [],
};
export default config;
