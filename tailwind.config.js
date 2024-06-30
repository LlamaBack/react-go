/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13,100px)'
      },
      gridTemplateRows: {
        '13': 'repeat(13,100px)'
      }
    },
  },
  plugins: [],
}

