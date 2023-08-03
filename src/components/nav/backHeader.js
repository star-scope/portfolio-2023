import * as React from "react";
import Link from "next/link";
import { Toaster, toast } from 'sonner'

import "./header.css";

const BackButtonHeader = props => {
  return (
    <div id="headerContainer">
      <header>
        <Link id="backButton" href="/">
            <img src="/images/arrow-left.svg" alt="Back" />
        </Link>
        <div id="titleContainer">
          <h1>{props.title}</h1>
        </div>
        <section id="flagContainer">
          <button onClick={() => {
              toast.dismiss(); 
              toast.message('Flag Of The United States of America', {description: 'I was born in Atlanta, GA. I love my country and am proud to be an American citizen.',});
                  }}>
              <img class="flags" src="/images/Flag-US.png"></img>
          </button>
          <button onClick={() => {
              toast.dismiss(); 
              toast.message('Flag Of Planet Earth', {description: 'I love to travel, and have been to 24 U.S. states, and 8 countries! My favorite adventure was in Alaska.',});
                  }}>
              <img class="flags" src="/images/Flag-Earth.png"></img>
          </button>
        </section>
        <Toaster toastOptions={{ style: { background: '#101010', borderRadius: '10px' },}} visibleToasts={1} position="top-right" duration={'50000'} closeButton theme="dark" />
      </header>
    </div>
  );
};

export default BackButtonHeader;
