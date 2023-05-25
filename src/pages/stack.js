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
            link1="https://www.figma.com/design/"
            link2="https://www.framer.com/"
            link3="https://www.adobe.com/products/xd/learn/get-started/what-is-adobe-xd-used-for.html"
            link4="https://www.adobe.com/products/aftereffects.html"
            link5="https://www.adobe.com/products/photoshop.html"
            link6="https://www.adobe.com/products/illustrator.html"
            link7="https://www.adobe.com/products/photoshop-lightroom.html"
            link8="https://www.adobe.com/products/indesign.html"
            link9="https://www.maxon.net/en/cinema-4d"
            link10="https://home.otoy.com/render/octane-render/"
            link11="https://lottiefiles.com/"
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
            link1="https://code.visualstudio.com/"
            link2="https://github.com/"
            link3="https://www.w3.org/standards/webdesign/htmlcss"
            link4="https://www.w3.org/standards/webdesign/htmlcss"
            link5="https://react.dev/"
            link6="https://www.swift.org/"
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
            link1="https://arc.net/"
            link2="https://discord.com/"
            link3="https://slack.com/"
            link4="https://signal.org/en/"
            link5="https://metamask.io/"
            link6="https://coinbase.com/"
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
            link1="https://www.apple.com/logic-pro/"
            link2="https://www.ableton.com/en/live/"
            link3="https://www.apple.com/final-cut-pro/"
            link4="https://www.adobe.com/products/premiere.html"
            link5="https://www.office.com/"
            link6="https://www.notion.so/product" 
            image1="/images/stack/Logic.png" 
            image2="/images/stack/Ableton.png" 
            image3="/images/stack/FC.png" 
            image4="/images/stack/PR.png" 
            image5="/images/stack/365.png" 
            image6="/images/stack/Notion.png"/>
        </main>
      </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Stack
