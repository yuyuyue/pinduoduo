
import { Application, Context, EggAppConfig  } from  'egg'

export default (options: EggAppConfig['uuid'], app: Application): any => {

  return async (ctx: Context, next: () => Promise<any>) => {
    if (options.authWitheList.indexOf(ctx.url) !== -1) {
      await next()
      return
    }

    if (ctx.cookies.get('token')) {
      let token = ctx.cookies.get('token')
      try {
        ctx.helper.jwt.verify(token, app.config.jwtkey)
      } catch (e) {
        ctx.returnBody(401, '您还没有登录，请先登录', -1)
        return
      }
      await next()
    } else {
      ctx.returnBody(401, '您还没有登录，请先登录', -1)
      return
    }
  }

}