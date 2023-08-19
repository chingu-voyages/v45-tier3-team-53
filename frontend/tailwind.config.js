/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  // darkMode: "media",
  plugins: [require("tw-elements/dist/plugin.cjs")]
};

