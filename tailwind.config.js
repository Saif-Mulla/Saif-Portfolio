/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',   // <── tells Tailwind: “activate dark styles only
                       //      when an element has the class 'dark' ”
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}