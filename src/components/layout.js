import * as React from "react"
import PropTypes from 'prop-types'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout =({children}) =>{
  return(
      <>
      <div>
          <Header/>
          <Footer/>
      </div>
      <main>{children}</main>
      </>
  )
}

export default Layout