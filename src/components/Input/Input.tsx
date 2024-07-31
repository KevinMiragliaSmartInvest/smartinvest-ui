import React from 'react'
import "./Input.css";

type InputProps = {
  label: string,
  value?: string
  onChange?: React.ChangeEventHandler
}


function Input({ label, value, onChange }: InputProps) { 
    return (
        <div>
           <label>{label}</label>
           <input type="text" defaultValue={value} onChange={onChange}></input>
        </div>
      );
}

export default Input;
