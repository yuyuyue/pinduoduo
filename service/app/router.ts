
import { Application } from 'egg'; 
import { Router } from 'egg'

export default (app: Application) => {
  const { customer, shop, good, option, img, category, comment, pin, address, order,code, } = app.controller
 
  const apiV2Router: Router = app.router.namespace('/api/v2')
  
  apiV2Router.get('/code/sendcode/:mobile', code.sendcode) // 发送验证码

  // C端登录相关
  apiV2Router.post('/customer/register', customer.register)
  apiV2Router.post('/customer/loginByPwd', customer.loginByPwd)
  apiV2Router.post('/customer/loginByCode', customer.loginByCode)
  apiV2Router.get('/customer/loginOut', customer.loginOut)
  apiV2Router.put('/customer/updatePwd', customer.updatePwd)

  // 顾客相关
  apiV2Router.get('/customer/show/:id', customer.show)
  apiV2Router.put('/customer/update/:id', customer.update)

 
  // 商店相关
  apiV2Router.get('/shop/show/:name', shop.showByName) // 模糊查询店铺 ?
  apiV2Router.put('/shop/update/:id', shop.update) // 通过id更新店铺基本信息

  // B端登录相关
  apiV2Router.post('/shop/register', shop.register)
  apiV2Router.post('/shop/loginByPwd', shop.loginByPwd)
  apiV2Router.post('/shop/loginByCode', shop.loginByCode)
  apiV2Router.get('/shop/loginOut', shop.loginOut)
  apiV2Router.put('/shop/updatePwd', shop.updatePwd)

  // 商品相关 
  apiV2Router.post('/good', good.create) // 创建商品
  apiV2Router.put('/good/:good_id', good.update) // 更新商品
  apiV2Router.get('/good/:good_id', good.show) // 通过good_id获取对应商品
  apiV2Router.post('/good/index/:category_id', good.indexByCategoryId) // 通过商品类别获取所有商品

  // 商品选项相关
  apiV2Router.get('/option/index/good_id', option.indexByGoodId) // 通过商品id查询所有的商品选择
  apiV2Router.post('/option/create', option.createBulk) // 批量创建
  apiV2Router.post('/option/update', option.updateBulk)   // 批量更新

  // 图片相关
  apiV2Router.get('/img/show/:owner_id/:type', img.show) // 通过owner_id 和 type类型来查找所有图片
  apiV2Router.post('/img/updateBulk', img.updateBulk) // 批量更新或者创建或者删除

  // 分类相关
  apiV2Router.get('/category/index', category.index) // 返回所有，用于分类页显示
  apiV2Router.get('/category/indexT2', category.indexT2) // 通过type_second 来分类
  apiV2Router.post('/category/createBulk', category.createBulk) // 批量创建
 
  // 评论相关
  apiV2Router.post('/comment/createBulk', comment.createBulk) // 收货评价
  apiV2Router.put('/comment/:comment_id', comment.update) // 追加评论
  apiV2Router.get('/comment/good/:good_id', comment.indexByGoodId) // 商品的所有评价
  apiV2Router.get('/comment/customer/:customer_id', comment.indexByCustomerId) // 顾客个人的所有评价

  // 拼单相关
  apiV2Router.post('/pin', pin.create) // 发起拼单
  apiV2Router.put('/pin/:pin_id', pin.update) // 完成拼单
  apiV2Router.get('/pin/:good_id', pin.index) // 查询所有该商品正在拼单

  // 地址相关
  apiV2Router.post('/address', address.create) // 创建收货地址
  apiV2Router.put('/address/:address_id', address.update) // 批量更新收货地址
  apiV2Router.get('/address/:customer_id', address.index) // 通过顾客id查询所有收货地址

  // 订单相关
  apiV2Router.post('/order', order.create) // 创建订单
  apiV2Router.put('/order', order.update)  // 更新订单状态
  apiV2Router.get('/order/:order_id/:state', order.index) // 通过订单id和订单状态查询订单
}
