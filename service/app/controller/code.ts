import { Controller } from 'egg';

export default class CodeController extends Controller {
  
    // 发送验证码
    public async sendcode() {
      const { ctx } = this
      const { mobile } = ctx.params
  
      // 6位随机数
      const code = ctx.helper.random6()
  
      const resultInfo = await ctx.service.code.sendVerificationCode(mobile, code)
  
      const { Code, Message } = resultInfo
  
      // Code OK时发送成功
      if (Code === 'OK') {
        ctx.session.code = code
        ctx.returnBody(200, "验证码发送成功", 0, { Message })
      } else {
        ctx.returnBody(200, "验证码发送失败", -1, { Message })
      }
  
    }
    
}