import React from "react";
import styles from "./card.module.css";

interface StackCardProps {
  id: string;
  image: string;
  title: string;
  links: string[];
  images: string[];
  itemsPerRow: number;
}

const StackCard: React.FC<StackCardProps> = ({ id, image, title, links, images, itemsPerRow }) => {
  // Split links and images into groups
  const groupsLinks: string[][] = [];
  const groupsImages: string[][] = [];

  for (let i = 0; i < links.length; i += itemsPerRow) {
    groupsLinks.push(links.slice(i, i + itemsPerRow));
    groupsImages.push(images.slice(i, i + itemsPerRow));
  }

  // Function to render each group
  const renderGroup = (groupLinks: string[], groupImages: string[], index: number) => {
    return (
      <div className={styles.Group} key={index}>
        {groupLinks.map((link, i) => (
          <a
            key={i}
            className={styles.StackLink}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.StackImg} src={groupImages[i]} alt="" />
          </a>
        ))}
      </div>
    );
  };

  return (
    <section id={id}>
      <div className={styles.StackCard}>
        <img className={styles.BG} src={image} alt={title} />
        <div className={styles.GroupContainer}>
          {groupsLinks.map((group, index) => renderGroup(group, groupsImages[index], index))}
        </div>
      </div>
      <p className="s1">{title}</p>
    </section>
  );
};

export default StackCard;