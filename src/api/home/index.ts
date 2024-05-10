import http from '../http'

// 分类
export const cateList = () => {
    return http.get(`/user/TypeGoods/typelist`)
}
