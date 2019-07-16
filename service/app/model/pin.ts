'use strict'

import { Application } from 'egg'

export default function(app: Application) : any {

  const {STRING, INTEGER, DATE, NOW } = app.Sequelize

  const Pin = app.model.define('pins', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    pin_id:{ type: STRING(255), unique: true }, // 拼单id
    sponsor_name: STRING(20), // 发起人姓名
    sponsor_avatar: STRING(255), // 发起人头像
    recipient_name: STRING(20), // 续拼人姓名
    recipient_avatar: STRING(255), // 续拼人头像
    good_id: STRING(255), // 商品id
    state: {type: INTEGER, allowNull: false, defaultValue: 0 }, // 拼单状态 0 为拼单， 1 已经拼单
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    timestamps: false, // 不自动添加创建时间
    underscored: true, // 外键使用下划线
  })

  return class extends Pin {
    static associate() {
      app.model.Pin.belongsTo(app.model.Good, { as: 'Good', foreignKey: 'good_id' })
    }
  }
}