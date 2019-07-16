
/**
 * @function OptionCreateInterface 商品选项创建时候的字段接口
 */
export interface OptionCreateInterface {
  option_id: string // 商品选择id
  good_id: string // 商品id
  attribute: string // 属性 颜色-大小
  value: string  // 值 白色-大号
  price_single: number // 不拼团价格
  price_group: number // 拼团价格
  stock: number // 库存
}

/**
 * @function OptionUpdateInterface 商品选项更新时候的字段接口 
 */
export interface OptionUpdateInterface {
  option_id: string, // 商品选择id
  attribute?: string // 属性 颜色-大小
  value?: string  // 值 白色-大号
  price_single?: number // 不拼团价格
  price_group?: number // 拼团价格
  stock?: number // 库存
  updated_at?: Date // 更新时间
}