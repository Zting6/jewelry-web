import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: { header: true }
      // children: [
      //   {
      //     path: '',//默认显示的路由
      //     component: category
      //   }
      // ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue'),
      meta: { small_header: true }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/index.vue'),
      meta: { small_header: true }
    },
    {
      path: '/prolist',
      name: 'prolist',
      component: () => import('../views/prolist/index.vue'),
      meta: { header: true }
    }
  ]
})

export default router
