import React from "react";
import "../components/about.css";
import Layout from "../components/layout";
import "../components/layout.css";
import Seo from "../components/seo";
import BackButtonHeader from "../components/nav/backHeader";
import "../components/work.css";
import WorkCard from "../components/cards/workCard";
import { Link } from "gatsby";


const SideProjects = () => {
  return (
    <>
      <Seo title="Side Projects" />
        <Layout>
          <BackButtonHeader title="SIDE PROJECTS" />
          <div id="mainContainer">
            <main id="workContainer">
              <Link to="https://www.figma.com/community/plugin/1109344197084586587" target="blank"><WorkCard id="section1" title="FIGMA EMAIL PLUGIN" subtitle="EMAIL ADDRESS GENERATOR" image="/images/Email.png"/></Link>
              <Link to="https://faulkner.wedding" target="blank"><WorkCard id="section1" title="FAULKNER.WEDDING" subtitle="PERSONAL WEDDING SITE" image="/images/Wedding.png"/></Link>
              <Link><WorkCard id="section1" title="STARSCOPE.DESIGN" subtitle="YOU KNOW WHERE YOU ARE" image="/images/Starscope.png"/></Link>
              <Link to="https://starscope.gumroad.com/l/playlistcovers-edmcollection" target="blank"><WorkCard id="section1" title="PLAYLIST COVERS" subtitle="ORGANIZE YOUR PLAYLISTS" image="/images/Playlist.png"/></Link>
              <Link><WorkCard id="section1" title="CYBR DESIGN SYSTEM" subtitle2="COMING SOON" image="/images/Cybr.png"/></Link>
              <Link><WorkCard id="section1" title="SOLSYSTEM.SPACE" subtitle2="COMING SOON" image="/images/Solsystem.png"/></Link>
            </main>
          </div>
        </Layout>
    </>
  );
};

export default SideProjects;
