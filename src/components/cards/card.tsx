import React from 'react';
import styles from './card.module.css';

interface HomeCardProps {
  id: string;
  image: string;
  title: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ id, image, title }) => (
  <section id={id}>
    <div className={styles.Card}>
      <img src={image}/>
    </div>
    <p className="s1">{title}</p>
  </section>
);

export default HomeCard;