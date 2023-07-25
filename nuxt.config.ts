// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de.json',
      },
    ],
    vueI18n: './i18n.config.js',
    compilation: {
      strictMessage: false,
    },

    lazy: true,
    langDir: 'i18n/lang',
    defaultLocale: 'de',
    strategy: 'prefix_and_default',
    baseUrl: 'http://localhost:3000',
    debug: true,
  },
})
