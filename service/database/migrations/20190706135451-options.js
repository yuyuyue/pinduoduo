'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, NOW, FLOAT } = Sequelize;
    await queryInterface.createTable('options', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      option_id: STRING(255), // 商品选择id
      good_id: STRING(255), // 商品id
      attribute: STRING(255), // 属性 颜色-大小
      value: STRING(255),  // 值 白色-大号
      price_single: FLOAT, // 不拼团价格
      price_group: FLOAT, // 拼团价格
      stock: INTEGER, // 库存
      created_at: {type: DATE, defaultValue: NOW}, // 创建时间
      updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('options');
  },
};
