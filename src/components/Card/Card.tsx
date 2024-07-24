import React from 'react'
import "./Card.css";

function Card(props: {title: String}) {
    return (
      <div className="card"> {[[props.title]]}
      </div>
    );
}

export default Card;
