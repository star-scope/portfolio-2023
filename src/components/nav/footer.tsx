import * as React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => (
    <footer className={styles.footer}>
        <div id={styles.line}></div>
        <div id={styles.gradient}></div>
        <div className={styles.scroll}>
            <p className={`${styles.scrollContent} ${styles.footerCopy}`}>UX DESIGN - UI DESIGN - GRAPHIC DESIGN - MOTION GRAPHICS - 3D - FRONT END -</p>
            <p className={`${styles.scrollContent} ${styles.footerCopy}`}>UX DESIGN - UI DESIGN - GRAPHIC DESIGN - MOTION GRAPHICS - 3D - FRONT END -</p>
            <p className={`${styles.scrollContent} ${styles.footerCopy}`}>UX DESIGN - UI DESIGN - GRAPHIC DESIGN - MOTION GRAPHICS - 3D - FRONT END -</p>
            <p className={`${styles.scrollContent} ${styles.footerCopy}`}>UX DESIGN - UI DESIGN - GRAPHIC DESIGN - MOTION GRAPHICS - 3D - FRONT END -</p>
        </div>
    </footer>
)

export default Footer;