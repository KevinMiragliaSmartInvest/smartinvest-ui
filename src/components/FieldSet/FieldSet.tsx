import React from 'react'
import "./FieldSet.css";

function FieldSet(props: { title: string, children: string}) { 
    return (
        <div className='fieldSet'>
            <h2>{props.title}</h2> 
            {props.children}      
        </div>
      );
}

export default FieldSet;