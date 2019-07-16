'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, FLOAT, NOW } = Sequelize;
    await queryInterface.createTable('shops', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      shop_id: STRING(255),
      category_id: STRING(255), // 主营商品类型
      mobile: STRING(32),// 手机号,
      name: STRING(255), // 店铺名
      password: {type: STRING(255), allowNull: false}, // 密码  
      avatar: STRING(255),  // 头像
      description: STRING(255), // 店铺描述
      qrcode: STRING(255), // 二维码URL
      quality: INTEGER, // 描述相符 0-5
      service: INTEGER, // 服务态度 0-5
      logistics: INTEGER, // 物流服务 0-5
      special: STRING(255), // 旗舰店
      account: {type: FLOAT, defaultValue: 0},  // 账户余额
      created_at: {type: DATE, defaultValue: NOW}, // 创建时间
      updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('shops');
  },
};
