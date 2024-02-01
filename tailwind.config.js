/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          100: "#E88883",
        }
      },
      fontFamily: {
        body: ['Nunito', ]
      }
    },
  },
  plugins: [],
};
