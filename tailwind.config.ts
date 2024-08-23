import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy-Bold', 'sans-serif'], // Gilroy Bold font
        sora: ['Sora', 'sans-serif'],          // Sora Bold 
      },
    },
  },
  plugins: [],
};
export default config;
