export default defineNuxtConfig({
    devtools: { enabled: true },
    meta: {
        title: '猿奋工具箱',
        titleTemplate: '%s - 猿奋工具箱',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/img/favicon/apple-touch-icon.png',
            },
            {
                rel: 'icon',
                type: 'image/image/png',
                sizes: '32x32',
                href: '/img/favicon/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/image/png',
                sizes: '16x16',
                href: '/img/favicon/favicon-16x16.png',
            },
            { rel: 'manifest', href: '/img/favicon/site.webmanifest' },
        ],
    },

    css: ['~/assets/common.scss'],

    modules: ['nuxt-simple-sitemap', 'nuxt-gtag', '@element-plus/nuxt'],

    gtag: {
        id: 'G-2NCGY88M1Y',
    },

    elementPlus: {},
})
