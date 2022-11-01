import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/index.vue'),
    // rediect 路由重定向
    redirect: '/user',
    children: [
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/modules/map/index.vue')
      },
      {
        path: 'richtext',
        name: 'Richtext',
        component: () => import('@/views/modules/richtext/index.vue')
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/userInfo/user/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
