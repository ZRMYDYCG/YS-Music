export default {
  onResponse: (res) => {
    // 对响应数据做点什么
    return res.data
  },
  onError: (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
}
