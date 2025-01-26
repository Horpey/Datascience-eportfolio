export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'vue-sonner/nuxt',
    '@nuxt/icon',
    'nuxt-easy-lightbox',
    'nuxt-single-html',
  ],
  devtools: {
    enabled: true,
  },

  app: {
    baseURL: '/Datascience-eportfolio',
    buildAssetsDir: 'assets',
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: 'favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: 'nuxt.svg' },
        { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  css: [
    '~/assets/css/highlight-theme.css',
  ],

  colorMode: {
    classSuffix: '',
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-10-29',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  googleFonts: {
    families: {
      Geist: {
        wght: '200..900',
      },
    },
  },
  icon: {
    mode: 'svg',
  },
  singleHtml: {
    enabled: true,
    deleteInlinedFiles: true,
    output: '[name].html',
  },
})
