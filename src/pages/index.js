import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";
import HomeCard from "../components/cards/card";
import Header from "../components/nav/header";

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Header />
        <div id="mainContainer">
          <main id="cardContainer">
            <Link to="/work/">
              <HomeCard id="section1" title="PROFESSIONAL WORK" image="/images/card1.png" />
            </Link>
            <Link to="/sideprojects/">
              <HomeCard id="section2" title="SIDE PROJECTS" image="/images/card2.png" />
            </Link>
            <Link to="/stack/">
              <HomeCard id="section3" title="STACK" image="/images/card3.png" />
            </Link>
            <Link to="/credentials/">
              <HomeCard id="section4" title="CREDENTIALS" image="/images/card4.png" />
            </Link>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;