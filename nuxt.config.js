export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: '猿奋小工具集',
        titleTemplate: '%s - 猿奋小工具集',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '猿奋小工具集，致力于为广大开发者提供最好用的小工具。' }
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
            { rel: 'icon', type: 'image/image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
            { rel: 'manifest', href: '/favicon/site.webmanifest' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['element-ui/lib/theme-chalk/index.css', '~/assets/common.scss'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/global-components.js',
        { src: '@/plugins/code-mirror.js', ssr: false },
        { src: '@/plugins/drag-zone.js', ssr: false },
        { src: '@/plugins/baidu.js', ssr: false }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/google-gtag'
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    'google-gtag': {
        id: 'G-2NCGY88M1Y'
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [/^element-ui/]
    }
}
