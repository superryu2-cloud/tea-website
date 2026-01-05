/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.json",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"LXGW WenKai TC"', ...defaultTheme.fontFamily.serif],
        sans: ['"LXGW WenKai TC"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
