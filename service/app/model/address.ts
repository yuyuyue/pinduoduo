'use strict'

import { Application } from 'egg'

export default function(app: Application) : any  {

  const {STRING, INTEGER, DATE, NOW, BOOLEAN } = app.Sequelize

  const Address = app.model.define('categorys', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    address_id: {type: STRING(255), allowNull: false, unique: true }, // 地址id
    customer_id: { type: STRING(255), allowNull: false }, // 顾客id
    address: { type: STRING(255), allowNull: false }, // 地址详情
    name: { type: STRING(30), allowNull: false }, // 姓名
    phone: { type: STRING(255), allowNull: false }, // 手机号
    isdefault: {  type: BOOLEAN, allowNull: false, defaultValue: false }, // 是否是默认地址      
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    timestamps: false, // 不自动添加创建时间
    underscored: true, // 外键使用下划线
  })


  return class extends Address {
    static associate() {
      app.model.Address.belongsTo(app.model.Customer, { as: 'Customer', foreignKey: 'customer_id' });
    }
  }
}