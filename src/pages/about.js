import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import "../components/about.css"


const About = () => (
<>
  <Layout>
    <Header/>
    <div>
      <div id="spacerTop"></div>
      <p id="section1" class="body">Hi, I’m Caleb. I’m a Designer based in Atlanta, GA. I currently work as a Design Technologist for a company called Tactacam. Tactacam makes POV cams and trailcams for hunting, security cameras for home defense, and various other products. I work on our mobile and web apps that allow you to connect your devices to these cameras, along with our internal and user facing websites. Our main apps are called <a href="https://apps.apple.com/gr/app/tactacam-connect/id1589965130" target="blank">Tactacam Connect</a>, <a href="https://www.revealcellcam.com/" target="blank">Tactacam Reveal</a>, and Tactacam Security. I am also working on a partnership app for Cabella’s/Bass Pro Shops, and a variety of other personal projects.</p>
      <div class="spacer"></div>
      <p id="section2"class="body">My skill sets include UX Design, UI Design, Motion Graphics, Graphic Design, 3D, and Front End Development.</p>
      <div class="spacer"></div>
      <p id="section3" class="body">In my free time, I enjoy creating electronic music, learning about historical and current world events, learning new skills, playing video games, and enjoying a nice glass of bourbon.</p>
      <div class="spacer"></div>
      <p id="section4" class="body">You can learn more about me at the social links below. You can also check out my <a href="https://read.cv/starscope" target="blank">resume</a>.</p>
    </div>
    <div id="linkGrid">
      <Link to="/"><img id="backButton" src="/images/arrow-left.svg"></img></Link>
      <a id="section1" href="https://twitter.com/whostarscope" target="blank"><img class="link" src="/images/twitter.svg"></img></a>
      <a id="section2" href="https://github.com/star-scope/" target="blank"><img class="link" src="/images/github.svg"></img></a>
      <a id="section3" href="https://starscope.medium.com/" target="blank"><img class="link" src="/images/medium.svg"></img></a>
      <a id="section4" href="https://dribbble.com/starscope" target="blank"><img class="link" src="/images/dribbble.svg"></img></a>
    </div>
  </Layout>
</>
)

export const Head = () => <Seo title="About" />

export default About