const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          pnc: '#228c22',
          pncHover: '#2CB52C',
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  // config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
