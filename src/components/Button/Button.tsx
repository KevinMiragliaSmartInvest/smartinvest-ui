import React from 'react'
import "./Button.css";

function Button(props: { label: string}) {
    return (
      <div className="button"> {props.label} </div>
    );
}

export default Button;
