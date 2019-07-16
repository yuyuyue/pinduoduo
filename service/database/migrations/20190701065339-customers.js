'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, NOW } = Sequelize
    await queryInterface.createTable('customers', {
      id: {type: INTEGER, primaryKey: true, autoIncrement: true},//记录id
      customer_id: {type: STRING(255), allowNull: false},//用户id
      username: {type: STRING(255), allowNull: false}, // 用户名
      password: {type: STRING(255), allowNull: false}, // 密码  
      avatar_url: {type: STRING(256), defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg'},// 头像
      mobile: STRING(32),// 手机号,
      wechat: STRING(32),  // 微信号
      wxavatae_url: {type: STRING(256), defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg'},// 微信头像
      type: {type: INTEGER, defaultValue: 0}, // 用户类型 0手机号登录 1微信登录,
      sex: {type: INTEGER, defaultValue: 0}, // 值为1时是男性，值为2时是女性，默认值为0时是未知
      address: STRING(255),  // 基本住址
      birthday: STRING(255), // 生日
      signature: STRING(255),  // 签名
      created_at: {type: DATE, defaultValue: NOW},// 创建时间
      updated_at: {type: DATE, defaultValue: NOW}// 更新时间
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('customers');
  },
};
