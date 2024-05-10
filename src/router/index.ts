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
      path: '/info',
      name: 'info',
      component: () => import('../views/info/index.vue'),
    },
    {
      path: '/prolist',
      name: 'prolist',
      component: () => import('../views/prolist/index.vue'),
      meta: { header: true }
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/detail/index.vue'),

    },
    {
      path: '/detail/:proid',
      name: 'detailWithParam',
      component: () => import('../views/detail/index.vue'),

    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart/index.vue'),

    },
    {
      path: '/addCart',
      name: 'addCart',
      component: () => import('../views/cart/addCart/index.vue'),

    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/order/index.vue'),
    },
    {
      path: '/trade',
      name: 'trade',
      component: () => import('../views/trade/index.vue'),
    },
    {
      path: '/tradeDetail',
      name: 'tradeDetail',
      component: () => import('../views/trade/tradeDetail/index.vue'),
    },
    {
      path: '/tradeDetail/:proid',
      name: 'tradeDetailWithParam',
      component: () => import('../views/trade/tradeDetail/index.vue'),

    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('../views/pay/index.vue'),
    },
    {
      path: '/paysuccess',
      name: 'paysuccess',
      component: () => import('../views/pay/paySuccess/index.vue'),
    },

  ]
})

export default router
