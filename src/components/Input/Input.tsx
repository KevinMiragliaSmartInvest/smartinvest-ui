import React from 'react'
import "./Input.css";

type InputProps = {
  label: string,
  value?: string,
  disabled?: boolean,
  onChange?: React.ChangeEventHandler
}


function Input({ label, value, onChange, disabled }: InputProps) { 
  
    return (
        <div>
           <label>{label}</label>
           <input type="text" defaultValue={value} onChange={onChange} disabled={disabled}></input>
        </div>
      );
}

export default Input;
