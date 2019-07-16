
import { Controller } from "egg"

export default class OptionController extends Controller {
  
  // 通过商品id查询所有的商品选择
  async indexByGoodId() {
    const { ctx } = this 

    const good_id = ctx.params.good_id

    const optionsInfo = await ctx.service.option.indexByGoodId(good_id)

    if (!optionsInfo) {
      ctx.returnBody(401, "没有数据", -1)
      return
    }

    ctx.returnBody(200, "查询成功", 0, optionsInfo)
  }

  // 批量创建
  async createBulk() {
    const { ctx } = this

    const optionsInfo = ctx.request.body.data

    const resultInfo = await ctx.service.option.createBulk(optionsInfo)


    if (!resultInfo) {
      ctx.returnBody(401, "创建失败", -1)
      return
    }

    ctx.returnBody(200, "创建成功", 0)
  }

  // 批量更新
  async updateBulk() {
    const { ctx } = this

    const updateInfo = ctx.request.body.data

    const resultInfo = await ctx.service.option.updateBulk(updateInfo)

    if (!resultInfo) {
      ctx.returnBody(401, "部分数据更新失败", -1)
      return
    }

    ctx.returnBody(200, "更新成功", 0)
  }
}