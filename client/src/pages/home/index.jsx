import React from 'react'
import Style from './index.less'
import { connect } from 'dva'


const index = ({ dispatch, home }) => {

 
  
  return (
    <main className={Style.register}>
     
    </main>
  )
}

function mapStateToProps(state) {
  const { home } = state
  return {
    home
  }
}

export default connect(mapStateToProps)(index)