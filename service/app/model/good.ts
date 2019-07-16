'use strict'

import { Application } from 'egg'

export default function(app: Application) : any  {

  const { STRING, INTEGER, DATE, NOW, FLOAT, BOOLEAN } = app.Sequelize

  const Good = app.model.define('goods', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    good_id:{type: STRING(255), unique: true }, 
    shop_id: STRING(255), // 所属商店id
    name: STRING(255), //商品名称
    show_img: STRING(255),  //  展示图片
    category_id: STRING(255), // 商品类型
    description: STRING(255), // 商品详情
    price_single: FLOAT, // 不拼团价格
    price_group: FLOAT, // 拼团价格
    price_market: FLOAT, // 官方市场价格
    logistics_type: STRING(1), // 物理模版
    type: STRING(1), // 商品类型 普通 进口 直供 直邮
    second: {  type: BOOLEAN, defaultValue: false }, // 是否是二手
    presale:  {  type: BOOLEAN, defaultValue: false }, // 是否预售
    presale_time: DATE, // 预售时间
    delivery_time: DATE, // 发货时间
    return: {  type: BOOLEAN, defaultValue: true }, // 是否无理由退货
    fake: {  type: BOOLEAN, defaultValue: true }, // 是否假一罚十
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    timestamps: false, // 不自动添加创建时间
    underscored: true, // 外键使用下划线
  })


  return class extends Good {
    static associate() {
      app.model.Good.belongsTo(app.model.Category, { as: 'Category', foreignKey: 'category_id' })
      app.model.Good.belongsTo(app.model.Shop, { as: 'Shop', foreignKey: 'shop_id' })
    }
  }
}