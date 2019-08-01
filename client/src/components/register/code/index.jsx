import React from 'react'
import Style from './index.less'
import { Form, Icon, Input, Button } from 'antd'
import CodeTimer from '@components/login/codetimer/index.jsx'
import { connect } from 'dva';

class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      code: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      values.code = this.state.code
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
    localStorage.setItem('mobile', this.state.mobile)
    localStorage.setItem('current', 1)
    this.props.dispatch({
      type: 'register/current',
      payload: 1
    })
  }

  handleMoible = e => {
    this.setState({
      mobile: e.target.value
    })
  }

  handleCode = e => {
    this.setState({
      code: e.target.value
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={Style.code}>
        <section className={Style.form}>
          <div className={Style.title}>
            手机验证
          </div>
          <div className={Style.item}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="mobile"
                  placeholder="请输入手机号"
                  onChange={ this.handleMoible }
                />
              )}
            </Form.Item>
            <Form.Item>
              <CodeTimer mobile={this.state.mobile} onBlur={ this.handleCode }/>
            </Form.Item>
            <Form.Item>
              <div className={Style.button}>
                <Button type="primary" htmlType="submit" block >
                  下一步
                </Button>
              </div>
            </Form.Item>
          </Form>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { register } = state
  return {
    register
  }
}

const CodeForm = Form.create()(Code)

export default connect(mapStateToProps)(CodeForm)