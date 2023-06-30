/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': '3px 3px 8px 3px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}