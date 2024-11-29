/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        lightRed: 'hsl(0, 100%, 67%)',
        lightRedAlpha: 'hsla(0, 100%, 67%, 0.1)',
        orangeyYellow: 'hsl(39, 100%, 56%)',
        orangeyYellowAlpha: 'hsla(39, 100%, 56%, 0.1)',
        greenTeal: 'hsl(166, 100%, 37%)',
        greenTealAlpha: 'hsl(166, 100%, 37%, 0.1)',
        coaltBlue: 'hsl(234, 85%, 45%)',
        coaltBlueAlpha: 'hsl(234, 85%, 45%, 0.1)',
        lightSlateBlue: 'hsl(252, 100%, 67%)',
        lightRoyalBlue: 'hsl(241, 81%, 54%)',
        violetBluet: 'hsla(256, 72%, 46%, 1)',
        persianBlueAlpha: 'hsla(241, 72%, 46%, 0)',
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
        darkGrayBlueHover: 'hsl(224, 92%, 10%)',
        darkGrayBlueAlpha: 'hsla(224, 30%, 27%, 0.5)',
      },

      fontFamily: {
        'Hanken-Grotesk': ['Hanken-Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
