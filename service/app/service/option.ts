
import { Service } from "egg"
import { OptionCreateInterface, OptionUpdateInterface } from './type/option-interface'

export default class OptionService extends Service {
  
  /**
   * @func indexByGoodId 通过good_id查询数据库，返回所有属性
   * @param good_id 商品id
   */
  public async indexByGoodId(good_id: string) {
    const { ctx } = this 

    const optionsInfo = await ctx.model.Option.findAll({
      where: { good_id }
    })

    console.log(optionsInfo)

    return optionsInfo
  }


  /**
   * @fun createBulk 批量创建商品对数据库的ORM
   * @param createInfo 创建字段接口
   */
  public async createBulk(createInfo: Array<OptionCreateInterface>) {
    const { ctx } = this

    createInfo.map(info => {
      info.option_id = ctx.helper.uuid.v4().replace(/-/g, "")
    })
    const resultInfo = await ctx.model.Option.bulkCreate( createInfo, { updateOnDuplicate: ['option_id'] } )

    return resultInfo
  }
    
  /**
   * @func updateBulk 批量更新商品信息
   * @param updateInfo  更新字段接口
   */ 
  public async updateBulk(updateInfo: Array<OptionUpdateInterface>) {
    const { ctx } = this
    

    updateInfo.map(update => {
      update.updated_at = new Date(new Date().getTime() + 8 * 60 * 60 * 1000)
    })
    
  
    const updatePrimose : Array<any> = []
    // 事务 批量更新
    return await this.ctx.model.transaction((t: any) => {

      for (let update of updateInfo) {
        updatePrimose.push(ctx.model.Option.update(update, { where: { option_id: update.option_id } }, { transaction: t }))
      }
      return Promise.all(updatePrimose)
    }).then((result) => {
      const resultInfo = result.every((result) => result[0] === 1)
      if(!resultInfo) {
        throw new Error('更新失败')
      }
      return resultInfo
    }).catch(() => {
      return false
    })
   
  }
}