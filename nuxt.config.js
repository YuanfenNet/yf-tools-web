export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/scss/common.scss'],

    modules: [
        '@nuxt/content',
        '@nuxtjs/color-mode',
        'nuxt-simple-sitemap',
        'nuxt-gtag',
        '@element-plus/nuxt',
    ],

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
    },
    elementPlus: {
        importStyle: 'scss',
        themes: ['dark'],
    },
})
