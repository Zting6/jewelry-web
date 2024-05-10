import request from '@/utils/request';
import type { AxiosResponse } from 'axios';

interface ApiRequest {
    get: (url: string, params?: any) => Promise<AxiosResponse<any>>;
    post: (url: string, data?: any) => Promise<AxiosResponse<any>>;
    put: (url: string, data?: any) => Promise<AxiosResponse<any>>;
    delete: (url: string, data?: any) => Promise<AxiosResponse<any>>;
}

const apiRequest: ApiRequest = {
    get: (url, params) => request.get(url, { params }),
    post: (url, data) => request.post(url, data),
    put: (url, data) => request.put(url, data),
    delete: (url, data) => request.delete(url, data)
};

export default apiRequest;
