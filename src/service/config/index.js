import axios from 'axios'
import requestInterceptor from './interceptors/requestInterceptor'
import responseInterceptor from './interceptors/responseInterceptor'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// 应用请求拦截器
http.interceptors.request.use(
  requestInterceptor.onRequest,
  requestInterceptor.onError
)

// 应用响应拦截器
http.interceptors.response.use(
  responseInterceptor.onResponse,
  responseInterceptor.onError
)

export default http
