import { Service } from "egg"
import { OrderCreateInterface, OrderUpdateInterface } from './type/order-interface'

export default class OrderService extends Service {

  /**
   * @func create 用于创建订单对数据库的ORM
   * @param createInfo 创建字段接口
   */
  public async createBulk(createInfo:Array<OrderCreateInterface>) {
    const { ctx } = this

    const order_id = ctx.helper.uuid.v4().replace(/-/g, "")

    createInfo.map(create => {
      create.order_id = order_id
    })

    return await ctx.model.Order.createBulk(createInfo, { updateOnDuplicate: ['order_id'] })
  }
  
  /**
   * @func update 更新商品信息
   * @param order_id 更新列的order_id
   * @param updateInfo  更新字段接口
   */ 
  public async updateBulk(order_id: string, updateInfo: Array<OrderUpdateInterface>) {
    const { ctx } = this

    const updateArrayPromise : Array<any> = [] 

    updateInfo.map(update => {
      update.updated_at = new Date(new Date().getTime() + 8 * 60 * 60 * 1000)
      updateArrayPromise.push(ctx.model.Good.update(
        update,
        { where: { order_id } }
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
  public async index(customer_id: string, state: string) {
    const { ctx } = this

    const resultInfo = await ctx.model.Pin.findAll({
      where: { 
        customer_id,
        state
      },
      include: [{
        model: ctx.model.Address,
        as: 'Address',
        attributes: ['address_id', 'name', 'address', 'phone', 'isdefault']
      },{
        model: ctx.model.Shop,
        as: 'Shop',
        attributes: ['shop_id', 'name', 'avatar']
      },{
        model: ctx.model.Good,
        as: 'Good',
        attributes: ['good_id', 'show_img', 'name', 'logistics_type']
      },{
        model: ctx.model.Option,
        as: 'Option',
        attributes: ['option_id', 'attribute', 'value']
      },{
        model: ctx.model.Pin,
        as: 'Pin',
        attribute: ['pin_id', 'sponsor_avatar', 'recipient_avatar', 'updated_at']
      }],
      attribute: ['order_id', 'customer_id', 'pay_method', 'price', 'amount', 'status', 'created_at']
    })

    return resultInfo
  }
}