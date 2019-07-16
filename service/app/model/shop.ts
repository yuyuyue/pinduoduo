'use strict'

import { Application } from 'egg'


export default function(app: Application) : any {

  const {STRING, INTEGER, DATE, NOW, FLOAT} = app.Sequelize;

  const Shop = app.model.define('shops', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    shop_id:{ type: STRING(255), unique: true }, //商店id
    category_id: STRING(255), // 主营商品类型
    name: STRING(255), // 店铺名
    mobile: STRING(32),// 手机号,
    password: {type: STRING(255), allowNull: false}, // 密码  
    avatar: STRING(255),  // 头像
    description: STRING(255), // 店铺描述
    qrcode: STRING(255), // 二维码URL
    quality: INTEGER, // 描述相符 0-5
    service: INTEGER, // 服务态度 0-5
    logistics: INTEGER, // 物流服务 0-5
    account: FLOAT,  // 账户余额
    special: STRING(255), // 旗舰店
    created_at: {type: DATE, defaultValue: NOW},// 创建时间
    updated_at: {type: DATE, defaultValue: NOW}// 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    timestamps: false, // 不自动添加创建时间
    underscored: true, // 外键使用下划线
  })

  return class extends Shop {
    static associate() {
    }
  }
}