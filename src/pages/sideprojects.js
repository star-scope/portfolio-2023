import React from "react";
import { Link } from "gatsby";

// Styles
import "../components/about.css";
import "../components/layout.css";
import "../components/work.css";

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";
import BackButtonHeader from "../components/nav/backHeader";
import WorkCard from "../components/cards/workCard";

const SideProjects = () => {
  return (
    <>
      <Seo title="Side Projects" />
      <Layout>
        <BackButtonHeader title="SIDE PROJECTS" />
        <div id="mainContainer">
          <main id="workContainer">
            <Link id="link" to="https://www.figma.com/community/plugin/1109344197084586587" target="blank"><WorkCard id="section1" title="FIGMA EMAIL PLUGIN" subtitle="EMAIL ADDRESS GENERATOR" image="/images/Email.png"/></Link>
            <Link id="link" to="https://faulkner.wedding" target="blank"><WorkCard id="section1" title="FAULKNER.WEDDING" subtitle="PERSONAL WEDDING SITE" image="/images/Wedding.png"/></Link>
            <Link id="link"><WorkCard id="section1" title="STARSCOPE.DESIGN" subtitle="YOU KNOW WHERE YOU ARE" image="/images/Starscope.png"/></Link>
            <Link id="link" to="https://starscope.gumroad.com/l/playlistcovers-edmcollection" target="blank"><WorkCard id="section1" title="PLAYLIST COVERS" subtitle="ORGANIZE YOUR PLAYLISTS" image="/images/Playlist.png"/></Link>
            <Link id="link"><WorkCard id="section1" title="CYBR DESIGN SYSTEM" subtitle2="COMING SOON" image="/images/Cybr.png"/></Link>
            <Link id="link"><WorkCard id="section1" title="SOLSYSTEM.SPACE" subtitle2="COMING SOON" image="/images/Solsystem.png"/></Link>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default SideProjects;
