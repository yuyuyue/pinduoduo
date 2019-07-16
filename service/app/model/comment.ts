'use strict'

import { Application } from 'egg'

export default function(app: Application) : any {

  const {STRING, INTEGER, DATE, NOW } = app.Sequelize

  const Comment = app.model.define('comments', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    comment_id:{ type: STRING(255), unique: true }, // 评论id 
    quality: INTEGER, // 描述相符 0-5
    service: INTEGER, // 服务态度 0-5
    logistics: INTEGER, // 物流服务 0-5
    customer_id: STRING(255), // 顾客id
    good_id: STRING(255), // 商品id
    descreption: STRING(255), // 评论
    add_descreption: STRING(255), // 追加评论
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    timestamps: false, // 不自动添加创建时间
    underscored: true, // 外键使用下划线
  })


  return class extends Comment {
    static associate() {
      app.model.Comment.belongsTo(app.model.Customer, { as: "customer", foreignKey: 'customer_id', targetKey: 'customer_id' }) // { as: model的别名，foreignKey:外键对数据源自身 targetKey:目标外键，当为主键可以省略   }
      app.model.Comment.belongsTo(app.model.Good, { as: "good", foreignKey: 'good_id', targetKey: 'good_id' })
    }
  }
}