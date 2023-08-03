import * as React from "react"
import Link from "next/link";

//Styles
import styles from "./404.module.css";

//Components

const NotFoundPage = () => (
  <>
    <div className={styles.notFoundContainer}>
      <img id="logo" src="/images/Logo.png" alt="Logo" />
      <h1>404: NOT FOUND</h1>
      <p className={styles.notFoundCopy}>
        You probably did this on purpose. Typing starscope.design is not that complicated. I'm gonna assume you know how to get back, but if not,{" "}<i>*hint* try the back button in your browser</i> 😉
      </p>
      <p className={styles.notFoundCopy}>
        Still struggling? There's a button that might work. I'm sure I left it around here somewhere, just keep moving your mouse around. Maybe you can find it.
      </p>
      <Link href="/"><button className={styles.backButton}>YOU FOUND ME!</button></Link>
    </div>
  </>
);

export default NotFoundPage;