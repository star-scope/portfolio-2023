import React from "react";
import "./card.css";

const StackCard = ({ id, image, title, links, images, itemsPerRow }) => {
  // Split links and images into groups
  const groupsLinks = [];
  const groupsImages = [];

  for (let i = 0; i < links.length; i += itemsPerRow) {
    groupsLinks.push(links.slice(i, i + itemsPerRow));
    groupsImages.push(images.slice(i, i + itemsPerRow));
  }

  // Function to render each group
  const renderGroup = (groupLinks, groupImages, index) => {
    return (
      <div className="Group" key={index}>
        {groupLinks.map((link, i) => (
          <a
            key={i}
            className="StackLink"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="StackImg" src={groupImages[i]} alt="" />
          </a>
        ))}
      </div>
    );
  };

  return (
    <section id={id}>
      <div className="StackCard">
        <img className="BG" src={image} alt={title} />
        <div className="GroupContainer">
          {groupsLinks.map((group, index) => renderGroup(group, groupsImages[index], index))}
        </div>
      </div>
      <p className="s1">{title}</p>
    </section>
  );
};

export default StackCard;