import VueFooter from 'vue-footer/dist/ssr.js'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            VueFooter,
        },
    }
})
