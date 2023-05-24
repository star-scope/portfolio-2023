import React from "react"
import "./card.css"

const StackCard = props => (
    <section id={props.id}>
        <div className="StackCard">
          <img className="BG" src={props.image}/>
          <div className="GroupContainer">
            <div className="Group">
              <img className="StackImg" src={props.image1}/>
              <img className="StackImg" src={props.image2}/>
              <img className="StackImg" src={props.image3}/>
              <img className="StackImg" src={props.image4}/>
            </div>
            <div className="Group">
              <img className="StackImg" src={props.image5}/>
              <img className="StackImg" src={props.image6}/>
              <img className="StackImg" src={props.image7}/>
              <img className="StackImg" src={props.image8}/>
            </div>
            <div className="Group">
              <img className="StackImg" src={props.image9}/>
              <img className="StackImg" src={props.image10}/>
              <img className="StackImg" src={props.image11}/>
            </div>
          </div>
        </div>
        <p class="s1">{props.title}</p>
    </section>
)

export default StackCard