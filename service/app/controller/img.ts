import { Controller } from 'egg'

export default class ImgController extends Controller {

  // 通过owner_id 和 type类型来查找所有图片
  async show() {
    const { ctx } = this

    const owner_id = ctx.params.owner_id
    const type = ctx.params.type

    const showInfo = await ctx.service.img.showAllByOidAndType(owner_id, type)

    if (!showInfo) {
      ctx.returnBody(401, "查询失败", -1)
    }

    ctx.returnBody(200, "查询成功", 0, showInfo)
  }

  // 批量更新或者创建或者删除
  async updateBulk() {
    const { ctx } = this

    const updateInfo = ctx.request.body.data
    const resultInfo = await ctx.service.img.updateBulk(updateInfo)

    if (!resultInfo) {
      ctx.returnBody(401, "更新失败", -1)
      return
    }

    ctx.returnBody(200, "更新成功", 0)
  }
}