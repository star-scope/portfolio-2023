import React from "react"

// Styles
import styles from "./about.module.css"

// Components
import BackButtonHeader from '../src/components/nav/backHeader'

const About: React.FC = () => (
  <>
    <BackButtonHeader title="ABOUT"/>
    <div id={styles.spacerTop}>
      <p id="section1" className={styles.body}>Hi, I’m Caleb, a Senior UX/UI Designer based in Billings, MT. I currently work at Tactacam, where I lead design across our mobile apps, web experiences, and digital products. Tactacam develops industry-leading trail cameras for hunting, security cameras for home protection, and a growing ecosystem of connected products.</p>
      <div className={styles.spacer}></div>
      <p id="section2" className={styles.body}>I work primarily on <a className={styles.a} href="https://www.tactacam.com" target="_blank" rel="noopener noreferrer">Tactacam Reveal</a>, <a className={styles.a} href="https://www.habitatiq.com" target="_blank" rel="noopener noreferrer">HabitatIQ</a>, and our partnership app for Cabela’s. HabitatIQ helps hunters better understand and manage their land through mapping, property insights, and habitat planning tools. I also contribute to internal tools, user-facing websites, and a variety of other digital experiences. My focus is creating intuitive, scalable products that balance user needs with business goals.</p>
      <div className={styles.spacer}></div>
      <p id="section3" className={styles.body}>My skill set includes UX Design, UI Design, Motion Graphics, Graphic Design, 3D, and Front-End Development.</p>
      <div className={styles.spacer}></div>
      <p id="section4" className={styles.body}>In my free time, I enjoy producing electronic music, learning new skills, playing video games, and enjoying a nice glass of bourbon.</p>
      <div className={styles.spacer}></div>
      <p id="section5" className={styles.body}>You can learn more about me through the social links below, or check out my <a className={styles.a} href="https://read.cv/starscope" target="_blank" rel="noopener noreferrer">resume</a>.</p>
    </div>
    <div id={styles.linkGrid}>
      <a className={styles.a} id="section1" href="https://twitter.com/whostarscope" target="_blank" rel="noopener noreferrer"><img className={styles.aboutLink} src="/images/Twitter.svg" alt="Twitter Link"/></a>
      <a className={styles.a} id="section2" href="https://github.com/star-scope/" target="_blank" rel="noopener noreferrer"><img className={styles.aboutLink} src="/images/GitHub.svg" alt="GitHub Link"/></a>
      <a className={styles.a} id="section3" href="mailto:contact@starscope.design?subject=Hello!" target="_blank" rel="noopener noreferrer"><img className={styles.aboutLink} src="/images/Email.svg" alt="Email Link"/></a>
    </div>
  </>
)

export default About