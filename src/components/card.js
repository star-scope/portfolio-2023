import React from "react"
import "./card.css"

const HomeCard = props => (
    <section id={props.id}>
        <div className="Card">
            <img src={props.image}></img>
        </div>
        <p class="s1">{props.title}</p>
    </section>
)

export default HomeCard