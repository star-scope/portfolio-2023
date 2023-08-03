import React from "react";
import styles from './card.module.css';

interface WorkCardProps {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  subtitle2?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ id, image, title, subtitle, subtitle2 }) => (
  <section id={id}>
    <div className={styles.workCard}>
      <img src={image} alt={title} />
      <div className={styles.workBG}></div>
      <div className={styles.workTitles}>
        <p className={styles.p1}>{title}</p>
        <p className={styles.p2}>{subtitle}</p>
        <p className={styles.p3}>{subtitle2}</p>
      </div>
    </div>
  </section>
)

export default WorkCard;