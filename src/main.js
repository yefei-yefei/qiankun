import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
// svg图标
import Svgicon from '@/icons'
// 路由拦截器
import '@/router/promission'
// 图标
import * as ElIcons from '@element-plus/icons-vue'
const app = createApp(App)
for (const name in ElIcons) {
  app.component(name, ElIcons[name])
}
Svgicon(app)
app.use(store).use(router).mount('#app')
