### 仿拼多多项目 

- service 后端 已完成
- clientC 客户端 已完成
- clientB 商家端 部分

#### service 后端

- 启动
1. yarn 
2. npm run dev

- 技术栈
```
  egg.js + sequelize + ts + nginx 
```
介绍： 使用egg mvc架构，sequelize对数据库进行ORM操作，JWT获取token权限认证，RestfulApi服务， middleware路由白名单登录认证中间件， 阿里云短信服务，阿里云nginx部署反向代理

#### ckientC 客户端

- 启动
1. yarn
2. npm run dev

- 技术栈
```
  Vue 全家桶
```

介绍：Vue + VueRouter(前端路由跳转)+ Vuex(状态控制)， 实现了注册登录，商品展示等功能 


#### clientB 卖家端

- 启动
1. yarn
2. yarn start | npm run start

- 技术栈
```
  react + umi + dva + antd + axios
```
react技术栈使用的是Umi + Dva + Antd来实现的， 通过umi构建架构控制全局路由，dva管理数据，antd编写页面，axios请求数据，目前还未全部完成.
