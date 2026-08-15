import React from "react";
import Link from 'next/link';
import { Toaster, toast } from 'sonner';
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <div id={styles.headerContainer}>
      <header className={`${styles.header} ${styles.homeHeader}`}>
        <Link id={styles.PPContainer} href="/about/">
          <img id={styles.profilePic} src="/images/PP.png" alt="About Caleb Faulkner" />
        </Link>
        <section id={styles.title}>
          <h1>MY NAME IS CALEB FAULKNER</h1>
          <p className="bodyCopy">SOFTWARE DESIGNER - <a id={styles.role} href="https://tactacam.com" target="_blank">TACTACAM</a></p>
          <p className="bodyCopy">
            <Link id={styles.aboutLink} href="/about/">
              ABOUT ME
              <svg className={styles.aboutLinkUnderline} width="100%" height="4" viewBox="0 0 64 4" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 2.5C15 0.5 49 0.5 63 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </p>
        </section>
        <section id={styles.flagContainer}>
          <button className={styles.button} onClick={() => {
            toast.dismiss();
            toast.message('Flag Of The United States of America', { description: 'I am from Atlanta, GA, and currently live and work out of Billings, MT.' });
          }}>
            <img className={styles.flags} src="/images/Flag-US.png" alt="Flag of the United States" />
          </button>
          <button className={styles.button} onClick={() => {
            toast.dismiss();
            toast.message('Flag Of Planet Earth', { description: 'I love to travel, and have been to 34 U.S. states, and 9 countries!' });
          }}>
            <img className={styles.flags} src="/images/Flag-Earth.png" alt="Flag of Planet Earth" />
          </button>
        </section>
        <Toaster toastOptions={{ style: { background: '#101010', borderRadius: '10px' } }} visibleToasts={1} position="top-right" duration={50000} closeButton theme="dark" />
      </header>
    </div>
  );
};

export default Header;
