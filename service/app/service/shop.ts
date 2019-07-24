
import { Service } from 'egg';
import { LoginInterface, RegisterInterface, UpdateInterface } from './type/shop-interface'

export default class Shop extends Service {

  /**
   * @func listNameLike 模糊查询店铺
   * @param name  查询名
   * @param options 分页条件
   */
  public async listNameLike({ offset = 0, limit = 10, name = '' }: { offset: number; limit: number; name?: string }) {
    const { ctx } = this

    const Op = this.app.Sequelize.Op
    const dname =  decodeURI(name)
    // 未完成热度排序
    const shopInfo =  await ctx.model.Shop.findAll({
      offset,
      limit,
      attributes: ['id', 'name', 'avatar'],
      where: {
        name: {
          [Op.like]: `%${dname}%`,
        }
      }
    })
    console.log(shopInfo)
    return shopInfo
  }


  /**
   * @func update 更新顾客的基本数据
   * @param updates 更新用户列表自定义接口
   */
  public async update(shop_id: string, updates: UpdateInterface) {
    const { ctx } = this
    
    const updateInfo = await ctx.model.Shop.update(
      updates,
      { where: {shop_id} }
    )
    console.log(updateInfo)
    return updateInfo[0]
  }

   /**
   * @func register 注册
   * @param shop 注册自定义接口
   */
  public async register(shop: RegisterInterface) {
    const { ctx, app } = this
    // 添加uuid
    shop.shop_id = ctx.helper.uuid.v1().replace(/-/g, '')

    // 是否可以查询到
    const queryResult = await this.hasRegister(shop.mobile)

    if (queryResult) {
      return {
        status: 200,
        msg: '该手机号已经被注册',
        type: -1
      }
    }
    
    // 密码加密
    shop.password = ctx.helper.aesEncrypt(shop.password, app.config.aeskey, app.config.aesiv)

    // 新增数据
    await ctx.model.Shop.create(shop)

    // 注册成功，返回shopid给前端
    return {
      status: 201,
      msg: '注册成功',
      type: 0
    }
  }

  /**
   * @func hasRegister 是否注册
   * @param  mobile 手机号
   */
  private async hasRegister(mobile: string) {
    const { ctx } = this
    // 查询用户名
    const shop = await ctx.model.Shop.findOne({
      where: { mobile: mobile }
    })
    // 存在返回true
    if (shop && shop.dataValues.shop_id) {
      return true
    }

    return false
  }

  /**
   * @func login 登录
   * @param shop 登录自定义接口 
   */
  public async loginIn(shop: LoginInterface) {
    const { app, ctx } = this

    const shopInfo = await this.getShopByMobile(shop.mobile)

    // 用户不存在
    if (!shopInfo) {
      return {
        status: 401,
        msg: '用户不存在，请注册',
        type: -1
      }
    }

    // 解密
    const passwordAes = ctx.helper.aesDecrypt(shopInfo.password, app.config.aeskey, app.config.aesiv)

    // 密码不匹配
    if (passwordAes != shop.password) {
      return {
        status: 401,
        msg: '密码不匹配',
        type: -1
      }
    }

    // 验证通过, 生产token
    const token = ctx.helper.jwt.sign({ shop_id: shopInfo.shop_id }, app.config.jwtkey, { expiresIn: '7d' })

    let data = shopInfo.dataValues
    delete data.password
    return {
      status: 200,
      type: 0,
      msg: '登录成功',
      token,
      data
    }
  }

  /**
   * @func getShopByMobile 通过手机号查找商店信息
   * @param mobile 手机号
   */
  public async getShopByMobile(mobile: string) {
    const { ctx } = this
    return await  ctx.model.Shop.findOne({
      where: {mobile: mobile}
    })
  }

  public async updatePwd(mobile: string, password: string) {
    const { ctx, app } = this 

    const passwordAes = ctx.helper.aesEncrypt(password, app.config.aeskey, app.config.aesiv)

    await ctx.model.Shop.update(
      { password: passwordAes },
      { where: { mobile }}
    )
  }

  /**
   * @func findByShopId restful 单条查询顾客
   * @param shop_id 顾客的唯一hash id
   */
  public async findByShopId(shop_id: string) {
    const { ctx } = this

    const shop = await ctx.model.shop.findOne({
      where: {shop_id}
    })
    console.log(shop)
    return shop
  }
}
