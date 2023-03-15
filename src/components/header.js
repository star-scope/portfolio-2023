import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "./header.css"

const Header = () => {
    return (
    <div id="headerContainer">
        <header>
            <AniLink fade to="/about/" duration={1}>
                <img id="profilePic" src="/images/Finished-min.jpg"></img>
            </AniLink>
            <section id="title">
                <h1>MY NAME IS CALEB FAULKNER</h1>
                <p class="bodyCopy">DESIGN TECHNOLOGIST - <a id="role" href="https://tactacam.com" target="blank">TACTACAM</a></p>
            </section>
            <section id="flagContainer">
                <img class="flags" src="/images/Flag-US.png"></img>
                <img class="flags" src="/images/Flag-Earth.png"></img>
            </section>
        </header>
    </div>
    );
  };

export default Header;