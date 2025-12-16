/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nuntino: "'Nunito', sans-serif",
    },
    screens: {
      100: "100px",
      mobile: "300px",
      iphone: "400px",
      mini: "446px",
      phone: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1xl": "1350px",
      "2xl": "1536px",
      "3xl": "1700px",
      "4xl": "1900px",
      "5xl": "2100px",
    },
    extend: {
      // colors: {
      //   "dark-mode": "#121212", // Add dark mode background color
      // },
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      //   amber: "#6C6727",
      //   primary: "#0C4AFF",
      //   primarySub: "#0C4CFF",
      //   primaryLight: "#56A1FF",
      //   secondary: "#A82134",
      //   blackSub: "#636363",
      //   white: "#F9F9F9",
      //   plainWhite: "#ffffff",
      //   btnGrey: "#d6d6d6",
      //   green: "#377F69",
      //   greyLines: "#DADADA",
      //   transparent: "transparent",
      //   greyColour: "#D1D1D1",
      //   textGrey: "#4A4F54",
      //   textBlack: "#333333",
      //   textAlt: "#4F4F4F",
      //   borderColor: "#CDD1D4",
      // },
    },
  },
  plugins: [],
};
