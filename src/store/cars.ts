import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
import { type Product, buyProducts } from '../api/shop'
import { useShopStore } from './products'

type shopCar = {
  shopCount: number
} & Omit<Product, 'inventory'>

export const useCarsStore = defineStore('cars', {
  state: () => {
    return {
      shopCars: [] as shopCar[],
      buyStatus: null as null | string,
    }
  },
  getters: {
    totalPrice(state) {
      return state.shopCars.reduce((total, item) => {
        return total + item.shopCount * item.price
      }, 0)
    },
  },
  actions: {
    async addProduct(product: Product) {
      console.log(product)
      //判断商品是否有库存
      if (product.inventory < 1) {
        return
      }
      //判断购物车是否存在商品
      const carsItem = this.shopCars.find((item) => item.id === product.id)
      if (!carsItem) {
        this.shopCars.push({
          id: product.id,
          goodsPic: product.goodsPic,
          goodsName: product.goodsName,
          price: product.price,
          shopCount: 1,
        })
      } else {
        carsItem.shopCount++
      }
      const shopStore = useShopStore()
      await shopStore.deleteProduct(product.id)
    },

    async reduceProduct(product: Product) {
      console.log(product)
      //判断购物车是否存在商品
      const carsItem = this.shopCars.find((item) => item.id === product.id)
      //存在商品则减少购物车商品数量
      if (carsItem) {
        if (carsItem.shopCount > 0) {
          carsItem.shopCount--
        } else {
        }
      }
      const shopStore = useShopStore()
      //增加库存数量
      await shopStore.addProduct(product.id)
    },

    async clickBuy() {
      const ret = await buyProducts()
      if (ret && this.totalPrice) {
        this.buyStatus = 'true'
        ElMessage({
          message: `The payment is successful, the total amount:${this.totalPrice}`,
          type: 'success',
        })
        //清空购物车
        this.shopCars = []
      } else {
        this.buyStatus = 'false'
        ElMessage({
          message: `Payment failed, please try again later`,
          type: 'warning',
        })
      }
    },
  },
})
