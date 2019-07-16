
/**
 * @function GoodCreateInterface 商品创建时候的字段接口
 */
export interface GoodCreateInterface {
  good_id?: string 
  shop_id: string // 所属商店id
  name: string, // 商品名称
  category_id: string // 商品类型
  description?: string // 商品详情
  price_single: number // 不拼团价格
  price_group: number // 拼团价格
  price_market?: number // 官方市场价格
  logistics_type?: string // 物流模版
  type?: string // 商品类型 普通 进口 直供 直邮
  second?: number  // 是否是二手
  presale?:  number // 是否预售
  presale_time?: Date // 预售时间
  delivery_time?: Date // 发货时间
  return?: number // 是否无理由退货
  fake?: number // 是否假一罚十
}

/**
 * @function GoodCreateInterface 商品更新时候的字段接口 
 */
export interface GoodUpdateInterface {
  category_id: string // 商品类型
  description?: string // 商品详情
  name?: string, 
  price_single: number // 不拼团价格
  price_group: number // 拼团价格
  price_market?: number // 官方市场价格
  logistics_type?: string // 物流模版
  type?: string // 商品类型 普通 进口 直供 直邮
  second?: number  // 是否是二手
  presale?:  number // 是否预售
  presale_time?: Date // 预售时间
  delivery_time?: Date // 发货时间
  return?: number // 是否无理由退货
  fake?: number // 是否假一罚十
  updated_at?: Date // 更新时间
}