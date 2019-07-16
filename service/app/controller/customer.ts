
import { Controller } from 'egg';

export default class CustomerController extends Controller {

  // 估计customer_id 精准查询
  async show() {

    const { ctx } = this

    const customer_id = ctx.params.id

    const customerInfo = await ctx.service.customer.findByCustomerId(customer_id)
    
    if (!customerInfo) {
      ctx.returnBody(404, "查询失败", -1)
      return
    }

    ctx.returnBody(200, "查询成功", 0, customerInfo.dataValues)
  }

  // 更新顾客信息
  async update() {
    const ctx = this.ctx

    const customer_id = ctx.params.id
    const updates = ctx.request.body
    updates.updated_at = new Date()

    const updateInfo = await ctx.service.customer.update(customer_id, updates)

    if (!updateInfo) {
      ctx.returnBody(401, "更新失败", 0)
      return
    }

    ctx.returnBody(200, "更新成功", 0)
  }

  // 注册
  public async register() {
    const { ctx } = this
    const { mobile, username, password, code } = ctx.request.body
    console.log(ctx.session.code)
    // 验证码不正确正确
    if (code !== ctx.session.code) {
      ctx.returnBody(401, '验证码错误', -1)
      return
    }

    // 注册成功返回体
    const registerInfo = await ctx.service.customer.register({ mobile, username, password })
    const { status, msg, type } = registerInfo
    ctx.returnBody(status, msg, type)
  }

  // 密码登录
  public async loginByPwd() {
    const { ctx } = this
    const { mobile, password } = ctx.request.body

    // 登录结果
    const loginInfo = await ctx.service.customer.loginIn({ mobile, password })
    const { status, msg, type, token, customer_id } = loginInfo

    // 验证token
    if (type == 0 && token) {
      // id存入Cookie, 用于验证过期.
      const opts = {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        domain: '127.0.0.1'
      }
      ctx.cookies.set('token', token, opts) // cookie 有效期7天
      ctx.cookies.set('customer_id', customer_id, opts) // cookie 有效期7天
    }
    ctx.returnBody(status, msg, type)
  }

  // 验证码登录
  public async loginByCode() {
    const { ctx, app } = this
    const { mobile, code } = ctx.request.body

    // 验证码错误
    if (code !== ctx.session.code) {
      ctx.returnBody(401, '验证码错误', -1)
      return
    }

    const customerInfo =  await ctx.service.customer.getCustomerByMobile(mobile)

    // 用户不存在
    if (!customerInfo) {
      ctx.returnBody(401, '用户不存在，请注册', -1)
      return
    }

     // 验证通过, 生产token
    const token = ctx.helper.jwt.sign({ customer_id: customerInfo.customer_id }, app.config.jwtkey, { expiresIn: '7d' })

    // id存入Cookie, 用于验证过期.
    const opts = {
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      domain: '127.0.0.1'
    }
    ctx.cookies.set('token', token, opts) // cookie 有效期7天
    ctx.cookies.set('customer_id', customerInfo.customer_id, opts) // cookie 有效期7天

    ctx.returnBody(200, '登录成功', 0)
  }
  // 登出
  public async loginOut() {
    const { ctx } = this

    await ctx.cookies.set('token', "")
    await ctx.cookies.set('customer_id', "")

    ctx.returnBody(200, '退出成功', 0)
  }

  // update password
  public async updatePwd() {
    const { ctx } = this

    const { mobile, password, code } = ctx.request.body

    // 验证码错误
    if (code !== ctx.session.code) {
      ctx.returnBody(401, '验证码错误', -1)
      return
    }

    const updateInfo = await ctx.service.customer.updatePwd( mobile, password)

    if (!updateInfo) {
      ctx.returnBody(404, "更新失败", -1)
      return 
    }

    ctx.returnBody(200, "更新成功", 0)
  }

}
