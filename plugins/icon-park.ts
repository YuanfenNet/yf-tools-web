import { IconPark } from '@icon-park/vue-next/es/all'
import '@icon-park/vue-next/styles/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('icon-park', IconPark)
})
