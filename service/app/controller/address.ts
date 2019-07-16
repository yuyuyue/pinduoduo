import { Controller } from 'egg'

export default class AddressController extends Controller {

  // 创建收货地址
  async create() {
    const { ctx } = this

    const createInfo = ctx.request.body

    const resultInfo =  await ctx.service.address.create(createInfo)

    if (!resultInfo) {
      return ctx.returnBody(404, "创建失败", -1)
    }

    ctx.returnBody(200, "创建成功", 0)
  }

  // 批量更新收货地址
  async update() {
    const { ctx } = this

    const address_id = ctx.params.address_id
    const updateInfo = ctx.request.body.data
    
    const updatedInfo = await ctx.service.address.updateBulk(address_id, updateInfo)

    if (!updatedInfo) {
      return ctx.returnBody(404, "更新失败", -1)
    }
    ctx.returnBody(200, "更新成功", 0)
  }

  // 通过顾客id查找该顾客所有收货地址
  async index() {
    const { ctx } = this 

    const customer_id =  ctx.params.customer_id

    const resultInfo = await ctx.service.address.index(customer_id)

    if (!resultInfo) {
      return ctx.returnBody(404, " 查询失败", -1)
    }

    ctx.returnBody(200, "查询成功", 0, resultInfo)
  }
}