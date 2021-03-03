import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@tabler/core'
import '../node_modules/@tabler/core/dist/css/tabler.min.css'

createApp(App).use(store).use(router).mount('#app') 