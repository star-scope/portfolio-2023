import * as React from "react";

//Components
import Layout from "../components/layout";
import Seo from "../components/seo";
import BackButtonHeader from "../components/nav/backHeader";
import CredCard from "../components/cards/credCard";

const credentialsData = [
  {
    id: "section1",
    gradient: "linear-gradient(153.43deg, #E55725 0%, rgba(17, 17, 17, 0) 50%)",
    subtitleGradient: "linear-gradient(90deg, #E55725 0%, #CCCCCC 100%)",
    title: "FULL SAIL UNIVERSITY",
    subtitle: "B.S. - DIGITAL ARTS & DESIGN",
    image: "/images/fsu.png",
    body: "<p>GRAPHIC DESIGN<br/>MOTION GRAPHICS<br/>3D MODELING & RENDERING<br/>AUDIO ENGINEERING<br/>VIDEO EDITING<br/>ADOBE CREATIVE CLOUD</p>",
    link: "https://www.fullsail.edu/degrees/digital-arts-and-design-bachelor",
  },
  {
    id: "section2",
    gradient: "linear-gradient(153.43deg, #B3A369 0%, rgba(17, 17, 17, 0) 50%)",
    subtitleGradient: "linear-gradient(90deg, #B3A369 0%, #CCCCCC 100%)",
    title: "GEORGIA TECH",
    subtitle: "CERTIFICATE - UX/UI DESIGN",
    image: "/images/gt.png",
    body: "<p>UX DESIGN<br/>UI DESIGN<br/>FIGMA & ADOBE XD<br/>HTML, CSS, & JAVASCRIPT</p>",
    link: "https://pe.gatech.edu/courses/georgia-tech-uxui-boot-camp",
  },
  {
    id: "section3",
    gradient: "linear-gradient(153.43deg, #9EE1EC 0%, rgba(17, 17, 17, 0) 50%)",
    subtitleGradient: "linear-gradient(90deg, #9EE1EC 0%, #CCCCCC 100%)",
    title: "DESIGN+CODE",
    subtitle: "CERTIFICATE - REACT FOR DESIGNERS",
    image: "/images/dcio.png",
    body: "<p>REACTJS<br/>COMPONENTS & PROPS<br/>STATES & EVENTS<br/>CSS ANIMATIONS<br/>GRAPHQL & NETLIFY</p>",
    link: "https://designcode.io/certificate/1678742165358",
  },
];

const Credentials = () => (
  <>
    <Seo title="Credentials" />
    <Layout>
      <BackButtonHeader title="CREDENTIALS" />
      <div id="mainContainer">
        <main id="credContainer">
          {credentialsData.map((credential) => (
            <a href={credential.link} target="blank" key={credential.id}>
              <CredCard {...credential} />
            </a>
          ))}
        </main>
      </div>
    </Layout>
  </>
);

export const Head = () => <Seo title="About" />;

export default Credentials;