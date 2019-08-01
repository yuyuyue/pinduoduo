import React from 'react'
import Style from './index.less'
import { Form, Icon, Input, Button } from 'antd'
import { connect } from 'dva'

class PwdLogin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mobile: '',
      password: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const { password, mobile } = values
        this.props.dispatch({
          type: 'login/pwd',
          payload: {
            mobile,
            password
          }
        })
      }
    })
  }

  handleForget = () => {
    this.props.dispatch({
      type: 'login/change',
      payload: {
        loginType: 3
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={Style.pwd}>
        <section className={Style.section}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: '请输入手机号' }],
              })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="mobile"
                placeholder="请输入手机号"
              />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <div className={Style.options}>
                <p className={Style.forget} onClick={ this.handleForget }>
                  忘记密码？
                </p>
              </div>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { login } = state
  return {
    login
  }
}
const PwdLoginForm = Form.create()(PwdLogin)

export default  connect(mapStateToProps)(PwdLoginForm)