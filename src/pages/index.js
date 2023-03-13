import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeCard from "../components/card"
import Header from "../components/header"


const IndexPage = () => (
<>
  <Layout>
    <Header/>
    <body>
        <div id="mainContainer">
            <main id="cardContainer">
                <HomeCard id="section1" title="PROFESSIONAL WORK" image="/images/card1.png"/>
                <HomeCard id="section2" title="SIDE PROJECTS" image="/images/card2.png"/>
                <HomeCard id="section3" title="STACK" image="/images/card3.png"/>
                <HomeCard id="section4" title="CREDENTIALS" image="/images/card4.png"/>
            </main>
        </div>
    </body>
  </Layout>
</>
)

export const Head = () => <Seo title="Home" />

export default IndexPage