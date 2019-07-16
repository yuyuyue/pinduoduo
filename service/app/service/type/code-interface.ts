/**
 * @interface CodeInterface 验证码返回数据
 * @param Code 查询状态码
 * @param Message 查询结果
 */
export interface CodeInterface {
  Code?: string,
  Message?: string,
  RequestId?: string,
  BizId?: string
}
