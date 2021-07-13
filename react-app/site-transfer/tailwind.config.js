module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'false' or 'class'
  theme: {
    extend: {},
    colors: {
      background: {
        dark: '#023047',
        medium: '#219EBC',
        light: '#8ECAE6'
      },
      highlight: {
        light: '#FFB703',
        medium: '#FB8500'
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
