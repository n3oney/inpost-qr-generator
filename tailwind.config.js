const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        header: '"Krona One", sans-serif',
        display: 'Montserrat, sans-serif',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('invalid-edited', '&:not(:placeholder-shown):invalid');
    }),
  ],
};
