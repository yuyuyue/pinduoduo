### 仿拼多多项目 

- service 后端 已完成
- clientC 客户端 已完成
- clientB 商家端
- app App端

#### service 后端

- 启动
1. yarn 
2. npm run dev

- 技术栈
```
  egg.js + sequelize + ts + nginx 
```
介绍： 使用egg mvc架构，sequelize对数据库进行ORM操作，JWT获取token权限认证，RestfulApi服务， middleware路由白名单登录认证中间件， 阿里云短信服务， Passport鉴权微信登陆，支付宝付款，微信付款(还未完成)，阿里云nginx部署反向代理

