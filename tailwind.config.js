/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8b5cf6",
          secondary: "#6366f1",
          accent: "#d946ef",
          neutral: "#e7e5e4",
          "base-100": "#FFFFFF",
          info: "#fb923c",
        },
      },
    ],
  },
};
