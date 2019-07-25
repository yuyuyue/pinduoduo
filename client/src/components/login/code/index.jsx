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
    return (
      <div className={Style.code}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入手机号"
              onChange={ this.handleMoible }
            />
          </Form.Item>
          <CodeTimer mobile={this.state.mobile}/>
          <div className={Style.submit}>
            <Form.Item >
              <Button type="primary" htmlType="submit"  block>
                登录
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    )
  }
}


const CodeLoginForm = Form.create()(CodeLogin)

export default connect()(CodeLoginForm)