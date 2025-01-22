import type { Config } from 'tailwindcss'

const config: Config = {
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
        },
        accent: {
          gold: '#C4A962',
        },
        text: {
          light: '#F5F5F5',
          gray: '#E5E5E5',
        },
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
