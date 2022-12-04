/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#C10000",
        "slate-white":"#F6F6F6"
      },
      fontFamily: {
        "rs": ['Roboto Slab', 'serif'],
        "open": ['Open Sans', 'sans-serif'],
        "monoton":['Monoton', 'cursive']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
