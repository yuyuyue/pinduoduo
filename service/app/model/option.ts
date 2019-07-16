'use strict'

import { Application } from 'egg'

export default function(app: Application) : any {

  const {STRING, INTEGER, DATE, NOW, FLOAT } = app.Sequelize

  const Option = app.model.define('options', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    option_id: { type: STRING(255), unique: true }, // 商品选择id
    good_id: STRING(255), // 商品id
    attribute: STRING(255), // 属性 颜色-大小
    value: STRING(255),  // 值 白色-大号
    price_single: FLOAT, // 不拼团价格
    price_group: FLOAT, // 拼团价格
    stock: INTEGER, // 库存
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    timestamps: false, // 不自动添加创建时间
    underscored: true, // 外键使用下划线
  })

  return class extends Option {
    static associate() {
      app.model.Option.belongsTo(app.model.Good, { as: 'Good', foreignKey: 'good_id' })
    }
  }
}