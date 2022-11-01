import router from './index'
import store from '@/store'
// 白名单
const whileList = ['/login']
router.beforeEach((to, form, next) => {
  if (store.getters.token) {
    //   存在
    if (to.path === './login') {
      next('/')
    } else {
      next()
    }
  } else {
    //   白名单是否拥有
    if (whileList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
