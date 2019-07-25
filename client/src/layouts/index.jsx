import Style from './index.less'
import img from '@assets/image/pinduoduo.svg'
import { Button, Avatar, Icon } from 'antd';
import Link from 'umi/link'
import { connect } from 'dva';

const layout = (props) => {
  if (props.location.pathname === '/login') {
    return props.children 
  } else if (props.location.pathname === '/register') {
    return props.children
  }
  const handleMouseEnter = () => {
    props.dispatch({
      type: 'layout/mouse',
      payload: true
    })
  }

  const handleMouseLeave = () => {
    props.dispatch({
      type: 'layout/mouse',
      payload: false
    })
  }

  const handleLoginOut = () => {

  }
  return (
    <main >
      <header className={Style.banner}>
        <img className={Style.img} src={img} alt=""/>
        <Button className={Style.backHome}>返回首页</Button>
        <div className={Style.list}></div>
        <div className={Style.account} onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
          <div className={Style.info}>
            <Avatar icon="user" />
            <p>小小小店</p>
            <Icon type="ellipsis" spin={true}/>
          </div>
          {
            props.layout.isMouseEnter && 
            <div >
              <Link to='/acount'></Link>
              <p onClick={ handleLoginOut }></p>
            </div>
          }
        </div>
      </header>

      {props.children}

    </main>
  )
}

function mapStateToProps(state) {
  const { layout } = state
  return {
    layout
  }
}

export default connect(mapStateToProps)(layout)
