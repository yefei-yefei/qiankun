import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import Svgicon from '@/icons'
const app = createApp(App)
Svgicon(app)
app.use(store).use(router).mount('#app')
