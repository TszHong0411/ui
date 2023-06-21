import { tailwindPreset } from '@tszhong0411/ui'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/**/*.{js,ts,jsx,tsx}',
    './contentlayer.config.ts',
  ],
  darkMode: 'class',
  presets: [tailwindPreset],
  plugins: [require('@tailwindcss/typography')],
}
