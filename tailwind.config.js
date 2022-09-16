/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'opacity-50',
    'opacity-100',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
