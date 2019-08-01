import React from 'react'
import Style from './index.less'
import { Form, Icon, Input, Button } from 'antd'
import { connect } from 'dva'
import LoginApi from '@service/login.js'

// 验证码组件
class CodeTimer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCode: false,
      time: 60,
    }
  }

  handleCode = async (e) => {
    e.preventDefault()
    if (!this.state.isCode) {
      this.setState({
        isCode : true
      })
      this.setCodeTime()
      this.props.dispatch({
        type: 'login/code'
      })
      const data =  await LoginApi.getCode(this.props.mobile)
      console.log(data, '!!!!!!!!!!!!!!!!!!!')
    }
  }

  // 通过requestAnimationFrame实现一个定时器，效果更好
  setCodeTime = () => {
    let time = this.state.time
    let startTime = +new Date()
    let now = startTime
    const loop = () => {
      now = +new Date()
      if (!time) {
        this.setState({
          isCode: false,
          time: 60
        })
        return
      }
      if ((now - startTime) > 1000) {
        startTime = now
        time -= 1
        this.setState({
          time
        })
      }
      window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)
  }

  render() {
    return (
      <div className={Style.codeItem}>
        <div className={Style.codeInput}>
          <Input
            prefix={ <Icon type="code" style={{ color: 'rgba(0,0,0,.25)' } } />}
            type="code"
            placeholder="请输入验证码"
            onBlur= { this.props.onBlur }
          />
        </div>
        <div className={Style.codeBtn}>
          <Button type="primary" onClick={ this.handleCode } block disabled={ this.state.isCode && true }>
            {  this.state.isCode ? `${this.state.time} s` : '验证码'  }
          </Button>
        </div>
      </div>
    )
  }
}


const CodeTimerForm = Form.create()(CodeTimer)

export default  connect()(CodeTimerForm)