'use strict';

import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  sequelize: {
    package: 'egg-sequelize',
    enable: true,
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  }
};

export default plugin;
