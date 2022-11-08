import axios from 'axios'
import { ElMessage } from 'element-plus'
import { diffTokenTime } from '@/utils/auth'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 拦截器
service.interceptors.request.use(
  (config) => {
    // 判断过期时间
    if (localStorage.getItem('token')) {
      // 过期
      if (diffTokenTime()) {
        store.dispatch('app/logout')
        return Promise.reject(new Error('token，失效'))
        // 过期，拦截
      } else {
        //
      }
    }
    // 挂载token token挂载到headers上
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    // Promise.reject(new Error(error)) 用来抛出错误并打印在控制台并阻止代码往下继续运行
    return Promise.reject(new Error(error))
  }
)
service.interceptors.response.use(
  (response) => {
    // 接口返回信息
    const meta = response
    const { data } = meta
    if (meta.status === 200 || meta.status === 201) {
      return data
    } else {
      ElMessage.error('请求接口错误')
      return Promise.reject(new Error('请求接口错误'))
    }
  },
  (error) => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(error.response.data)
  }
)
export default service
