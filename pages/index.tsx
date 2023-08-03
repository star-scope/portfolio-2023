import React from "react";
import Link from "next/link";
import Head from 'next/head'

import styles from "../src/components/cards/card.module.css"
// Components
import HomeCard from "../src/components/cards/card";
import Header from "../src/components/nav/header";

const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Caleb Faulkner - Home</title>
      </Head>
      <Header />
      <div id="mainContainer">
        <main id="cardContainer">
          <Link href="/work/">
            <HomeCard id="section1" title="PROFESSIONAL WORK" image="/images/card1.png" />
          </Link>
          <Link href="/sideprojects/">
            <HomeCard id="section2" title="SIDE PROJECTS" image="/images/card2.png" />
          </Link>
          <Link href="/stack/">
            <HomeCard id="section3" title="STACK" image="/images/card3.png" />
          </Link>
          <Link href="/credentials/">
            <HomeCard id="section4" title="CREDENTIALS" image="/images/card4.png" />
          </Link>
        </main>
      </div>
    </>
  );
};

export default IndexPage;