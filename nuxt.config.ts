import { sentryVitePlugin } from '@sentry/vite-plugin'

export default defineNuxtConfig({
  site: {
    url: 'https://tools.yuanfen.net',
  },
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/scss/common.scss'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  modules: [
    '@element-plus/nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'nuxt-gtag',
    '@nuxt/eslint',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  content: {
    markdown: {
      anchorLinks: false,
    },
  },

  colorMode: {
    classSuffix: '',
  },

  gtag: {
    id: 'G-2NCGY88M1Y',
  },

  elementPlus: {
    importStyle: 'scss',
    themes: ['dark'],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element-plus/index.scss" as element;`,
        },
      },
    },
    plugins: [
      // Setup sentry error reporting with source maps
      import.meta.env.APP_ENV === 'prd'
        ? sentryVitePlugin({
          authToken: '910f03f1a685822eee3c9918bdc5240fbbab0397dbb9fe0223fdb6627117cb77',
          project: 'yf-tools-web',
          org: 'yuanfen',
        })
        : null,
    ],
  },
  /*
     * Sentry needs sourcemaps
     */
  sourcemap: {
    client: true,
    server: true,
  },
})
