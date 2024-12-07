import { COLORS } from './src/constants/color.constants'
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: COLORS,
      borderRadius: {
        DEFAULT: '5px'
      },
      borderWidth: {
        DEFAULT: '1px'
      },
      fontSize: {
        heading: ['56px', '70px'],
        title: ['48px', '64px'],
        subtitle: ['24px', '35px'],
        large: ['18px', '24px'],
        medium: ['16px', '20px'],
        small: ['14px', '16px'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.2rem',
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
