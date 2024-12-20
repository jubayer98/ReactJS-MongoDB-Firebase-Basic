/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light", // Default theme
      "dark",  // Dark theme
      "cupcake", // Additional built-in theme
    ],
    darkTheme: "light", // Specify default dark theme
  },
};