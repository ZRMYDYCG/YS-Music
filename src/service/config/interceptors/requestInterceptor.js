export default {
  onRequest: (config) => {
    // 在发送请求之前做些什么
    return config
  },
  onError: (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
}
