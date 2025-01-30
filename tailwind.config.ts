import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A1A2F',
          light: '#1E3A5F',
          DEFAULT: '#0A1A2F',
        },
        accent: {
          gold: '#C4A962',
        },
        text: {
          light: '#F5F5F5',
          dark: '#1A1A1A',
          gray: '#6B7280',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0A1A2F',
          secondary: {
            light: '#F3F4F6',
            dark: '#1E293B',
          }
        }
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sourceSans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
