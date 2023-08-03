import React from "react";
import Link from "next/link";
import Head from 'next/head'

// Styles
// import styles from "./about.module.css"
import styles from "../pages/work.module.css";

// Components
import BackButtonHeader from '../src/components/nav/backHeader'
import WorkCard from "../src/components/cards/workCard";

const SideProjects: React.FC = () => {
return (
    <>
        <Head>
            <title>Caleb Faulkner - Side Projects</title>
        </Head>
        <BackButtonHeader title="SIDE PROJECTS" />
        <div id="mainContainer">
            <main id="workContainer">
                <Link id="link" href="https://www.figma.com/community/plugin/1109344197084586587" target="blank"><WorkCard id="section1" title="FIGMA EMAIL PLUGIN" subtitle="EMAIL ADDRESS GENERATOR" image="/images/Email.png"/></Link>
                <Link id="link" href="https://faulkner.wedding" target="blank"><WorkCard id="section1" title="FAULKNER.WEDDING" subtitle="PERSONAL WEDDING SITE" image="/images/Wedding.png"/></Link>
                <a id="link"><WorkCard id="section1" title="STARSCOPE.DESIGN" subtitle="YOU KNOW WHERE YOU ARE" image="/images/Starscope.png"/></a>
                <Link id="link" href="https://starscope.gumroad.com/l/playlistcovers-edmcollection" target="blank"><WorkCard id="section1" title="PLAYLIST COVERS" subtitle="ORGANIZE YOUR PLAYLISTS" image="/images/Playlist.png"/></Link>
                <a id="link"><WorkCard id="section1" title="CYBR DESIGN SYSTEM" subtitle2="COMING SOON" image="/images/Cybr.png" subtitle={""}/></a>
                <a id="link"><WorkCard id="section1" title="SOLSYSTEM.SPACE" subtitle2="COMING SOON" image="/images/Solsystem.png" subtitle={""}/></a>
            </main>
        </div>
    </>
    );
};

export default SideProjects;