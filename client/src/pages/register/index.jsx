import React from 'react'
import Style from './index.less'
import { connect } from 'dva'
import StepC from '@components/register/step/index.jsx'
import Code from '@components/register/code/index.jsx'
import Info from '@components/register/info/index.jsx'
import Type from '@components/register/type/index.jsx'

const index = ({ dispatch, register }) => {

  const step = (current) => {
    if (current === 0) {
      return <Code />
    } else if (current === 1) {
      return <Type />
    } else {
      return <Info /> 
    }
  }

  const getCurrent = () => {
    let current = parseInt(localStorage.getItem('current'))
    if (current && !register.current) {
      return current
    } else {
      return register.current
    }
  }

  let current = getCurrent()
  
  return (
    <main className={Style.register}>
      <StepC />
      {
        step(current)
      }
    </main>
  )
}

function mapStateToProps(state) {
  const { register } = state
  return {
    register
  }
}

export default connect(mapStateToProps)(index)