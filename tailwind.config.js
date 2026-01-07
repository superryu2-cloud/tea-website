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
        serif: [
          '"Noto Serif TC"',
          '"Source Han Serif TC"',
          '"Songti TC"',
          '"PMingLiU"',
          '"MingLiU"',
          ...defaultTheme.fontFamily.serif,
        ],
        sans: [
          '"Noto Sans TC"',
          '"PingFang TC"',
          '"PingFang SC"',
          '"Hiragino Sans"',
          '"Microsoft JhengHei"',
          '"Microsoft YaHei"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
