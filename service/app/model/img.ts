'use strict'

import { Application } from 'egg'

export default function(app: Application) : any  {

  const {STRING, INTEGER, DATE, NOW } = app.Sequelize

  const Img = app.model.define('imgs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    img_id: {type: STRING(255) , unique: true }, // 图片id
    type: STRING(2), // 图片类型  gl: 轮播 gd： 介绍用图 cd: 评价图片...
    img_src: STRING(255), // 图片url
    description: STRING(255), // 图片介绍
    owner_id: STRING(255), // 所属者id
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    timestamps: false, // 不自动添加创建时间
    underscored: true, // 外键使用下划线
  })


  return class extends Img {
    static associate() {
    }
  }
}