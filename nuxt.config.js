import { sentryVitePlugin } from '@sentry/vite-plugin'

export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/scss/common.scss'],
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/'],
        },
    },

    modules: ['@element-plus/nuxt', '@nuxt/content', '@nuxtjs/color-mode', '@vueuse/nuxt', 'nuxt-gtag', 'nuxt-simple-sitemap'],

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
            process.env.APP_ENV === 'prd'
                ? sentryVitePlugin({
                      include: '.nuxt/dist',
                      ignore: ['node_modules', 'nuxt.config.ts'],
                      authToken: '910f03f1a685822eee3c9918bdc5240fbbab0397dbb9fe0223fdb6627117cb77',
                      project: 'yf-tools-web',
                      org: 'yuanfen',
                  })
                : null,
        ],
    },
    elementPlus: {
        importStyle: 'scss',
        themes: ['dark'],
    },
    /*
     * Sentry needs sourcemaps
     */
    sourcemap: {
        client: true,
        server: true,
    },
})
