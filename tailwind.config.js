/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':"'Poppins', sans-serif",
        'Unbounded':"'Unbounded', sans-serif",
        'Bebas':"'Bebas Neue', sans-serif",
      },
      colors: {
        harlequin: {
          50: "#eaffe4",
          100: "#cfffc5",
          200: "#a3ff91",
          300: "#68ff52",
          400: "#45fd32",
          500: "#11e300",
          600: "#08b600",
          700: "#078a01",
          800: "#0b6c08",
          900: "#0d5b0c",
          950: "#003301",
        },
        "red-orange": {
          50: "#fff2f0",
          100: "#ffe0dd",
          200: "#ffc7c1",
          300: "#ffa095",
          400: "#ff6a59",
          500: "#ff3b25",
          600: "#fd341d",
          700: "#d51600",
          800: "#b01604",
          900: "#91190b",
          950: "#500800",
        },
        lima: {
          50: "#ecfde8",
          100: "#d4facd",
          200: "#acf5a1",
        },
      },
      fontSize:{
      '6xl':'20rem',
      }
    },
  },
  plugins: [],
};
