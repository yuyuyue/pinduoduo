'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, NOW } = Sequelize;
    await queryInterface.createTable('imgs', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      img_id: STRING(255), // 图片id
      type: STRING(2), // 图片类型  gl: 轮播 gd： 介绍用图 cd: 评价图片...
      img_src: STRING(255), // 图片url
      description: STRING(255), // 图片介绍
      owner_id: STRING(255), // 所属者id
      created_at: {type: DATE, defaultValue: NOW}, // 创建时间
      updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('imgs');
  },
};
