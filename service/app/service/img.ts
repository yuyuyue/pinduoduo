import { Service } from 'egg'
import { OptionUpdateInterface } from './type/img-interface'

export default class ImgService extends Service {
  
  /**
   * @func showAllByOidAndType 通过所有者id和type对数据库查询，返回所有结果
   * @param owner_id 图片所有者id
   * @param type 图片类型
   */
  public async showAllByOidAndType(owner_id: string, type: string) {
    const { ctx } = this

    const showInfo = await ctx.model.Img.findAll({
      where: {
        owner_id,
        type
      }
    })
    
    return showInfo
  }


  /**
   * @func updateBulk 批量更新，创建，删除图片
   * @param updateInfo 数据库更新，创建，删除图片接口
   */
  public async updateBulk(updateInfo: Array<OptionUpdateInterface>) {
    const Img = this.ctx.model.Img

    updateInfo.map(update => {
      update.updated_at = new Date(new Date().getTime() + 8 * 60 * 60 * 1000)
    })

    const updateArrayPromise : Array<any> = []
    // 批量事务， 图片的创建，删除，增加
    return this.ctx.model.transaction(async t => {
      for (let updateImg of updateInfo) {
        if (updateImg.state === 0) { // 创建图片
          updateImg.img_id =  this.ctx.helper.uuid.v4().replace(/-/g, "")
          updateArrayPromise.push(Img.create(
            updateImg,
            { transaction: t }
          ))
        } else if (updateImg.state === 1) { // 更新图片时间顺序， 1表示已经存在
          updateImg.updated_at = new Date()

          updateArrayPromise.push(Img.update(
            updateImg,
            { where: { img_id: updateImg.img_id } },
            { transaction: t }
          ))
        } else if (updateImg.state === -1 && updateImg.img_id) { // state == -1 删除图片 img_id存在则已存入数据库中，则要进行删除
          updateArrayPromise.push(Img.destroy(
            { where: { img_id: updateImg.img_id }},
            { transaction: t }
          ))
        }
      }
      return Promise.all(updateArrayPromise)
    }).then((result) => {
      console.log(result)
      return true
    }).catch((err) => {
      console.log(err)
      return false
    })
  }
}