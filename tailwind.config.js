/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A2E43",
        secondary: "#E4447C",
        grayfont: "#78849E",
        customPink: "#E4447C"
      }
    },
  },
  plugins: [],
}

