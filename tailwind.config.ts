import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        produ: {
          black: "#000000",
          white: "#FFFFFF",
          ink: {
            900: "#0A0A0A",
            800: "#141414",
            700: "#1F1F1F",
            600: "#2A2A2A",
            500: "#3D3D3D",
            400: "#6B6B6B",
            300: "#9A9A9A",
            200: "#C8C8C8",
            100: "#E8E8E8",
            50: "#F4F4F4"
          },
          accent: "#1AE85F",
          red: "#FF2E2E",
          magenta: "#E91E8C",
          cyan: "#2E7BFF",
          amber: "#FFB800"
        }
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
        mega: "0.16em",
        wider2: "0.06em"
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 10vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }]
      },
      animation: {
        "slow-pulse": "slowPulse 6s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
        "drift": "drift 18s ease-in-out infinite alternate"
      },
      keyframes: {
        slowPulse: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.65" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        drift: {
          "0%": { transform: "translate3d(-3%, -2%, 0) scale(1.05)" },
          "100%": { transform: "translate3d(3%, 2%, 0) scale(1.1)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
