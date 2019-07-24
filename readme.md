### 仿拼多多项目 

- service 后端 已完成
- clientC 客户端 已完成
- clientB 商家端 部分
- app App端 未开始

#### service 后端

- 启动
1. yarn 
2. npm run dev

- 技术栈
```
  egg.js + sequelize + ts + nginx 
```
介绍： 使用egg mvc架构，sequelize对数据库进行ORM操作，JWT获取token权限认证，RestfulApi服务， middleware路由白名单登录认证中间件， 阿里云短信服务， Passport鉴权微信登陆，支付宝付款，微信付款(还未完成)，阿里云nginx部署反向代理

#### clientB

- 启动
1. yarn
2. yarn start | npm run dev

- 技术栈
```
  react + umi + dva + antd + axios
```
react技术栈使用的是Umi + Dva + Antd来实现的， 通过umi构建架构控制全局路由，dva管理数据，antd编写页面，axios请求数据，目前还未全部完成.
