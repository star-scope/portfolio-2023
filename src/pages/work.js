import React, { useState } from "react";
import { Link } from "gatsby";
import { Toaster, toast } from 'sonner';

// Styles
import "../components/about.css";
import "../components/layout.css";
import "../components/work.css";

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";
import BackButtonHeader from "../components/nav/backHeader";
import WorkCard from "../components/cards/workCard";

const Work = () => {
  const [hasAccess, setHasAccess] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const enteredPassword = e.target.password.value;
    const correctPassword = "Frame27";
  
    if (enteredPassword.trim() === '') {
      toast.error('Please enter a password');
      toast.dismiss();
    } else if (enteredPassword === correctPassword) {
      setHasAccess(true);
    } else {
      toast.error('Password Incorrect');
      toast.dismiss();
    }
  };

return (
  <>
    <Seo title="Professional Work" />
    {hasAccess ? (
      <Layout>
        <BackButtonHeader title="PROFESSIONAL WORK" />
        <div id="mainContainer">
          <main id="workContainer">
            <Link className="link" to="https://starscope.notion.site/Tactacam-Reveal-cfbca692e05e43db8029edb2917ea52a" target="blank">
              <WorkCard id="section1" title="TACTACAM REVEAL" subtitle="TRAILCAM APP" image="/images/Reveal.png"/>
            </Link>
            <Link className="link" to="https://starscope.notion.site/Tactacam-Connect-9f29ea7ccfc149ddae0cf8e0ccae49e8" target="blank">
              <WorkCard id="section1" title="TACTACAM CONNECT" subtitle="POV CAMERA APP" image="/images/Connect.png"/>
            </Link>
            <Link className="link" to="https://design.ishareit.net" target="blank">
              <WorkCard id="section1" title="TACTACAM DESIGN SYSTEM" subtitle="PASSWORD: TACTA0HEIGHT" image="/images/Design System.png"/>
            </Link>
            <Link className="link" to="https://starscope.notion.site/Breaker-Nation-4d9efe3eec8f4e35886628b59f69ce5a" target="blank">
              <WorkCard id="section1" title="BREAKER NATION" subtitle="MUSIC SHARING SOCIAL MEDIA" image="/images/Breaker.png"/>
            </Link>
            <Link className="link" to="https://starscope.notion.site/Xquisite-Marketing-a126d213e1334e50ba606bb35a09b382" target="blank">
              <WorkCard id="section1" title="XQUISITE MARKETING" subtitle="GRAPHIC DESIGN & BRANDING" image="/images/XM.png"/>
            </Link>
            <Link className="link">
              <WorkCard id="section1" title="TACTACAM SECURITY" subtitle2="COMING SOON" image="/images/Security.png"/>
            </Link>
          </main>
        </div>
      </Layout>
    ) : (
      <div className="passwordWrapper">
        <img id="logo" src="/images/Logo.png" alt="Logo" />
        <h1 id="section1">PLEASE ENTER PASSWORD</h1>
        <form onSubmit={handlePasswordSubmit}>
          <input id="section2" type="password" name="password"/>
          <div id="section3" className="buttonWrapper">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
        <Toaster toastOptions={{className: 'toast',}} position="bottom-center" richColors closeButton theme="dark" />
      </div>
    )}
  </>
);
};

export default Work;