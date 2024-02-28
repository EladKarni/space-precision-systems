import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
