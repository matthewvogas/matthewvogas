import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0E0E0E',
        },
        text: {
          primary: {
            DEFAULT: '#1a1a1a',
            dark: '#fafafaf8',
          },
          secondary: {
            DEFAULT: '#31313e',
            dark: '#a0a0a0',
          },
          tertiary: {
            DEFAULT: '#6366f1',
            dark: '#cacaca',
          },
        },
        hover: {
          light: {
            DEFAULT: '#f3f4f6',
            dark: '#bfbfbf0a',
          },
          secondary: {
            DEFAULT: '#e0e7ff',
            dark: '#bfbfbf15',
          },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        lightning: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'lightning': 'lightning 1.2s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
