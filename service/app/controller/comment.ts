import { Controller } from 'egg'

export default class CommentController extends Controller {

  // 创建评论
  async createBulk() {
    const { ctx } = this

    const createInfo = ctx.request.body.data
    const resultInfo = await ctx.service.comment.createBulk(createInfo)

    if (!resultInfo) {
      return ctx.returnBody(404, "创建失败", -1)
    }

    ctx.returnBody(200, "创建成功", 0)
  }

  // 追加评论
  async update() {
    const { ctx } = this

    const comment_id = ctx.params.comment_id
    const commentInfo = ctx.request.body

    const updateInfo = await ctx.service.comment.update(comment_id, commentInfo)

    if (!updateInfo) {
      ctx.returnBody(404, "更新失败", -1)
      return
    }

    ctx.returnBody(200, "更新成功", 0)
  }

  // 通过顾客id查询评论, 用于我的评价
  async indexByCustomerId() {
    const { ctx } = this

    const customer_id = ctx.params.customer_id
    const indexInfo = await ctx.service.comment.indexByCustomerId(customer_id)

    if (!indexInfo) {
      ctx.returnBody(404, "查询失败", -1)
      return
    }

    ctx.returnBody(200, "查询成功", 0, indexInfo)
  }

  // 通过顾客id查询评论, 用于商品评价
  async indexByGoodId() {
    const { ctx } = this

    const good_id = ctx.params.good_id

    const indexInfo = await ctx.service.comment.indexByGoodId(good_id)

    if (!indexInfo) {
      ctx.returnBody(404, "查询失败", -1)
      return
    }

    ctx.returnBody(200, "查询成功", 0, indexInfo)
  }


}