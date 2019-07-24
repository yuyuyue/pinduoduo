import { Controller } from 'egg';

export default class ShopController extends Controller {
  
  // 模糊查询店铺
  async showByName() {
    const { ctx } = this

    const name = escape(ctx.params.name)
    const options = {
      limit: ctx.helper.parseToInt(ctx.query.limit) || 10,
      offset: ctx.helper.parseToInt(ctx.query.offset) || 0,
      name
    }
    const shopInfo = await ctx.service.shop.listNameLike(options)

    if (!shopInfo) {
      ctx.returnBody(404, "查询失败", -1)
      return
    }

    ctx.returnBody(200, "查询成功", 0, shopInfo.dataValues)
  }

    // 估计shop_id 精准查询
    async show() {

      const { ctx } = this
  
      const shop_id = ctx.params.id
  
      const shopInfo = await ctx.service.shop.findByShopId(shop_id)
      
      if (!shopInfo) {
        ctx.returnBody(404, "查询失败", -1)
        return
      }
  
      ctx.returnBody(200, "查询成功", 0, shopInfo.dataValues)
    }

  // 更新店铺
  async update() {
    const ctx = this.ctx

    const shop_id = ctx.params.id
    const updates = ctx.request.body
    updates.updated_at = new Date()
    
    const updateInfo = await ctx.service.shop.update(shop_id, updates)

    if (!updateInfo) {
      ctx.returnBody(401, "更新失败", 0)
      return
    }

    ctx.returnBody(200, "更新成功", 0)
  }

  // 注册
  public async register() {
    const { ctx } = this
    const { mobile, password, code } = ctx.request.body

    // 验证码不正确正确
    if (code !== ctx.session.code) {
      ctx.returnBody(401, '验证码错误', -1)
      return
    }

    // 注册成功返回体
    const registerInfo = await ctx.service.shop.register({ mobile, password })
    const { status, msg, type } = registerInfo

    ctx.returnBody(status, msg, type)
  }

  // 密码登录
  public async loginByPwd() {
    const { ctx } = this
    const { mobile, password } = ctx.request.body

    // 登录结果
    const loginInfo = await ctx.service.shop.loginIn({ mobile, password })
    const { status, msg, type, token, data } = loginInfo

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
      ctx.cookies.set('shop_id', data.shop_id, opts) // cookie 有效期7天
    }
    ctx.returnBody(status, msg, type, data)
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

    const shopInfo =  await ctx.service.shop.getShopByMobile(mobile)

    // 用户不存在
    if (!shopInfo) {
      ctx.returnBody(401, '用户不存在，请注册', -1)
      return
    }

      // 验证通过, 生产token
    const token = ctx.helper.jwt.sign({ shop_id: shopInfo.shop_id }, app.config.jwtkey, { expiresIn: '7d' })

    // id存入Cookie, 用于验证过期.
    const opts = {
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      domain: '127.0.0.1'
    }
    ctx.cookies.set('token', token, opts) // cookie 有效期7天
    ctx.cookies.set('shop_id', shopInfo.shop_id, opts) // cookie 有效期7天

    let data = shopInfo.dataValues
    delete data.password
    ctx.returnBody(200, '登录成功', 0, data)
  }

  // 登出
  public async loginOut() {
    const { ctx } = this

    await ctx.cookies.set('shop_token', "")
    await ctx.cookies.set('shop_id', "")

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

    await ctx.service.shop.updatePwd( mobile, password)
  }
}