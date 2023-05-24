import * as React from "react"
import { Link } from "gatsby"
import BackButtonHeader from "../components/nav/backHeader"
import Layout from "../components/layout"
import Seo from "../components/seo"
import StackCard from "../components/cards/stackCard"
import StackCard2 from "../components/cards/stackCard2"

const Stack = () => (
  <Layout>
      <BackButtonHeader title="STACK" />
      <div id="mainContainer">
        <main id="cardContainer">
          <StackCard 
            id="section1" 
            title="DESIGN" 
            image="/images/Empty.png" 
            image1="/images/stack/Figma.png" 
            image2="/images/stack/Framer.png" 
            image3="/images/stack/XD.png" 
            image4="/images/stack/AE.png" 
            image5="/images/stack/PS.png" 
            image6="/images/stack/AI.png" 
            image7="/images/stack/LR.png" 
            image8="/images/stack/ID.png" 
            image9="/images/stack/C4D.png" 
            image10="/images/stack/Octane.png" 
            image11="/images/stack/Lottie.png"/>
          <StackCard2 
            id="section2" 
            title="DEVELOPMENT" 
            image="/images/Empty.png" 
            image1="/images/stack/VSC.png" 
            image2="/images/stack/GH.png" 
            image3="/images/stack/HTML.png" 
            image4="/images/stack/CSS.png" 
            image5="/images/stack/React.png" 
            image6="/images/stack/Swift.png"/>
          <StackCard2 
            id="section3" 
            title="PERSONAL" 
            image="/images/Empty.png" 
            image1="/images/stack/Arc.png" 
            image2="/images/stack/Discord.png" 
            image3="/images/stack/Slack.png" 
            image4="/images/stack/Signal.png" 
            image5="/images/stack/MM.png" 
            image6="/images/stack/CB.png"/>
          <StackCard2 
            id="section4" 
            title="OTHER" 
            image="/images/Empty.png" 
            image1="/images/stack/Logic.png" 
            image2="/images/stack/Ableton.png" 
            image3="/images/stack/FC.png" 
            image4="/images/stack/PR.png" 
            image5="/images/stack/Office.png" 
            image6="/images/stack/Notion.png"/>
        </main>
      </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Stack
