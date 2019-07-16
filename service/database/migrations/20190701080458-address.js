'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN, NOW } = Sequelize;
    await queryInterface.createTable('address', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      address_id: {type: STRING(255), allowNull: false }, // 地址id
      customer_id: { type: STRING(255), allowNull: false }, // 顾客id
      address: { type: STRING(255), allowNull: false }, // 地址详情
      name: { type: STRING(30), allowNull: false }, // 姓名
      phone: { type: STRING(255), allowNull: false }, // 手机号
      isdefault: {  type: BOOLEAN, allowNull: false, defaultValue: false }, // 是否是默认地址      
      created_at: {type: DATE, defaultValue: NOW}, // 创建时间
      updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('address');
  },
};
