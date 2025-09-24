import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          500: "#1c2b65",
          600: "#121c45"
        }
      },
      gradientColorStops: {
        solStart: "#00FFA3",
        solMid: "#DC1FFF",
        solEnd: "#00E5FF"
      }
    },
  },
  plugins: [],
};
export default config;
