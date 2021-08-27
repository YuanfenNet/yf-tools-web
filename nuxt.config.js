export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
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

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['~/static/css/element-theme.css', '~/assets/common.scss'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/global-components.js',
        { src: '@/plugins/code-mirror.js', ssr: false },
        { src: '@/plugins/drag-zone.js', ssr: false },
        { src: '@/plugins/baidu.js', ssr: false },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/sitemap',
        '@nuxtjs/google-gtag',
        '@nuxtjs/markdownit',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    sitemap: {
        hostname: 'https://tools.yuanfen.net',
        cacheTime: 1000 * 60 * 15,
        gzip: true,
        generate: false, // Enable me when using nuxt generate
    },

    'google-gtag': {
        id: 'G-2NCGY88M1Y',
    },

    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: true,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [/^element-ui/],
    },
}
