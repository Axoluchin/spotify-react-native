/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        spotify: '#1ED760',
        dark: '#121212',
        secondary: '#898989',
        tertiary: '#323232',
      },
    },
  },
  plugins: [],
}
