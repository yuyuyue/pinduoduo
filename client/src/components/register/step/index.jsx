import React from 'react'
import { Steps } from 'antd';
import Style from './index.less'
import { connect } from 'dva'

const { Step } = Steps;

const steps = [
  {
    title: '手机验证',
  },
  {
    title: '选择店铺类型',
  },
  {
    title: '填写店铺信息',
  },
];

class StepC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

  componentWillMount() {
    const current = parseInt(localStorage.getItem('current'))
    if (current) {
      this.setState({
        current
      })
    }
  }

  current () {
    if (this.state.current && !this.props.register.current) { // 页面刷新的情况
      const current = this.state.current
      return current
    } else {
      const current = this.props.register.current
      return current
    }
  }

  render() {
    const current = this.current()
    console.log(current)
    return (
      <div className={Style.steps}>
        <div className={Style.title}>商家入驻流程</div>
        <div className={Style.step}>
          <section className={Style.item}>
            <Steps current={current}>
              {steps.map((item) => (
                <Step className={Style.cursor} key={item.title} title={item.title} />
              ))}
            </Steps>
          </section>
        </div>
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

export default  connect(mapStateToProps)(StepC)