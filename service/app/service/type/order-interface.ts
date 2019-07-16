
/**
 * @interface OrderCreateInterface 创建订单接口
 */
export interface OrderCreateInterface {
  order_id?: string // 订单id
  customer_id: string // 顾客id
  address_id: string// 地址id
  shop_id: string// 商店id
  good_id: string// 商品id
  pin_id?: string// 拼单id
  category_id: string// 商品分类id
  pay_method: string// 支付方式
  pay_money: number // 支付金额
  status: string // 状态 0 未支付 1 已支付 2 已发货 3 已收货 4 已评价 -1 已取消 -2 退款中 -3 已经退款
}

/**
 * @interface OrderUpdateInterface 更新订单状态接口
 */
export interface OrderUpdateInterface {
  status: string // 状态 0 未支付 1 已支付 2 已发货 3 已收货 4 已评价 -1 已取消 -2 退款中 -3 已经退款
  updated_at: Date // 更新时间
}