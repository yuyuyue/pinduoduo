const crypto = require('crypto')
const uuid = require('uuid')
const jwt = require('jsonwebtoken')
// const Core = require('@alicloud/pop-core')



// const client = new Core({
//   accessKeyId: 'LTAIB9POopknik4u',
//   accessKeySecret: '4adzQwzrHLt8nfLIhcUTi9mpXBOvmg',
//   endpoint: 'https://dysmsapi.aliyuncs.com',
//   apiVersion: '2017-05-25'
// })

export default {
  
  get jwt() {
    return jwt
  },

  get uuid() {
    return uuid
  },

  //转整型
  parseToInt (str: string | number) {
    if (typeof str === 'number') return str
    if (!str) return 0
    return parseInt(str) || 0
  },

  // aes加密
  aesEncrypt (data: string, key: string, iv: string) {
    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv)
    var crypted = cipher.update(data, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
  },

  // aes解密
  aesDecrypt (encrypted: string, key: string, iv: string) {
    const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv)
    var decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  },

  // // 手机验证码
  // sendPhoneMsg (type: string, params: string, requestOption: object) {
  //   client.request(type, params, requestOption)
  //     .then((result) => {
  //       console.log(JSON.stringify(result))
  //     }, (ex) => {
  //       console.log(ex)
  //     })
  // },

  // 产生6位随机数
  random6(): string {
    return Math.floor(Math.random()*899999 + 100000) + ''
  }
}



