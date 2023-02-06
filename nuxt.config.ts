import svgLoader from 'vite-svg-loader';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#app
  app: {
    head: {
      title: 'Arthur LEFEVRE',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Arthur LEFEVRE Fullstack web dev',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#components
  components: {
    dirs: [
      {
        path: '~/components',
        global: false,
        pathPrefix: false,
        watch: true,
      },
      {
        path: '~/components/global',
        global: true,
      },
    ],
  },

  css: ['@/assets/css/color-mode-themes.css', '@/assets/scss/main.scss'],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#plugins-1
  plugins: [],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    // '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],

  loading: { color: 'var(--primary)' },

  // vite config https://v3.nuxtjs.org/api/configuration/nuxt-config#vite
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
        defaultImport: 'component',
      }),
    ],
  },

  // Config I18n https://v8.i18n.nuxtjs.org
  // TODO : lazy load doesn't work
  i18n: {
    langDir: 'lang/',
    lazy: true,
    baseUrl: 'http://localhost:3000',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        name: 'English',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.json',
        name: 'Français',
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    vueI18n: {
      legacy: false,
      locale: 'en',
    },
  },

  // Config Color Mode https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },

  // Config Google Font https://google-fonts.nuxtjs.org
  googleFonts: {
    families: {
      Roboto: true,
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
});
