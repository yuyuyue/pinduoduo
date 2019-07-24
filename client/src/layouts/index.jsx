import style from './index.less'

const layout = (props) => {
  return (
    <main className={style["layout"]}>
      {props.children}
    </main>
  )
}

export default layout;
