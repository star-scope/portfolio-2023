import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "./header.css";

const BackButtonHeader = () => {
    return (
    <div id="headerContainer">
      <header>
        <AniLink fade to="/" duration={1}>
            <img src="/images/arrow-left.svg" />
        </AniLink>
        <div id="titleContainer">
          <h1>ABOUT</h1>
        </div>
        <section id="flagContainer">
          <img className="flags" src="/images/Flag-US.png" alt="US Flag" />
          <img className="flags" src="/images/Flag-Earth.png" alt="Earth Flag" />
        </section>
      </header>
    </div>
  );
};

export default BackButtonHeader;
