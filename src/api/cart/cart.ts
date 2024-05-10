import http from '../http'

//添加购物车
export const addToCart = (cartParams) => {
    return http.post(`/user/shoppingCart/add`, {
        "goodsId": cartParams.goodsId,
        "id": cartParams.id,
        "number": cartParams.number
    })
}

