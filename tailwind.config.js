/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme=>({
        "zomotoBg": "url('/src/assets/images/zomatoBanner.png')"
      }),
      fontWeight:{
        "helvetica" :["Helvetica-bold"],
        "helvetica-light" :["helvetica-light"]
      }
    },
  },
  plugins: [],
}