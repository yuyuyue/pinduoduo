
import { Controller } from "egg"

export default class PinController extends Controller {
  
  // 创建拼单
  async create() {
    const { ctx } = this

    const createInfo = ctx.request.body

    const resultInfo = await ctx.service.pin.create(createInfo)

    if (!resultInfo) {
      return ctx.returnBody(404, "创建失败", -1)
    }

    ctx.returnBody(200, "创建成功", 0)
  }

  // 完成拼单，并且更新
  async update() {
    const { ctx } = this

    const pin_id = ctx.params.pin_id
    const updateInfo = ctx.request.body

    const resultInfo = await ctx.service.pin.update(pin_id, updateInfo)

    if (!resultInfo) {
      return ctx.returnBody(404, "更新失败", -1)
    }

    ctx.returnBody(200, "更新成功", 0)
  }

  // 通过商品id查询所有正在拼单的
  async index() {
    const { ctx } = this 

    const good_id =  ctx.params.good_id

    const resultInfo = await ctx.service.pin.index(good_id)

    if (!resultInfo) {
      return ctx.returnBody(404, " 查询失败", -1)
    }

    ctx.returnBody(200, "查询成功", 0, resultInfo)
  }
}