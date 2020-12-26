export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: '猿奋小工具集',
        titleTemplate: '%s - 猿奋小工具集',
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '猿奋小工具集，致力于为开发者提供最好用的工具集。' }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['element-ui/lib/theme-chalk/index.css'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/global-components.js',
        {
            src: '~plugins/baidu.js',
            ssr: false
        }
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
        '@nuxtjs/google-analytics'
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    googleAnalytics: {
        id: 'G-2NCGY88M1Y'
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [/^element-ui/]
    }
}
