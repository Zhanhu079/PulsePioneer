/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2A2E43",
          100: "#353A50"
        },
        secondary: "#E4447C",
        grayfont: "#78849E",
        customPink: "#E4447C"
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        'Inter-Bold': ['Inter-Bold', 'sans-serif'],
        DMSans: ['DMSans', 'sans-serif'],
        'DMSans-Bold': ['DMSans-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

