import { Service } from 'egg'
import { IndexInfoInterface, ReturnInfoInterface, CategoryCreateInterface } from './type/category-interface'

export default class CategoryService extends Service {

  /**
   * @func index 通过一级分类进行组合
   */
  public async index() {
    const { ctx } = this

    const indexInfo = await ctx.model.Category.findAll({
      attributes: [ 'category_id', 'type_first', 'type_second', 'img_src' ]
    })

    let type_first = {}
    let returnInfo: Array<ReturnInfoInterface> = new Array<ReturnInfoInterface>()
    indexInfo.map((index: IndexInfoInterface) => {
      if (!type_first[index.type_first]) {
        type_first[index.type_first] = 1

        returnInfo.push({
          type_first: index.type_first,
          data: [index]
        })
      } else {
        for (let rf of returnInfo) {
          if (rf.type_first === index.type_first) {
            rf.data.push(index)
          }
        }
      }
    })  

    return returnInfo
  }

  /**
   * @func indexT2 通过二级类型来查找
   * @param type_second 二级类型
   */
  public async indexT2(type_second: string) {
    const { ctx } = this 

    const indexInfo = await ctx.model.Category.findAll({
      where: { type_second }
    })

    return indexInfo
  }

  /**
   * @func createBulk 批量创建
   */
  public async createBulk(createInfo: Array<CategoryCreateInterface>) {
    const { ctx } = this

    const newInfo =  createInfo.map((info) => {
      info.category_id = ctx.helper.uuid.v4().replace(/-/g, "")
      return info
    })

    const resultInfo = await ctx.model.Category.bulkCreate( newInfo, { updateOnDuplicate: ['category_id'] } )

    return resultInfo
  }
}