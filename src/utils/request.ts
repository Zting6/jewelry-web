import axios from 'axios'
import { getToken } from '@/utils/auth';

const request = axios.create({
    baseURL: 'http://182.92.242.5:8080',
    timeout: 500000
})

// 请求拦截器
request.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        config.headers.authentication = `${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use(res => {
    console.log("响应拦截res：", res)
    //错误码的处理
    let { code, msg } = res.data;

    return res.data
}, error => {
    return Promise.reject(error)
})

export default request