import React from 'react'
import Style from './index.less'
import { connect } from 'dva'
import PwdLogin from '@components/login/pwd/index.jsx'
import CodeLogin from '@components/login/code/index.jsx'
import UpdatePwd from '@components/login/updatepwd/index.jsx'
import loginImg from '@assets/image/login-img.png'
import pinImg from '@assets/image/pinduoduo.png'

const index = ({ dispatch, login }) => {
  function loginTypeChange(type) {
    dispatch({
      type: 'login/change',
      payload: {
        loginType: type
      }
    })
  }

  function contextType () {
    if (login.loginType === 1) {
      return <PwdLogin />
    } else if (login.loginType === 2) {
      return <CodeLogin />
    } else {
      return <UpdatePwd />
    }
  }
  return (
    <main className={Style.login}>
      <div className={Style.header}>
        <img src={ pinImg } alt="拼多多"/>
        <div className={Style.headerTitle}>商家管理后台</div>
      </div>
      <div className={Style.container}>
        <img src={ loginImg } alt="登录图片"/>
          <section>
            <div className={Style.form}>
              <div className={Style.info}>
                <div className={Style.title}>
                  <p className={`${Style.option} ${login.loginType === 1 ? Style.oprated : '' }`} onClick={ loginTypeChange.bind(null, 1) } >密码登录</p>
                  <p className={`${Style.option} ${login.loginType === 2 ? Style.oprated : '' }`} onClick={ loginTypeChange.bind(null, 2) }>短信登录</p>
                </div>
                <span className={Style.register}>0元入驻</span>
              </div>
              <div className={Style.context}>
                { contextType() }
              </div>
            </div>
          </section>
      </div>
    </main>
  )
}

function mapStateToProps(state) {
  const { login } = state
  return {
    login
  }
}

export default connect(mapStateToProps)(index)