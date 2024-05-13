const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode :'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        primaryColor: '#05014a',
        seconderyColor: '#ee6e17',
      },
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

    },
    animatedSettings: {
      animatedSpeed: 500,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 1000,
      classes: ['bounce', 'heartBeat', 'backInUp']


    }

  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}

