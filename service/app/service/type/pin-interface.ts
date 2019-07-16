
/**
 * @interface PinCreateInterface 发起拼单接口
 */
export interface PinCreateInterface {
  pin_id?: string // 拼单id
  sponsor_name: string // 发起人姓名
  sponsor_avatar: string // 发起人头像
  good_id: string // 商品id
}

/**
 * @interface PinUpdateInterface 完成拼单接口
 */
export interface PinUpdateInterface {
  recipient_name: string // 续拼人姓名
  recipient_avatar: string // 续拼人头像
  state: number // 拼单状态
  updated_at: Date // 更新时间
}