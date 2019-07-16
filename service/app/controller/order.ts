import { Controller } from 'egg'

export default class OrderController extends Controller {

  // 创建订单
  async create() {
    const { ctx } = this

    const createInfo = ctx.request.body.data

    const resultInfo =  await ctx.service.order.createBulk(createInfo)

    if (!resultInfo) {
      return ctx.returnBody(404, "创建失败", -1)
    }

    ctx.returnBody(200, "创建成功", 0)
  }

  // 更新订单
  async update() {
    const { ctx } = this

    const order_id = ctx.params.order_id
    const updateInfo = ctx.request.body.data
    
    const updatedInfo = await ctx.service.order.updateBulk(order_id, updateInfo)

    if (!updatedInfo) {
      return ctx.returnBody(404, "更新失败", -1)
    }
    ctx.returnBody(200, "更新成功", 0)
  }

  // 通过顾客id和状态查询订单
  async index() {
    const { ctx } = this 

    const customer_id =  ctx.params.customer_id
    const state = ctx.params.state

    const resultInfo = await ctx.service.order.index(customer_id, state)

    if (!resultInfo) {
      return ctx.returnBody(404, " 查询失败", -1)
    }

    ctx.returnBody(200, "查询成功", 0, resultInfo)
  }
}