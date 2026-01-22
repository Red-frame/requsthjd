import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "420px"
      }
    },

    extend: {
      colors: {
        background: "#0B0E14",
        foreground: "#E5E7EB",

        card: "#121826",
        border: "#1F2937",

        primary: "#7C3AED",
        primaryHover: "#6D28D9",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        muted: "#9CA3AF"
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.25)",
        soft: "0 4px 12px rgba(0,0,0,0.15)"
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem"
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },

      animation: {
        fadeIn: "fadeIn 0.3s ease-out"
      }
    }
  },

  plugins: []
};

export default config;
