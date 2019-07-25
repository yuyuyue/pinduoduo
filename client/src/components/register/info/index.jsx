import React from 'react'
import Style from './index.less'
import { Form, Input, Button, AutoComplete } from 'antd'
import { connect } from 'dva';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      category: [
        '普通产品',
        '虚拟产品',
        '医药健康'
      ]
    }
  }

  handlePre = () => {
    localStorage.setItem('type', this.state.type)
    localStorage.setItem('current', 0)
    this.props.dispatch({
      type: 'register/current',
      payload: 1
    })
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
    localStorage.removeItem('current')
    this.props.dispatch({
      type: 'register/current',
      payload: 2
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
    return (
      <div className={Style.info}>
        <section className={Style.form}>
          <div className={Style.title}>
            店铺信息填写
          </div>
          <div className={Style.item}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                <div className={Style.line}>
                  <p className={Style.tip}><span className={Style.required}>*</span>店铺名称:</p>

                  <Input className={Style.input} onChange={ this.handleMoible }/>
                </div>
              </Form.Item>
              <Form.Item>
                <div className={Style.line}>
                  <p className={Style.tip}><span className={Style.required}>*</span>设置密码:</p>

                  <Input className={Style.input} onChange={ this.handleMoible }/>
                </div>
              </Form.Item>
              <Form.Item>
                <div className={Style.line}>
                  <p className={Style.tip}><span className={Style.required}>*</span>确认密码:</p>

                  <Input className={Style.input} onChange={ this.handleMoible }/>
                </div>
              </Form.Item>
              <Form.Item>
                <div className={Style.line}>
                  <p className={Style.tip}><span className={Style.required}>*</span>主营类目:</p>
                  <AutoComplete
                    style={{ width: 310}}
                    dataSource={this.state.category}
                    placeholder=""
                    filterOption={(inputValue, option) =>
                      option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                  />
                </div>
              </Form.Item>
              <Form.Item>
               <div className={Style.button}>
                  <div className={Style.pre}>
                    <Button block onClick={ this.handlePre }>
                      上一步
                    </Button>
                  </div>
                  <div className={Style.next}>
                    <Button type="primary" htmlType="submit" block >
                      马上入驻
                    </Button>
                  </div>
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

const InfoForm = Form.create()(Info)

export default connect(mapStateToProps)(InfoForm)