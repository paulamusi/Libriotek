// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss', 
  ],
  // Añade el archivo CSS global de Tailwind
  css: ['@/assets/css/globals.css'],

  // Configuración para PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Montserrat: [100, 300]
    },
  },
});
