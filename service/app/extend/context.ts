import { Context } from 'egg'


export default {
 
  get customerId() {
    const token = this['cookies'].get('token')
    const customer_id = this['helper'].jwt.verify(token, this['app'].config.jwtkey).customer_id
  
    return customer_id
  },

  returnBody(this: Context, status: any, msg: string, type: number, data?: object ) {
    this.status = status,
    this.body = {
      msg,
      type,
      data
    }
  }
}