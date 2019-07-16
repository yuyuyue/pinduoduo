
import { Controller } from "egg"

export default class GoodController extends Controller {
  
  // 创建商品
  async create() {
    const { ctx } = this

    const createInfo = ctx.request.body

    const createdInfo =  await ctx.service.good.create(createInfo)

    if (!createdInfo) {
      return ctx.returnBody(404, "创建失败", -1)
    }

    ctx.returnBody(200, "创建成功", 0)
  }

  // 更新商品
  async update() {
    const { ctx } = this

    const good_id = ctx.params.good_id
    const updateInfo = ctx.request.body
    const updatedInfo = await ctx.service.good.update(good_id, updateInfo)

    if (!updatedInfo) {
      return ctx.returnBody(404, "更新失败", -1)
    }
    ctx.returnBody(200, "更新成功", 0)
  }

  // 通过good_id查找对应商品
  async show() {
    const { ctx } = this

    const good_id = ctx.params.good_id
    const showInfo = await ctx.service.good.show(good_id) 

    if (showInfo) {
      ctx.returnBody(200, "查询成功", 0, showInfo)
      return
    }
    ctx.returnBody(400, "查询失败", -1)
  }

  // 查找该类型的商品
  async indexByCategoryId() {
    const { ctx } = this

    const category_id = ctx.params.category_id
    const query = {
      limit: ctx.helper.parseToInt(ctx.query.limit) || 10,
      offset: ctx.helper.parseToInt(ctx.query.offset) || 0,
      category_id
    }
    const resultsInfo = await ctx.service.good.indexByCategoryId(query)

    console.log(resultsInfo) 
    ctx.returnBody(200, "查询成功", 0, resultsInfo)
  }
}