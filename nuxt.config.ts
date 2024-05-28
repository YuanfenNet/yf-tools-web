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
    checker: true,
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
  typescript: {
    typeCheck: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element-plus/index.scss" as element;`,
        },
      },
    },
    plugins: [],
  },
})
