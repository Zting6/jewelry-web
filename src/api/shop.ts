export interface Product {
  id: number
  goodsPic: string
  goodsName: string
  price: number
  inventory: number
}

const Products: Product[] = [
  { id: 1, goodsPic: 'https://asset.swarovski.com.cn/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_675/5678045_png/%E3%80%90%E6%AD%A4%E6%B2%99%E5%90%8C%E6%AC%BE%E3%80%91swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.png', goodsName: 'Airpods', price: 998, inventory: 3 },
  { id: 2, goodsPic: 'https://asset.swarovski.com.cn/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_675/5678045_png/%E3%80%90%E6%AD%A4%E6%B2%99%E5%90%8C%E6%AC%BE%E3%80%91swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.png', goodsName: 'MacBook2022', price: 12998, inventory: 5 },
  { id: 3, goodsPic: 'https://asset.swarovski.com.cn/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_675/5678045_png/%E3%80%90%E6%AD%A4%E6%B2%99%E5%90%8C%E6%AC%BE%E3%80%91swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.png', goodsName: 'iwatch 8', price: 3498, inventory: 2 },
  { id: 4, goodsPic: 'https://asset.swarovski.com.cn/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_675/5678045_png/%E3%80%90%E6%AD%A4%E6%B2%99%E5%90%8C%E6%AC%BE%E3%80%91swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.png', goodsName: 'ipad 2022', price: 4688, inventory: 6 },
]

//获取商品列表
export const getProducts = async () => {
  await wait(150)
  return Products
}

//随机商品结算
export const buyProducts = async () => {
  await wait(150)
  return Math.random() > 0.5
}

//模拟异步延迟
async function wait(params: number) {
  return new Promise((resolve) => setTimeout(resolve, params))
}
