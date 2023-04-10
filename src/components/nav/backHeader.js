import * as React from "react";
import { Link } from "gatsby";

import "./header.css";

const BackButtonHeader = props => {
  return (
    <div id="headerContainer">
      <header>
        <Link id="backButton" to="/">
            <img src="/images/arrow-left.svg" alt="Back" />
        </Link>
        <div id="titleContainer">
          <h1>{props.title}</h1>
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
