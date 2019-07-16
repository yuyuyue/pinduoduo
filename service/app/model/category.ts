'use strict'

import { Application } from 'egg'

export default function(app: Application) : any {

  const {STRING, INTEGER, DATE, NOW } = app.Sequelize

  const Category = app.model.define('categorys', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    category_id: { type: STRING(255), unique: true }, // 商品分类id
    type_first: STRING(255), // 一级类型 商品大类 
    type_second: STRING(255), // 二级类型 
    type_third: STRING(255), // 三级类型
    img_src: STRING(255), // 图片url
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    timestamps: false, // 不自动添加创建时间
    underscored: true, // 外键使用下划线
  })


  return class extends Category {
    static associate() {
    }
  }
}