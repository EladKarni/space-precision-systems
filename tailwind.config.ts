import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "prlx-front": `url("/asfalt-light.png")`,
        "prlx-back": `url("/bg-stars.png")`,
      },
      animation: {
        "hovering-panel-100": "ease-out hovering 5s infinite reverse",
        "hovering-panel-300": "ease-in hovering 5s infinite",
      },
      keyframes: {
        hovering: {
          '0%, 100%': { transform: 'translateY(0.5rem) rotate(0deg)' },
          '50%': { transform: 'translateY(-0.25rem) rotate(-1deg)' },

        }
      }
    },
  },
  daisyui: {
    themes: [
      {
        spstheme: {
          "primary": "#414E80",
          "secondary": "#BEC7D8",
          "accent": "#465063",
          "neutral": "#3E4B65",
          "base-100": "#212631",
          "info": "#0083ba",
          "success": "#00b04c",
          "warning": "#ffb700",
          "error": "#ff5b6e",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
