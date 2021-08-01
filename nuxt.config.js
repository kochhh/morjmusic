export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Morj Music',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'Morj Music', name: 'Morj Music', content: 'Morj Music' },
    ],
    link: [
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix: true,
    }],
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/google-fonts',
    // '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['nuxt-i18n', {
      vueI18nLoader: true,
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      sizes: [192, 512],
    },
    meta: {
      name: 'Morj Music',
      author: 'Morj Family',
      theme_color: '#66D4F5',
      lang: 'ru',
    },
    manifest: {
      name: 'Morj Music',
      short_name: 'Morj Music',
      lang: 'ru',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  i18n: {
    locales: [
      {
        code: 'uk',
        iso: 'uk',
        file: 'uk.json',
        name: 'Українською',
        short_name: 'Ukr',
      },
      {
        code: 'ru',
        iso: 'ru',
        file: 'ru.json',
        name: 'На русском',
        short_name: 'Rus',
      },
      {
        code: 'en',
        iso: 'en',
        file: 'en.json',
        name: 'English',
        short_name: 'Eng',
      },
    ],
    defaultLocale: 'uk',
    langDir: '~/locales/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {
      }
    }
  },

  // googleFonts: {
  //   display: 'swap',
  //   subsets: 'cyrillic',
  //   families: {
  //     Jura: [400, 700],
  //   },
  // },

  // googleAnalytics: {
  //   id: ''
  // },
}
