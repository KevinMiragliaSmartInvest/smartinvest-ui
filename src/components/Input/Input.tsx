import React from 'react'
import "./Input.css";


function Input(props: { label: string}) { 
    return (
        <div>
           <label>{props.label}</label>
           <input></input>
        </div>
      );
}

export default Input;

