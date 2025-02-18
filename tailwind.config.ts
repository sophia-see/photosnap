import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FFC593',
        'pink': '#BC7198',
        'violet': '#5A77FF',

        'pure-black': '#000000',
        'light-grey': '#DFDFDF',
        'pure-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config;
