
/**
 * @function CommentCreateInterface 评论创建时候的字段接口
 */
export interface CommentCreateInterface {
  comment_id?: string, // 评论id 
  quality: number, // 描述相符 0-5
  service: number, // 服务态度 0-5
  logistics: number, // 物流服务 0-5
  customer_id: string, // 顾客id
  good_id: string, // 商品id
  descreption: string, // 评论
}

/**
 * @function CommentCreateInterface 评论更新时候的字段接口 
 */
export interface CommentUpdateInterface {
  comment_id: string, // 评论id 
  add_descreption: string, // 追加评论
  updated_at?: Date // 更新时间
}