/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    "./layouts/**/*.{vue,js,ts}",
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'senf': '#EDCA82',
        'tannen': '#097770',
        'darkTannen': '#06594E',
        'hellbraun': '#E0CDBE',
        'hellTannen': '#A9C0A6',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};