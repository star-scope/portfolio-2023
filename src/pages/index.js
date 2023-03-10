import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
<>
  <Layout>
    <body>
        <div id="mainContainer">
            <main id="cardContainer">
                <section id="section1">
                    <div class="mainCard">
                        <img src="images/card1.png"></img>
                    </div>
                    <p class="s1">PROFESSIONAL PROJECTS</p>
                </section>
                <section id="section2">
                    <div class="mainCard">
                        <img src="images/card2.png"></img>
                    </div>
                    <p class="s1">PERSONAL PROJECTS</p>
                </section>
                <a HREF = "stack.html">
                    <section id="section3">
                        <div class="mainCard">
                            <img src="images/card3.png"></img>
                        </div>
                        <p class="s1">STACK</p>
                    </section>
                </a>
                <section id="section4">
                    <div class="mainCard">
                        <img src="images/card4.png"></img>
                    </div>
                    <p class="s1">CREDENTIALS</p>
                </section>
            </main>
        </div>
    </body>
  </Layout>
</>
)

export const Head = () => <Seo title="Home" />

export default IndexPage