/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
