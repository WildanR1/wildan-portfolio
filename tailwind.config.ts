import { nextui } from "@nextui-org/react";

// import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        supreme: ["Supreme", "sans-serif"],
        consolas: ["Consolas", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        scroll: "scroll 35s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F8F8F8", // or DEFAULT
            foreground: "#333333", // or 50 to 900 DEFAULT
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#009E66",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#1A1A1A", // or DEFAULT
            foreground: "#F0F0F0", // or 50 to 900 DEFAULT
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#009E66",
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
export default config;
