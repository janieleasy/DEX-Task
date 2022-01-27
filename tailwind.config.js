module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '920px',
      'lg': '1048px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      "pink-primary": "#ff00af",
      "pink-secondary": "#ffccef",
      "gray": "#a2a0a8",
      "gray-light": "#f9f9fa",
      "blue-light": "#f5f7fe",

      "white": "#FFFFFF",
      "black": "#000000",

      "gray-dark": "#F2F2F2",
      "txt-black": "#000000",
      "txt-gray-dark": "#666666",
      "txt-gray-light": "#999999",
      "txt-gray": "#C4C4C4",
      "line": "#F2F2F2",
      "transparent": "transparent",
    },
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans']
      }
    },
  },
  plugins: [],
}
