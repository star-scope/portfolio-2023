import React, { FC } from "react";
import Link from "next/link";
import { Toaster, toast } from 'sonner';

import styles from "./header.module.css";

interface BackButtonHeaderProps {
  title: string;
}

const BackButtonHeader: FC<BackButtonHeaderProps> = ({ title }) => {
  return (
    <div id={styles.headerContainer}>
      <header className={styles.header}>
        <Link id={styles.backButton} href="/">
            <img src="/images/arrow-left.svg"/>
        </Link>
        <div id={styles.titleContainer}>
          <h1>{title}</h1>
        </div>
        <section id={styles.flagContainer}>
          <button className={styles.button} onClick={() => {
              toast.dismiss(); 
              toast.message('Flag Of The United States of America', {description: 'I was born in Atlanta, GA. I love my country and am proud to be an American citizen.',});
                  }}>
              <img className={styles.flags} src="/images/Flag-US.png" />
          </button>
          <button className={styles.button} onClick={() => {
              toast.dismiss(); 
              toast.message('Flag Of Planet Earth', {description: 'I love to travel, and have been to 24 U.S. states, and 8 countries! My favorite adventure was in Alaska.',});
                  }}>
              <img className={styles.flags} src="/images/Flag-Earth.png" />
          </button>
        </section>
        <Toaster toastOptions={{ style: { background: '#101010', borderRadius: '10px' },}} visibleToasts={1} position="top-right" duration={50000} closeButton theme="dark" />
      </header>
    </div>
  );
};

export default BackButtonHeader;
