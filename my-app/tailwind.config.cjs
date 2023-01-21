/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '5x': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      backgroundImage: {
        'hero-pattern': "url('./4907157.jpg')",
      }
    }
  },
  plugins: [],
}