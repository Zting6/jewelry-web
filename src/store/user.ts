import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
import { type Product, buyProducts } from '../api/shop'
import { useShopStore } from './products'
import { setToken, clearToken } from '@/utils/auth';
import { loginByUser, loginByPhone, userLogout } from '@/api/user/user'


type shopCar = {
  shopCount: number
} & Omit<Product, 'inventory'>

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // 登录token
      token: null,
      // 登录用户信息
      userInfo: {},
    }
  },
  getters: {
  },
  actions: {
    async userLogin(reqForm) {
      this.userInfo = reqForm;
      const res = await loginByUser(reqForm);
      if (res.code === 1 || res.code === 200) {
        ElMessage({
          message: '登录成功',
          type: 'success'
        })
        this.token = res.data.token;
        console.log('logres: ', this.token);
        if (this.token) {
          setToken(this.token);
        }

      } else {
        ElMessage({
          message: '登录失败',
          type: 'error'
        })
      }

      return res;


    },
    async phoneLogin(reqForm) {
      this.userInfo = reqForm;
      const res = await loginByUser(reqForm);

      if (res.code === 1 || res.code === 200) {
        ElMessage({
          message: '登录成功',
          type: 'success'
        })
        this.token = res.data.token;
        console.log('log: ', this.token);
        if (this.token) {
          setToken(this.token);
        }

      } else {
        ElMessage({
          message: '登录失败',
          type: 'error'
        })
      }

      return res;

    },
    // Logout
    async logout() {
      console.log('logout: ', this.userInfo);
      this.userInfo = {};
      this.token = null;
      console.log('token: ', this.token);

      clearToken();
      await userLogout();

      // 路由表重置
      // location.reload();
    },



  },
})
