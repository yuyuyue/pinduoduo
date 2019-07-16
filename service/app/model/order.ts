'use strict'

import { Application } from 'egg'

export default function(app: Application) : any {

  const {STRING, INTEGER, DATE, NOW, FLOAT } = app.Sequelize

  const Order = app.model.define('orders', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    order_id: { type: STRING(255), unique: true }, // 订单id
    customer_id: STRING(255),  // 顾客id
    address_id: STRING(255), // 地址id
    shop_id: STRING(255), // 商店id
    good_id: STRING(255), // 商品id
    pin_id: STRING(255), // 拼单id
    option_id: STRING(255), // 商品选择id
    pay_method: STRING(255), // 支付方式
    price: FLOAT, // 单价
    amount: INTEGER, // 数量
    status: STRING(30), // 状态
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    timestamps: false, // 不自动添加创建时间
    underscored: true, // 外键使用下划线
  })

  return class extends Order {
    static associate() {
      app.model.Order.belongsTo(app.model.Good, { as: 'Good', foreignKey: 'good_id' })
      app.model.Order.belongsTo(app.model.Address, { as: 'Address', foreignKey: 'address_id' })
      app.model.Order.belongsTo(app.model.Shop, { as: 'Shop', foreignKey: 'shop_id' })
      app.model.Order.belongsTo(app.model.Pin, { as: 'Pin', foreignKey: 'pin_id' })
      app.model.Order.belongsTo(app.model.Option, { as: 'Option', foreignKey: 'option_id' })
    }
  }
}