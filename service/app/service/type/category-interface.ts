

/**
 * @interface IndexInfoInterface 查询结果放回类型
 */
export interface IndexInfoInterface {
  category_id: string, // 商品分类id
  type_first: string, // 一级类型 商品大类 
  type_second: string, // 二级类型 
  img_src: string, // 图片url
}

/**
 *@interface ReturnInfoInterface 返回给前端的数据类型
 */
export interface ReturnInfoInterface {
  type_first: string,
  data: Array<IndexInfoInterface>
}

/**
 * @interface CategoryCreateInterface 分类创建接口
 */
export interface CategoryCreateInterface {
  category_id?: string, // 商品分类id
  type_first: string, // 一级类型 商品大类 
  type_second: string, // 二级类型 
  type_third: string, // 三级类型
  img_src: string, // 图片url
}