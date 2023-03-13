import * as React from "react"
import PropTypes from 'prop-types'

import "./layout.css"
import Footer from "../components/footer"

const Layout =({children}) =>{
  return(
      <>
      <Footer/>
      <main>{children}</main>
      </>
  )
}

export default Layout