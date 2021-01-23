module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'black': '#000',
      'white': '#fff',
      'lightBlue': '#458ff6',
      'darkBlue': '#5a98f2',
      'gray': '#7d7987',
      gradientBlue: 'linear-gradient(208.18deg, #67c3f3 9.05%, #5a98f2 76.74%)',
    },
    extend: {
      backgroundImage: theme => ({
       'servicesSection': "url('/images/Frame.png')",
       'articleSection': "url('/images/element.png')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}