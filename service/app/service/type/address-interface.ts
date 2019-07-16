
/**
 * @function AddressCreateInterface 收货地址创建时候的字段接口
 */
export interface AddressCreateInterface {
  address_id?: string // 地址id
  customer_id: string // 顾客id
  address: string // 地址详情
  name: string // 姓名
  phone: string // 手机号
  isdefault: number // 是否是默认地址      
}

/**
 * @function AddressUpdateInterface 收货地址更新时候的字段接口 
 */
export interface AddressUpdateInterface {
  address_id: string // 地址id
  customer_id?: string // 顾客id
  address: string // 地址详情
  name: string // 姓名
  phone: string // 手机号
  isdefault: number // 是否是默认地址
  updated_at: Date // 更新时间
}