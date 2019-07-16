'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, NOW } = Sequelize;
    await queryInterface.createTable('pins', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      pin_id: STRING(255), // 拼单id
      sponsor_name: STRING(20), // 发起人姓名
      sponsor_avatar: STRING(255), // 发起人头像
      recipient_name: STRING(20), // 续拼人姓名
      recipient_avatar: STRING(255), // 续拼人头像
      good_id: STRING(255), // 商品id
      state: {type: INTEGER, allowNull: false, defaultValue: 0 }, // 拼单状态 0 为拼单， 1 已经拼单
      created_at: {type: DATE, defaultValue: NOW}, // 创建时间
      updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('pins');
  },
};
