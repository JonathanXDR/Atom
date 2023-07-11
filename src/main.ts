import OctIcon from '@/components/OctIcon.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@primer/css/index.scss'
import '@primer/octicons'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('OctIcon', OctIcon)

app.mount('#app')
