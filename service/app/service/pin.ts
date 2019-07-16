import { Service } from 'egg'
import { PinCreateInterface, PinUpdateInterface } from './type/pin-interface'

export default class ImgService extends Service {
  
  /**
   * @func create 发起拼单
   * @param createInfo 创建拼单字段接口
   */
  public async create(createInfo: PinCreateInterface) {
    const { ctx } = this

    createInfo.pin_id = ctx.helper.uuid.v4().replace(/-/g, '')

    const resultInfo = await ctx.model.Pin.create(createInfo)

    return resultInfo
  }

  /**
   * 
   * @param pin_id 拼单id
   * @param updateInfo 完成拼单更新字段 
   */
  public async update(pin_id: string, updateInfo: PinUpdateInterface) {
    const { ctx } = this

    updateInfo.updated_at = new Date()

    const resultInfo = await ctx.model.Pin.update(updateInfo,{
      where: { pin_id }
    })

    return resultInfo
  }

  /**
   * @function index 通过商品id查询所有正在拼单的商品
   * @param good_id 商品id
   */
  public async index(good_id: string) {
    const { ctx } = this

    const Op = this.app.Sequelize.Op
    const now = new Date(new Date().getTime() + 8 * 60 * 60 * 1000)  // 东时区时间
    const before = new Date(now.getTime() - 24 * 60 * 60 * 1000) // 现在的前一天

    const resultInfo = await ctx.model.Pin.findAll({
      where: { 
        good_id,
        state: 0,
        created_at: {
          [Op.between]: [before, now]
        }
      }
    })

    return resultInfo
  }

}