import React from 'react'
import Style from './index.less'
import { Form, Icon, Input, Button } from 'antd'
import { connect } from 'dva'
import CodeTimer from '../codetimer/index.jsx'


class CodeLogin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mobile: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleMoible = e => {
    this.setState({
      mobile: e.target.value
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <main className={Style.code}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: '未输入账号' },
                { whitespace: true, message: '不能使用空格'},
                { pattern: new RegExp('^1(3|4|5|7|8)\d{11}$', 'g'), message: '请输入正确的手机号'}
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="username"
                placeholder="请输入手机号"
                onChange={ this.handleMoible }
              />,
            )}
          </Form.Item>
          <CodeTimer mobile={this.state.mobile}/>
          <div className={Style.submit}>
            <Form.Item >
              <Button type="primary" htmlType="submit" className="login-form-button" block>
                登录
              </Button>
            </Form.Item>
          </div>
        </Form>
      </main>
    )
  }
}


const CodeLoginForm = Form.create()(CodeLogin)

export default connect()(CodeLoginForm)