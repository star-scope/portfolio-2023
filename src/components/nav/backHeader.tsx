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
            <img src="/images/arrow-left.svg" alt=""/>
            <span id={styles.backButtonText}>BACK</span>
        </Link>
        <div id={styles.titleContainer}>
          <h1>{title}</h1>
        </div>
        <section id={styles.flagContainer}>
          <button className={styles.button} onClick={() => {
              toast.dismiss(); 
              toast.message('Flag Of The United States of America', {description: 'I am from Atlanta, GA, and currently live and work out of Billings, MT.',});
                  }}>
              <img className={styles.flags} src="/images/Flag-US.png" alt="Flag of the United States" />
          </button>
          <button className={styles.button} onClick={() => {
              toast.dismiss(); 
              toast.message('Flag Of Planet Earth', {description: 'I love to travel, and have been to 34 U.S. states, and 9 countries!',});
                  }}>
              <img className={styles.flags} src="/images/Flag-Earth.png" alt="Flag of Planet Earth" />
          </button>
        </section>
        <Toaster toastOptions={{ style: { background: '#101010', borderRadius: '10px' },}} visibleToasts={1} position="top-right" duration={50000} closeButton theme="dark" />
      </header>
    </div>
  );
};

export default BackButtonHeader;
