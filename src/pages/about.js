import React from "react"

// Styles
import "../components/about.css"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import BackButtonHeader from '../components/nav/backHeader'

const About = () => (
  <>
    <Seo title="About" />
    <Layout>
      <BackButtonHeader title="ABOUT"/>
      <div id="spacer-top">
        <p id="section1" className="body">Hi, I’m Caleb. I’m a Designer based in Atlanta, GA. I currently work as a Design Technologist for Tactacam. Tactacam makes POV cameras and trailcams for hunting, security cameras for home defense, and various other products. I work on our mobile and web apps that allow you to connect your devices to these cameras, along with our internal and user facing websites. Our main apps are called <a href="https://apps.apple.com/gr/app/tactacam-connect/id1589965130" target="_blank" rel="noopener noreferrer">Tactacam Connect</a>, <a href="https://apps.apple.com/us/app/tactacam-reveal/id1515339989" target="_blank" rel="noopener noreferrer">Tactacam Reveal</a>, and Tactacam Security. I am also working on a partnership app for Cabella’s/Bass Pro Shops, and a variety of other personal projects.</p>
        <div className="spacer"></div>
        <p id="section2" className="body">My skill sets include UX Design, UI Design, Motion Graphics, Graphic Design, 3D, and Front End Development.</p>
        <div className="spacer"></div>
        <p id="section3" className="body">In my free time, I enjoy creating electronic music, learning new skills, playing video games, and enjoying a nice glass of bourbon.</p>
        <div className="spacer"></div>
        <p id="section4" className="body">You can learn more about me at the social links below. You can also check out my <a href="https://read.cv/starscope" target="_blank" rel="noopener noreferrer">resume</a>.</p>
      </div>
      <div id="linkGrid">
        <a id="section1" href="https://twitter.com/whostarscope" target="_blank" rel="noopener noreferrer"><img className="link" src="/images/Twitter.svg" alt="Twitter Link"/></a>
        <a id="section2" href="https://github.com/star-scope/" target="_blank" rel="noopener noreferrer"><img className="link" src="/images/GitHub.svg" alt="GitHub Link"/></a>
      </div>
      <img id="FullPP" src="/images/FullPP.jpg" alt="Profile"></img>
    </Layout>
  </>
)

export default About