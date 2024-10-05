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
        custom: ['Poppins', 'sans-serif'], // Replace 'YourFontFamily' with the actual font name
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cy: '#fdcf5b'
      },
    },
  },
  plugins: [],
};
export default config;
