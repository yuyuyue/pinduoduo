
/**
 * @interface LoginInterface 登录接口
 * @param mobile  手机号，登录通过手机号
 * @param password 密码  
 */
export interface LoginInterface {
  mobile: string,
  password: string
}

/**
 * @interface RegisterInterface 注册接口
 * @param name 用户昵称
 * @param mobile  手机号，注册通过手机号
 * @param password 密码  
 */
export interface RegisterInterface {
  password: string,
  mobile: string,
  shop_id?: string
}

/**
 * @interface UpdateInterface 商店可能更新的属性的接口
 * @param category_id 分类表id
 * @param name 商店名称
 * @param avatar 商店头像
 * @param description 商店描述
 * @param quality 描述相符
 * @param service 服务态度
 * @param logistics 物流服务
 * @param updated_at 更新时间
 */
export interface UpdateInterface {
  category_id?: string,
  name?: string,
  avatar?: string,
  description?: string,
  quality?: number, 
  service?: number, 
  logistics?: number,
  updated_at?: Date
}