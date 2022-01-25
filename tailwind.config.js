module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'default': "url('/src/assets/img/default.svg')",
        'warm': "url('/src/assets/img/warm.svg')",
        'cold': "url('/src/assets/img/cold.svg')",
      }
    },
  },
  plugins: [],
}