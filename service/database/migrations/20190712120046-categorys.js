'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, NOW } = Sequelize;
    await queryInterface.createTable('categorys', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      category_id: STRING(255), // 商品分类id
      type_first: STRING(255), // 一级类型 商品大类 
      type_second: STRING(255), // 二级类型 
      type_third: STRING(255), // 三级类型
      img_src: STRING(255), // 图片url
      created_at: {type: DATE, defaultValue: NOW}, // 创建时间
      updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('categorys');
  },
};