import React from "react"
import "./card.css"

const StackCard2 = props => (
    <section id={props.id}>
        <div className="StackCard">
          <img className="BG" src={props.image}/>
          <div className="GroupContainer">
            <div className="Group">
              <a className="StackLink" href={props.link1} target="blank"><img className="StackImg" src={props.image1}/></a>
              <a className="StackLink" href={props.link2} target="blank"><img className="StackImg" src={props.image2}/></a>
            </div>
            <div className="Group">
              <a className="StackLink" href={props.link3} target="blank"><img className="StackImg" src={props.image3}/></a>
              <a className="StackLink" href={props.link4} target="blank"><img className="StackImg" src={props.image4}/></a>
            </div>
            <div className="Group">
              <a className="StackLink" href={props.link5} target="blank"><img className="StackImg" src={props.image5}/></a>
              <a className="StackLink" href={props.link6} target="blank"><img className="StackImg" src={props.image6}/></a>
            </div>
          </div>
        </div>
        <p class="s1">{props.title}</p>
    </section>
)

export default StackCard2