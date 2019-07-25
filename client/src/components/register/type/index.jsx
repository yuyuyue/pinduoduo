import React from 'react'
import Style from './index.less'
import { connect } from 'dva'
import { Button, message } from 'antd'

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      type: 0,
    }
  }

  handleSubmit = () => {
    if (!this.state.type) {
      message.error('请选择先店铺类型')
      return
    }
    localStorage.setItem('type', this.state.type)
    localStorage.setItem('current', 2)
    this.props.dispatch({
      type: 'register/current',
      payload: 2
    })
  }

  handlePre = () => {
    localStorage.setItem('type', this.state.type)
    localStorage.setItem('current', 0)
    this.props.dispatch({
      type: 'register/current',
      payload: 0
    })
  }

  handleClick = (type) => {
    this.setState({
      type
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

    const type = [
      {
        type: 1,
        value: `个人店  个人身份开店(无营业执照)`
      },
      {
        type: 2,
        value: `个体工商店  个体工商户开店(有营业执照)`
      },
      {
        type: 3,
        value: `旗舰店   经营1个自有品牌或1级授权品牌旗舰店`
      },
      {
        type: 4,
        value: `专卖店   经营1个自有品牌或授权销售专卖店(≤2级)`
      },
      {
        type: 5,
        value: `专营店   经营1个或多个自有/他人品牌的专营店`
      },
      {
        type: 6,
        value: `普通店   普通企业店铺`
      }
    ]
    return (
      <div className={Style.finish}>
        <section className={Style.form}>
          <div className={Style.title}>
            选择店铺类型
          </div>
          <div className={Style.item}>
            {
              type.map(item => {
                return <Button key={item.type} className={Style.button} onClick={this.handleClick.bind(null, item.type)} block>{item.value}</Button>
              })
            }
            <div className={Style.button}>
              <div className={Style.pre}>
                <Button block onClick={ this.handlePre }>
                  上一步
                </Button>
              </div>
              <div className={Style.next}>
                <Button type="primary" block onClick={ this.handleSubmit }>
                  下一步
                </Button>
              </div>
            </div>
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

export default connect(mapStateToProps)(Type)