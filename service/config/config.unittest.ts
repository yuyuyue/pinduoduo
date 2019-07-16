'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

export default function() {
  const config = {} as PowerPartial<EggAppConfig>;

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'test',
    username: 'root',
    password: 'yby980410'
  };

  return config;
}
