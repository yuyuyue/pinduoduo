import style from './index.less'

const layout = (props) => {
  if (props.location.pathname === '/login') {
    return props.children 
  } else if (props.location.pathname === '/register') {
    return props.children
  }

  return (
    <main className={style}>
      {props.children}
    </main>
  )
}

export default layout;
