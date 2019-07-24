import axios from '../utils/axios.js'

// 注册
const register = (data) => {
  return axios.post('/shop/register', data)
}

// 密码登录
const loginByPwd = (data) => {
  return axios.post('/shop/loginByPwd', data)
}

// 验证码登录
const loginByCode = (data) => {
  return axios.post('/shop/loginByCode', data)
}

// 登出
const loginOut = () => {
  return axios.get('/shop/loginOut')
}

// 更新密码
const updatePwd = (mobile, data) => {
  return axios.put(`/shop/updatePwd/${mobile}`, data)
}

// 获取用户信息
const getUserInfo = () => {
  return axios.get('')
}

const getCode = (mobile) => {
  return axios.get(`/code/sendcode/${mobile}`)
}

export default {
  register,
  loginByPwd,
  loginByCode,
  loginOut,
  updatePwd,
  getUserInfo,
  getCode
}