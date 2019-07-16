'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, FLOAT, NOW } = Sequelize
    await queryInterface.createTable('orders', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      order_id: STRING(255), // 订单id
      customer_id: STRING(255),  // 顾客id
      address_id: STRING(255), // 地址id
      shop_id: STRING(255), // 商店id
      good_id: STRING(255), // 商品id
      pin_id: STRING(255), // 拼单id
      option_id: STRING(255), // 商品选择id
      pay_method: STRING(255), // 支付方式
      price: FLOAT, // 单价
      amount: INTEGER, // 数量
      status: STRING(30), // 状态 0 未支付 1 已支付 2 已发货 3 已收货 4 已评价 -1 已取消 -2 退款中 -3 已经退款
      created_at: {type: DATE, defaultValue: NOW}, // 创建时间
      updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
    })
  },

  down: async queryInterface => {
    await queryInterface.dropTable('orders');
  },
};
