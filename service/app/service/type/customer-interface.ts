
/**
 * @interface RegisterInterface 注册接口
 * @param username 用户昵称
 * @param mobile  手机号，注册通过手机号
 * @param password 密码  
 */
export interface RegisterInterface {
  username: string,
  password: string,
  mobile: string,
  customer_id?: string
}

/**
 * @interface LoginInterface 登录接口
 * @param mobile  手机号，登录通过手机号
 * @param password 密码  
 */
export interface LoginInterface {
    mobile: string,
    password: string
}

export interface UpdateInterface {
  avatar_url?: string,
  wxavatae_url?: string,
  wechat? :string
  sex?: number,
  address?: string,
  birthday?: Date,
  signature?: string,
  updated_at?: Date
}