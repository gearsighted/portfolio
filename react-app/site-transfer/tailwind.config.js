module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'false' or 'class'
  theme: {
    extend: {},
    colors: {
      brand: {
        dark: '#003049',
        light: '#F3F4F6',
        mediumLight: '#E5E7EB',
        danger: '#D62828',
        warning: '#F77F00',
        success: '#FCBF49'
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
