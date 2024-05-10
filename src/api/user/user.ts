import http from '../http'

// 注册
export const register = (regParams: { userName: string; sex: string; password: string; repassword: string; name: string; phone: string; code: string }) => {
    return http.post(`/user/user/insert`, {
        "id": 'null',
        "userName": regParams.userName,
        "name": regParams.name,
        "password": regParams.password,
        "phone": regParams.phone,
        "sex": regParams.sex,
        "code": regParams.code
    })
}

// 获取验证码
export const code = (phone: string) => {
    return http.post(`/user/user/sendCode/${phone}`)
}

// 登录
export const loginByUser = (regParams: { name: string; passward: string; phone: string; code: string }) => {
    return http.post(`/user/user/login/password`, {
        "username": regParams.name,
        "password": regParams.passward,
        "code": null,
        "phone": null,
    })
}
export const loginByPhone = (regParams: { name: string; password: string; phone: string; code: string }) => {
    return http.post(`/user/user/login/code`, {
        "phone": regParams.phone,
        "code": regParams.code,
        "username": null,
        "password": null,
    })
}
// 退出登录
export const userLogout = () => {
    return http.post(`/user/user/logout`)
}
