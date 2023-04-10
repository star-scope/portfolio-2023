import React from "react"
import "./card.css"

const WorkCard = props => (
    <section id={props.id}>
        <div className="workCard">
            <img src={props.image}/>
            <div className="workBG"></div>
            <div className="workTitles">
              <p className="p1">{props.title}</p>
              <p className="p2">{props.subtitle}</p>
              <p className="p3">{props.subtitle2}</p>
            </div>
        </div>
    </section>
)

export default WorkCard