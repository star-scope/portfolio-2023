import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
<body>
  <div id="headerContainer">
      <header>
          <img id="profilePic" src="images/Finished-min.jpg"></img>
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
  <div id="mainContainer">
      <main id="cardContainer">
          <section>
              <div class="mainCard">
                  <img src="images/card1.png"></img>
              </div>
              <p class="s1">PROFESSIONAL PROJECTS</p>
          </section>
          <section>
              <div class="mainCard">
                  <img src="images/card2.png"></img>
              </div>
              <p class="s1">PERSONAL PROJECTS</p>
          </section>
          <a HREF = "stack.html">
              <section>
                  <div class="mainCard">
                      <img src="images/card3.png"></img>
                  </div>
                  <p class="s1">STACK</p>
              </section>
          </a>
          <section>
              <div class="mainCard">
                  <img src="images/card4.png"></img>
              </div>
              <p class="s1">CREDENTIALS</p>
          </section>
      </main>
  </div>
  <footer>
      <div id="line"></div>
      <div id="gradient"></div>
      <div class="scroll">
          <p class="scrollContent footerCopy">UX DESIGN - UI DESIGN - GRAPHIC DESIGN - MOTION GRAPHICS - 3D - FRONT END -</p>
          <p class="scrollContent footerCopy">UX DESIGN - UI DESIGN - GRAPHIC DESIGN - MOTION GRAPHICS - 3D - FRONT END -</p>
          <p class="scrollContent footerCopy">UX DESIGN - UI DESIGN - GRAPHIC DESIGN - MOTION GRAPHICS - 3D - FRONT END -</p>
          <p class="scrollContent footerCopy">UX DESIGN - UI DESIGN - GRAPHIC DESIGN - MOTION GRAPHICS - 3D - FRONT END -</p>
      </div>
  </footer>
</body>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage