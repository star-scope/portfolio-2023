import React from 'react';
import styles from './card.module.css';

interface CredCardProps {
  id: string;
  gradient: string;
  subtitleGradient: string;
  title: string;
  subtitle: string;
  image: string;
  body: string;
}

const CredCard: React.FC<CredCardProps> = (props) => (
  <section id={props.id}>
    <div className={styles.credCard} style={{ backgroundImage: props.gradient }}>
      <div className={styles.cardBG}>
        <p className="s2">{props.title}</p>
        <p 
          className="s3"
          style={{
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            backgroundImage: props.subtitleGradient,
          }}
        >
          {props.subtitle}
        </p>
        <img className={styles.credImg} src={props.image}/>
        <p className={styles.credBody} dangerouslySetInnerHTML={{ __html: props.body }}></p>
      </div>
    </div>
  </section>
);

export default CredCard;
