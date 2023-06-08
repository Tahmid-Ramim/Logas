/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        ph: { max: "600px" },
      },
      fontFamily: {
        header: ["Ubuntu", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        alk: ["Alkatra", "cursive"],
        tg: ["Tangerine", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
