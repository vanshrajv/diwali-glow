module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        diya: {
          ink: '#120c18',
          plum: '#251328',
          gold: '#f7c76b',
          rose: '#ed829d',
          saffron: '#ff9a57',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
