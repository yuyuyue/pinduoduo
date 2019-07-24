'use strict'

import { Service } from 'egg';

import { RegisterInterface, LoginInterface, UpdateInterface } from './type/customer-interface'

/**
 *@func CustomerService 顾客相关的复杂操作
 */
export default class CustomerService extends Service {

  /**
   * @func update 更新顾客的基本数据
   * @param updates 更新用户列表自定义接口
   */
  public async update(customer_id: string, updates: UpdateInterface) {
    const { ctx } = this
    
    const updateInfo = await ctx.model.Customer.update(
      updates,
      { where: {customer_id} }
    )

    return updateInfo[0]
  }

  /**
   * @func register 注册
   * @param customer 注册自定义接口
   */
  public async register(customer: RegisterInterface) {
    const { ctx, app } = this
    // 添加uuid
    customer.customer_id = ctx.helper.uuid.v1().replace(/-/g, '')

    // 是否可以查询到
    const queryResult = await this.hasRegister(customer.mobile)
    console.log(queryResult)
    if (queryResult) {
      return {
        status: 200,
        msg: '该手机号已经被注册',
        type: -1
      }
    }
    
    // 密码加密
    customer.password = ctx.helper.aesEncrypt(customer.password, app.config.aeskey, app.config.aesiv)

    // 新增数据
    await ctx.model.Customer.create(customer)

    // 注册成功，返回customerid给前端
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
    const customer = await ctx.model.Customer.findOne({
      where: { mobile: mobile }
    })
    // 存在返回true
    if (customer && customer.dataValues.customer_id) {
      return true
    }

    return false
  }

  /**
   * @func login 登录
   * @param customer 登录自定义接口 
   */
  public async loginByPwd(customer: LoginInterface) {
    const { app, ctx } = this

    const customerInfo = await this.getCustomerByMobile(customer.mobile)

    // 用户不存在
    if (!customerInfo) {
      return {
        status: 401,
        msg: '用户不存在，请注册',
        type: -1
      }
    }

    const { dataValues } = customerInfo

    // 解密
    const passwordAes: string = ctx.helper.aesDecrypt(dataValues.password, app.config.aeskey, app.config.aesiv)

    // 密码不匹配
    if (passwordAes != customer.password) {
      return {
        status: 401,
        msg: '密码不匹配',
        type: -1
      }
    }

    // 验证通过, 生产token
    const token = ctx.helper.jwt.sign({ customer_id: dataValues.customer_id }, app.config.jwtkey, { expiresIn: '7d' })

    let data = dataValues

    // 删除密码
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
   * @func getCustomerByMobile 通过手机号查找顾客信息
   * @param mobile 手机号
   */
  public async getCustomerByMobile(mobile: string) {
    const { ctx } = this
    return await ctx.model.Customer.findOne({
      where: {mobile: mobile},
    })
  }


  /**
   * @func findByCustomerId restful 单条查询顾客
   * @param customer_id 顾客的唯一hash id
   */
  public async findByCustomerId(customer_id: string) {
    const { ctx } = this

    const customer = await ctx.model.Customer.findOne({
      where: {customer_id}
    })
    console.log(customer)
    return customer
  }

  public async updatePwd(mobile: string, password: string) {
    const { ctx, app } = this 

    const passwordAes = ctx.helper.aesEncrypt(password, app.config.aeskey, app.config.aesiv)

    const updateInfo = await ctx.model.Customer.update(
      { password: passwordAes },
      { where: { mobile }}
    )
    
    return  updateInfo[0]
  }
}
