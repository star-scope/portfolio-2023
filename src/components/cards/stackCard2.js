import React from "react"
import "./card.css"

const StackCard2 = props => (
    <section id={props.id}>
        <div className="StackCard">
          <img className="BG" src={props.image}/>
          <div className="GroupContainer">
            <div className="Group">
              <img className="StackImg" src={props.image1}/>
              <img className="StackImg" src={props.image2}/>
            </div>
            <div className="Group">
              <img className="StackImg" src={props.image3}/>
              <img className="StackImg" src={props.image4}/>
            </div>
            <div className="Group">
              <img className="StackImg" src={props.image5}/>
              <img className="StackImg" src={props.image6}/>
            </div>
          </div>
        </div>
        <p class="s1">{props.title}</p>
    </section>
)

export default StackCard2