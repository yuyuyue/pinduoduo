import { Service } from 'egg'
import { CommentCreateInterface, CommentUpdateInterface } from './type/comment-interface'

export default class CategoryService extends Service {

  /**
   * @func create 创建评论
   * @param commentInfo 评论创建字段接口
   */
  public async createBulk(createInfo: Array<CommentCreateInterface>) {
    const { ctx } = this

    const newInfo =  createInfo.map((info) => {
      info.comment_id = ctx.helper.uuid.v4().replace(/-/g, "")
      return info
    })

    const resultInfo = await ctx.model.Comment.bulkCreate( newInfo, { updateOnDuplicate: ['comment_id'] } )

    return resultInfo
  }

    /**
   * @func update 更新评论
   * @param commentInfo 评论更新字段接口
   */
  public async update(comment_id: string, commentInfo: CommentUpdateInterface) {
    const { ctx } = this
    
    commentInfo.updated_at = new Date(new Date().getTime() + 8 * 60 * 60 * 1000)
    
    const updateInfo = await ctx.model.Comment.update(
      commentInfo,
      { where: { comment_id } }
    )

    return updateInfo[0]
  }

  /**
   * @func indexByCustomerId 通过顾客id查询数据库
   * @param customer_id 顾客id
   */
  public async indexByCustomerId(customer_id: string) {
    
    console.log(customer_id)
    const indexInfo = await this.ctx.model.Comment.findAll({
      where: { customer_id },
      include: [{
        model: this.ctx.model.Customer,
        as: 'customer',
        attributes: [ 'username', 'avatar_url' ]
      }],
    })

    return indexInfo
  }

  /**
   * @func indexByGoodId 通过商品id查询数据库
   * @param good_id 商品id
   */
  public async indexByGoodId(good_id: string) {

    const indexInfo = await this.ctx.model.Comment.findAll({
      where: { good_id },
      include: [{
        model: this.ctx.model.Good,
        as: 'good',
        attributes: [ 'name' ]
      }],
    })

    return indexInfo
  }

}