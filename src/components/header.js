import * as React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = ({}) => (
  <div id="headerContainer">
      <header>
          <img id="profilePic" src="/images/Finished-min.jpg"></img>
          <section id="title">
              <h1>MY NAME IS CALEB FAULKNER</h1>
              <p class="bodyCopy">DESIGN TECHNOLOGIST - <a id="role" href="https://tactacam.com" target="blank">TACTACAM</a></p>
          </section>
          <section id="flagContainer">
              <img class="flags" src="images/Flag-US.png"></img>
              <img class="flags" src="images/Flag-Earth.png"></img>
          </section>
      </header>
  </div>
)

export default Header