import React from 'react'
import "./RadioButton.css";

function RadioButton() {
    return (
      <div className="radio">
        <input className='radioButton' type="radio" value="residential" id="residential" name="searchType" /> 
        <label htmlFor="residential">Residential Search</label>
        <input className='radioButton' type="radio" value="commercial" id="commercial" name="searchType" />
        <label htmlFor="commercial">Commercial Search</label>
      </div>
    );
}

export default RadioButton;

