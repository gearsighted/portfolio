module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'false' or 'class'
  theme: {
    extend: {},
    colors: {
      background: {
        blue: '#263E7E',
        green: '#455738',
      },
      highlight: {
        red: '#9F1C20',
        pink: '#F4D9D8'
      },
       white: "#FFF",
       black: "#000",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
