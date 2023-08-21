import VueDragZone from 'vue-drag-zone'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            VueDragZone,
        },
    }
})
