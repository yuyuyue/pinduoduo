// 封装axios
import { notification } from 'antd'
const Axios = require('axios')

const axios = new Axios.create({
  //当创建实例的时候配置默认配置
  xsrfCookieName: 'xsrf-token',
  baseURL: 'http://127.0.0.1:7001/api/v2'
})

axios.interceptors.response.use((response) => {
    console.log(response.data)
    // type 0 成功 -1 失败
    if (response.data.type === 0) {
      return Promise.resolve(response.data)
    } else {
      notification['error']({
        message: response.data.msg
      })
      return Promise.reject({
        errorMsg: response.data.msg
      })
    }
}, (error) => {
  console.log('----------------', error)
  console.log('e', error.status)
  console.log('Error', error.message)
  if (error.response.status === 401) {
    notification['error']({
      message: '还未登录哦，即将跳转至登录页'
    })
    return Promise.reject({
      errorMsg: '未登录'
    })
  }
  notification['error']({
    message: '资源去外太空了，请刷新'
  })
  return Promise.reject({
    errorMsg: '系统错误!'
  })
})


export default axios