import React from "react";
import "./card.css";

const CredCard = (props) => (
  <section id={props.id}>
    <div className="credCard" style={{ backgroundImage: props.gradient }}>
      <div className="cardBG">
        <p className="s2">{props.title}</p>
        <p className="s3"
        style={{
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundImage: props.subtitleGradient,
        }}>{props.subtitle}</p>
        <img className="credImg" src={props.image}/>
        <p className="credBody" dangerouslySetInnerHTML={{ __html: props.body }}></p>
      </div>
    </div>
  </section>
);

export default CredCard;
