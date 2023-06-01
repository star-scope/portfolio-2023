import * as React from "react"
import { Link } from "gatsby";
import { Toaster, toast } from 'sonner'

import "./header.css"

const Header = () => {
    return (
    <div id="headerContainer">
        <header>
            <Link id="PPContainer" to="/about/">
                <img id="profilePic" src="/images/PP.png"></img>
            </Link>
            <section id="title">
                <h1>MY NAME IS CALEB FAULKNER</h1>
                <p class="bodyCopy">DESIGN TECHNOLOGIST - <a id="role" href="https://tactacam.com" target="blank">TACTACAM</a></p>
            </section>
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

export default Header;