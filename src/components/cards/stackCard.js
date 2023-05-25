import React from "react"
import "./card.css"

const StackCard = props => (
    <section id={props.id}>
        <div className="StackCard">
          <img className="BG" src={props.image}/>
          <div className="GroupContainer">
            <div className="Group">
              <a className="StackLink" href={props.link1} target="blank"><img className="StackImg" src={props.image1}/></a>
              <a className="StackLink" href={props.link2} target="blank"><img className="StackImg" src={props.image2}/></a>
              <a className="StackLink" href={props.link3} target="blank"><img className="StackImg" src={props.image3}/></a>
              <a className="StackLink" href={props.link4} target="blank"><img className="StackImg" src={props.image4}/></a>
            </div>
            <div className="Group">
              <a className="StackLink" href={props.link5} target="blank"><img className="StackImg" src={props.image5}/></a>
              <a className="StackLink" href={props.link6} target="blank"><img className="StackImg" src={props.image6}/></a>
              <a className="StackLink" href={props.link7} target="blank"><img className="StackImg" src={props.image7}/></a>
              <a className="StackLink" href={props.link8} target="blank"><img className="StackImg" src={props.image8}/></a>
            </div>
            <div className="Group">
              <a className="StackLink" href={props.link9} target="blank"><img className="StackImg" src={props.image9}/></a>
              <a className="StackLink" href={props.link10} target="blank"><img className="StackImg" src={props.image10}/></a>
              <a className="StackLink" href={props.link11} target="blank"><img className="StackImg" src={props.image11}/></a>
            </div>
          </div>
        </div>
        <p class="s1">{props.title}</p>
    </section>
)

export default StackCard