const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        primaryColor :	'#05014a',
        seconderyColor : '#ee6e17',
      },
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },

  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
}

