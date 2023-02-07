import svgLoader from 'vite-svg-loader';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

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
          content:
            "Bonjour, je m'appelle Arthur Lefevre, je suis un développeur web junior originaire de Belgique. J'ai suivi une formation chez Becode.org pour affiner mes compétences. J'ai de l'expertise dans le développement front-end, j'utilise Vue.js. J'ai une bonne compréhension de HTML, CSS et JavaScript. Je suis passionné par la création d'applications web interactives et user-friendly.",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Bonjour, je m'appelle Arthur Lefevre, je suis un développeur web junior originaire de Belgique. J'ai suivi une formation chez Becode.org pour affiner mes compétences. J'ai de l'expertise dans le développement front-end, j'utilise Vue.js. J'ai une bonne compréhension de HTML, CSS et JavaScript. Je suis passionné par la création d'applications web interactives et user-friendly.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://i.imgur.com/5741C19.png',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://i.imgur.com/5741C19.png',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-simple-sitemap',
  ],

  // vite config https://v3.nuxtjs.org/api/configuration/nuxt-config#vite
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
        defaultImport: 'component',
      }),
      wasm(),
      topLevelAwait(),
    ],
  },

  // Config I18n https://v8.i18n.nuxtjs.org
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en-US',
    lazy: true,
    langDir: 'lang',
    locales: [
      {
        code: 'en-US',
        file: 'en-US.json',
        name: 'English',
        iso: 'us',
        flag: 'flagpack:us',
      },
      {
        code: 'fr-FR',
        file: 'fr-FR.json',
        name: 'Français',
        iso: 'fr',
        flag: 'flagpack:fr',
      },
    ],
    vueI18n: {
      legacy: false,
      fallbackLocale: 'en-US',
    },
  },

  // Config Color Mode https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },

  build: {
    transpile: ['@headlessui/vue'],
  },

  // https://nitro.unjs.io/config
  nitro: {
    minify: true,
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/en'],
    },
  },
  sitemap: {
    hostname: 'https://www.arthur-lefevre.dev',
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
