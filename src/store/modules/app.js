import { login as loginFrom } from '@/api/login'
// import { reject, resolve } from 'core-js/fn/promise'
import router from '@/router'
import { setTokenTime } from '@/utils/auth'
export default {
  // 添加namespaced：true的方式使其成为带命名空间的模块
  namespaced: true,
  state: () => ({
    //   存储token
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    // 用户登录
    login({ commit }, useinfo) {
      return new Promise((resolve, reject) => {
        loginFrom(useinfo)
          .then((res) => {
            commit('setToken', res.data.token)
            router.replace('/')
            // 设置登录时间
            setTokenTime()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 用户失效
    logout({ commit }) {
      // 恢复默认值
      commit('setToken', '')
      router.replace('/login')
    }
  }
}
