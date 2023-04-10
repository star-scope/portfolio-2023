import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import CredCard from "../components/cards/credCard";
import BackButtonHeader from "../components/nav/backHeader";

const Credentials = () => {
  const gradient1 = "linear-gradient(153.43deg, #E55725 0%, rgba(17, 17, 17, 0) 50%)";
  const gradient2 = "linear-gradient(153.43deg, #B3A369 0%, rgba(17, 17, 17, 0) 50%)";
  const gradient3 = "linear-gradient(153.43deg, #9EE1EC 0%, rgba(17, 17, 17, 0) 50%)";
  const subtitleGradient1 = "linear-gradient(90deg, #E55725 0%, #CCCCCC 100%)";
  const subtitleGradient2 = "linear-gradient(90deg, #B3A369 0%, #CCCCCC 100%)";
  const subtitleGradient3 = "linear-gradient(90deg, #9EE1EC 0%, #CCCCCC 100%)";

  return (
    <Layout>
      <BackButtonHeader title="CREDENTIALS" />
      <div id="mainContainer">
        <main id="credContainer">
          <a href="https://www.fullsail.edu/degrees/digital-arts-and-design-bachelor" target="blank">
            <CredCard
              id="section1"
              gradient={gradient1}
              title="FULL SAIL UNIVERSITY"
              subtitle="B.S. - DIGITAL ARTS & DESIGN"
              subtitleGradient={subtitleGradient1}
              image="/images/fsu.png"
              body="<p>GRAPHIC DESIGN<br/>MOTION GRAPHICS<br/>3D MODELING & RENDERING<br/>AUDIO ENGINEERING<br/>VIDEO EDITING<br/>ADOBE CREATIVE CLOUD</p>"
            />
          </a>
          <a href="https://pe.gatech.edu/courses/georgia-tech-uxui-boot-camp" target="blank">
            <CredCard
              id="section2"
              gradient={gradient2}
              title="GEORGIA TECH"
              subtitle="CERTIFICATE - UX/UI DESIGN"
              subtitleGradient={subtitleGradient2}
              image="/images/gt.png"
              body="<p>UX DESIGN<br/>UI DESIGN<br/>FIGMA & ADOBE XD<br/>HTML, CSS, & JAVASCRIPT</p>"
            />
          </a>
          <a href="https://designcode.io/certificate/1678742165358" target="blank">
            <CredCard
              id="section3"
              gradient={gradient3}
              title="DESIGN+CODE"
              subtitle="CERTIFICATE - REACT FOR DESIGNERS"
              subtitleGradient={subtitleGradient3}
              image="/images/dcio.png"
              body="<p>REACTJS<br/>COMPONENTS & PROPS<br/>STATES & EVENTS<br/>CSS ANIMATIONS<br/>GRAPHQL & NETLIFY</p>"
            />
          </a>
        </main>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default Credentials;
