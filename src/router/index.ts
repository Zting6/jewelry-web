import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/index.vue'
import { useUserStore } from '@/store/user'
import { ElMessage } from 'element-plus';

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

//全局前置守卫
// router.beforeEach(async (to, from, next) => {
//   const userStore = useUserStore();
//   let token = userStore.token;
//   //获取token
//   //如果token存在
//   if (token !== '' && token !== null) {
//     //有了token还单击了登录按钮
//     if (to.path === "/login") {
//       //跳回主页去
//       next("/");
//     }
//   } else {
//     //没有登录就跳转到我的订单页面了
//     if (to.name === "order" || to.name === "cart") {

//       ElMessage.warning("还没有登录,请先登录!");
//       // 跳转到登录页面,并记录当前路径
//       // next("/login?redirect=" + to.path);
//       next("/login");
//       return;
//     }
//     next();

//   }
// });

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const token = userStore.token;

  // 如果没有 token，即用户未登录
  if (!token) {
    if (to.name === 'order' || to.name === 'cart') {
      ElMessage.warning('请先登录！');
      next('/login'); // 直接跳转到登录页
    } else {
      next(); // 不需要登录的路由，直接跳转
    }
  } else {
    // 如果已经登录
    if (to.path === '/login') {
      next('/'); // 已登录时访问登录页，直接跳转到首页
    } else {
      next(); // 其他情况，继续访问目标路由
    }
  }
});

export default router
