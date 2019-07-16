'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, NOW } = Sequelize;
    await queryInterface.createTable('comments', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      comment_id: STRING(255), // 评论id 
      quality: INTEGER, // 描述相符 0-5
      service: INTEGER, // 服务态度 0-5
      logistics: INTEGER, // 物流服务 0-5
      customer_id: STRING(255), // 顾客idD
      good_id: STRING(255), // 商品id
      order_id: STRING(255), // 订单id
      descreption: STRING(255), // 评论
      add_descreption: STRING(255), // 追加评论
      created_at: {type: DATE, defaultValue: NOW}, // 创建时间
      updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('comments');
  },
};