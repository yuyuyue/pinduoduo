'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, FLOAT, BOOLEAN, NOW } = Sequelize
    await queryInterface.createTable('goods', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      good_id: STRING(255), 
      shop_id: STRING(255), // 所属商店id
      category_id: STRING(255), // 商品类型
      show_img: STRING(255),  //  展示图片
      name: STRING(255), // 商品名称
      description: STRING(255), // 商品详情
      price_single: FLOAT, // 不拼团价格
      price_group: FLOAT, // 拼团价格
      price_market: FLOAT, // 官方市场价格
      logistics_type: STRING(1), // 物理模版
      type: STRING(1), // 商品类型 普通 进口 直供 直邮
      second: {  // 是否是二手
        type: BOOLEAN,
        defaultValue: false
      },
      presale:  { // 是否预售
        type: BOOLEAN,
        defaultValue: false
      },
      presale_time: DATE, // 预售时间
      delivery_time: DATE, // 发货时间
      return: { // 是否无理由退货
        type: BOOLEAN,
        defaultValue: true
      },
      fake: { // 是否假一罚十
        type: BOOLEAN,
        defaultValue: true
      },
      created_at: {type: DATE, defaultValue: NOW}, // 创建时间
      updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
    })
  },

  down: async queryInterface => {
    await queryInterface.dropTable('goods');
  },
};
