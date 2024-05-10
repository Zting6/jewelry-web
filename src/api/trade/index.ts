import http from '../http'

//添加地址
export const addAddress = (params) => {
    return http.post(`/user/addressBook`, {
        "consignee": params.name,
        "phone": params.phone,
        "sex": params.sex,
        "provinceCode": params.location[0],
        "cityCode": params.location[1],
        "districtCode": params.location[2],
        "detail": params.detailLoc,
        "label": params.locType,
        "isDefault": params.isdefault,
    })
}

//查询地址
export const getallAddress = () => {
    return http.get(`/user/addressBook/list`)
}

//修改默认地址
export const changeDefaultAddress = (id) => {
    return http.post(`/user/addressBook/default`, {
        "addressBookId": id,

    })
}





