/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // Adjust the breakpoint value if needed
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
