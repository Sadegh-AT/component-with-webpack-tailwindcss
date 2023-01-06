/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/js/*.{html,js}","./src/index.html"],
  theme: {
    extend: {
      colors:{
        "blue-white":{
          50:"#f8f9fe",
          100:"#766cf1"
        },
        "blue-light":"#e0e8ff",
        "blue-dark":{
          50:"#475aed1f",
          100:"#382ae1",
          200:"#10072B"
        },
        "blue-gray":"#757c8d"
      }
    },
  },
  plugins: [],
}
