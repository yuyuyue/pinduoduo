/**
 * @function OptionUpdateInterface 图片更新的字段接口 
 */
export interface OptionUpdateInterface {
  img_id?: string,
  img_src?: string, // 图片url
  owner_id?: string, // 所属者id
  state: number, // 图片状态 1创建， 0不变， -1删除
  updated_at?: Date, // 更新时间
}