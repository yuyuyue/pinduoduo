import { Service } from "egg";
import { GoodCreateInterface, GoodUpdateInterface } from './type/good-interface'

export default class GoodService extends Service {

  /**
   * @func create 用于创建商品对数据库的ORM
   * @param createInfo 创建字段接口
   */
  public async create(createInfo: GoodCreateInterface) {
    const { ctx } = this

    createInfo.good_id = ctx.helper.uuid.v1().replace(/-/g, "")

    return await ctx.model.Good.create(createInfo)
  }
  
  /**
   * @func update 更新商品信息
   * @param good_id 更新列的good_id
   * @param updateInfo  更新字段接口
   */ 
  public async update(good_id: string, updateInfo: GoodUpdateInterface) {
    const { ctx } = this

    updateInfo.updated_at = new Date(new Date().getTime() + 8 * 60 * 60 * 1000)
    
    const updatedInfo  = await ctx.model.Good.update(
      updateInfo,
      { where: { good_id } }
    )

    return updatedInfo[0]
  }

  public async show(good_id: string) {
    const { ctx } = this

    const showInfo = await ctx.model.Good.findOne({
      where: {good_id}
    })

    return showInfo.dataValues
  }

  public async indexByCategoryId({ offset = 0, limit = 10, category_id = undefined }: { offset: number; limit: number; category_id?: string }) {
    const { ctx } = this

    const resultsInfo = await ctx.model.Good.findAll(
      offset,
      limit,
      {
        where: {category_id},
        attributes: ['category_id', 'good_id', 'shop_id', 'name', 'price_group']
      }
    )

    return resultsInfo
  }
}