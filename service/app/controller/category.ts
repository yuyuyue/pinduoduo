import { Controller } from 'egg'

export default class CategoryController extends Controller {

  // 返回所有，用于分类页显示
  async index() {
    const { ctx } = this
    
    const indexInfo = await this.ctx.service.category.index()

    if (!indexInfo) {
      ctx.returnBody(401, "查询失败", -1)
      return
    }  
    
    ctx.returnBody(200, "查询成功", 0, indexInfo)
  }

  // 通过type_second 来分类
  async indexT2() {
    const { ctx } = this

    const type_second = ctx.params.type_second

    const indexInfo = await ctx.service.category.indexT2(type_second)

    if (!indexInfo) {
      ctx.returnBody(401, "查询失败", -1)
    }

    ctx.returnBody(200, "查询成功", 0, indexInfo)
  }

  // 批量创建
  async createBulk() {
    const { ctx } = this

    const createInfo = ctx.request.body.data
    const resultInfo = await ctx.service.category.createBulk(createInfo)

    if (!resultInfo) {
      return ctx.returnBody(404, "创建失败", -1)
    }

    ctx.returnBody(200, "创建成功", 0)

  }
}