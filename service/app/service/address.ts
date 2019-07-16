import { Service } from "egg";
import { AddressCreateInterface, AddressUpdateInterface } from './type/address-interface'

export default class AddressService extends Service {

  /**
   * @func create 用于创建商品对数据库的ORM
   * @param createInfo 创建字段接口
   */
  public async create(createInfo: AddressCreateInterface) {
    const { ctx } = this

    createInfo.address_id = ctx.helper.uuid.v4().replace(/-/g, "")

    return await ctx.model.Address.create(createInfo)
  }
  
  /**
   * @func update 更新商品信息
   * @param address_id 更新列的address_id
   * @param updateInfo  更新字段接口
   */ 
  public async updateBulk(address_id: string, updateInfo: Array<AddressUpdateInterface>) {
    const { ctx } = this

    const updateArrayPromise : Array<any> = [] 

    updateInfo.map(update => {
      update.updated_at = new Date(new Date().getTime() + 8 * 60 * 60 * 1000)
      updateArrayPromise.push(ctx.model.Good.update(
        update,
        { where: { address_id } }
      ))
    }) 
    
    return Promise.all(updateArrayPromise)
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }

  /**
   * @func index 通过顾客id查找所有地址
   * @param customer_id 顾客id
   */
  public async index(customer_id: string) {
    const { ctx } = this

    const resultInfo = await ctx.model.Pin.findAll({
      where: { 
        customer_id,
      }
    })

    return resultInfo
  }
}