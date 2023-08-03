import React, { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { Toaster, toast } from 'sonner';
import Head from 'next/head'

// Styles
import '../src/styles/styles.css';
import styles from "../pages/work.module.css";

// Components
import BackButtonHeader from '../src/components/nav/backHeader'
import WorkCard from "../src/components/cards/workCard";

const Work: React.FC = () => {
  const [hasAccess, setHasAccess] = useState(false);

  const handlePasswordSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredPassword = (e.target as any).password.value;
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
      {hasAccess ? (
          <>
          <Head>
            <title>Caleb Faulkner - Work</title>
          </Head>
          <BackButtonHeader title="PROFESSIONAL WORK" />
          <div id="mainContainer">
            <main id="workContainer">
              <Link id={styles.link} href="https://starscope.notion.site/Tactacam-Reveal-cfbca692e05e43db8029edb2917ea52a">
                <WorkCard id="section1" title="TACTACAM REVEAL" subtitle="TRAILCAM APP" image="/images/Reveal.png"/>
              </Link>
              <Link id={styles.link} href="https://starscope.notion.site/Tactacam-Connect-9f29ea7ccfc149ddae0cf8e0ccae49e8">
                <WorkCard id="section1" title="TACTACAM CONNECT" subtitle="POV CAMERA APP" image="/images/Connect.png"/>
              </Link>
              <Link id={styles.link} href="https://design.ishareit.net">
                <WorkCard id="section1" title="TACTACAM DESIGN SYSTEM" subtitle="PASSWORD: TACTA0HEIGHT" image="/images/Design System.png"/>
              </Link>
              <Link id={styles.link} href="https://starscope.notion.site/Breaker-Nation-4d9efe3eec8f4e35886628b59f69ce5a">
                <WorkCard id="section1" title="BREAKER NATION" subtitle="MUSIC SHARING SOCIAL MEDIA" image="/images/Breaker.png"/>
              </Link>
              <Link id={styles.link} href="https://starscope.notion.site/Xquisite-Marketing-a126d213e1334e50ba606bb35a09b382">
                <WorkCard id="section1" title="XQUISITE MARKETING" subtitle="GRAPHIC DESIGN & BRANDING" image="/images/XM.png"/>
              </Link>
              <a id={styles.link}>
                <WorkCard id="section1" title="TACTACAM SECURITY" subtitle2="COMING SOON" image="/images/Security.png" subtitle={""}/>
              </a>
            </main>
          </div>
      </>
    ) : (
      <div className={styles.passwordWrapper}>
        <Head>
          <title>Caleb Faulkner - Work</title>
        </Head>
        <img id="logo" src="/images/Logo.png" />
        <h1 id="section1">PLEASE ENTER PASSWORD</h1>
        <form className={styles.form} onSubmit={handlePasswordSubmit}>
          <input className={styles.input} id="section2" type="password" name="password"/>
          <div className={styles.buttonWrapper} id="section3">
            <button className={styles.button} type="submit">SUBMIT</button>
          </div>
        </form>
        <Toaster toastOptions={{className: 'toast',}} position="bottom-center" richColors closeButton theme="dark" />
      </div>
    )}
  </>
);
};

export default Work;