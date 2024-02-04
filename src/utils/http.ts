// 封装axios
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

const http = axios.create({
    baseURL: '',
    timeout: 10000000,
})

// 请求拦截器
http.interceptors.request.use((config) => {
    return config
}, (error: any) => Promise.reject(error))
// 响应拦截器
http.interceptors.response.use((res: AxiosResponse) => res.data, (error: any) => {
    return Promise.reject(error)
})


export default http
