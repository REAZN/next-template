import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          50: "var(--50)",
          100: "var(--100)",
          200: "var(--200)",
          300: "var(--300)",
          400: "var(--400)",
          500: "var(--500)",
          600: "var(--600)",
          700: "var(--700)",
          800: "var(--800)",
          900: "var(--900)",
          950: "var(--950)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
}
export default config
