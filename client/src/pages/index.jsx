import React from "react"
import Link from "umi/link"
import "./index.less"
import { connect } from "dva"

const index = () => {
  return (
    <section>
      <Link to="/login">
        login
      </Link>
      <Link to="/register">
        register
      </Link>
      <Link to="/home">
        home
      </Link>
    </section>
  )
}

export default connect()(index)