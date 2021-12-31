module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '3000px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '2400px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1600px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '1200px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '1000px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
