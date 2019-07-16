'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

export default function(appInfo: EggAppConfig) {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = appInfo.name + '123123';

  // config.proxy = true;

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'pinduoduo',
    username: 'root',
    password: 'yby980410',
    timezone: '+08:00' //东八时区
  }

  // router puls add namespace feature
  config.routerPlus = {
    enable: true,
    package: 'egg-router-plus',
  }

  // 关闭安全威胁csrf的防范
  config.security = {
    csrf: {
      ignore: ctx => {
        let ipReg = /^(172\.17|127\.0)/;
        return ipReg.test(ctx.ip)
      }
    }
  }

  // aes use key
  config.aeskey = '9vApxLk5G3PAsJrM'

  // aes use iv
  config.aesiv = 'FnJL7EDzjqWjcaY9'

  // jwt use key
  config.jwtkey = 'FnJL7EDzjqWjcaY9'

  // white list allow with no auth

  // middleware list
  config.middleware = ['authorization']

  // alicloud client 配置
  config.core = {
    accessKeyId: 'LTAIB9POopknik4u',
    accessKeySecret: '4adzQwzrHLt8nfLIhcUTi9mpXBOvmg',
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
  }

  const bizConfig = {
    authorization: {
      authWitheList: [
        '/login/register',
        '/login/loginIn',
        '/login/loginOut',
        '/login/sendcode/15179033446',
        '/customer/loginByPwd',
        '/customer/loginByCode',
        '/customer/updatePwd',
        '/shop/register',
        '/shop/loginByPwd',
        '/shop/loginByCode',
        '/shop/updatePwd',
      ]
    }
  }
  
  return {
    ...config,
    ...bizConfig,
  };
}
