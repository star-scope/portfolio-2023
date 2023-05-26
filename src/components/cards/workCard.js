import React from "react"
import "./card.css"

const WorkCard = ({ id, image, title, subtitle, subtitle2 }) => (
  <section id={id}>
    <div className="workCard">
      <img src={image} alt={title} />
      <div className="workBG"></div>
      <div className="workTitles">
        <p className="p1">{title}</p>
        <p className="p2">{subtitle}</p>
        <p className="p3">{subtitle2}</p>
      </div>
    </div>
  </section>
)

export default WorkCard
