
import { Service } from 'egg'
import { CodeInterface } from './type/code-interface'
const Core = require('@alicloud/pop-core')

export default class Code extends Service {
    /**
   * @function sendVerificationCode 发送验证码
   * @param mobile 手机号
   * @param code 验证码
   *  */
  public async sendVerificationCode(mobile: string, code: string) {
    
    const { accessKeyId, accessKeySecret, endpoint, apiVersion } = this.app.config.core

    const clientOption = {
      accessKeyId,  // 阿里云 accessKeyId
      accessKeySecret, // 阿里云 accessKeySecret
      endpoint, // 请求域名
      apiVersion // 版本
    }

    // 开启客户端
    var client = new Core(clientOption)

    // 参数
    var params = {
      "PhoneNumbers": mobile,
      "SignName": "夕夕购物",
      "TemplateCode": "SMS_170115086",
      "TemplateParam": `{\"code\":\"${code}\"}`
    }

    var requestOption = {
      method: 'POST'
    }

    /**
     *  @param resultInfo ./type/customer-interface/LoginInterface
     */
    let resultInfo: CodeInterface = {}

    await client.request('SendSms', params, requestOption)
      .then((result: object) => {
        resultInfo = result
      }, (ex: object) => {
        resultInfo = ex
      })
    return resultInfo
  }

}
