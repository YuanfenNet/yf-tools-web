import VueCodemirror from 'vue-codemirror'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            VueCodemirror,
        },
    }
})
