import React from 'react'
import "./FieldSet.css";

type FieldSetProps = {
    title: string,
    children: React.ReactNode;
}

function FieldSet({ title, children}: FieldSetProps) { 
    return (
        <div className='fieldSet'>
            <h2>{title}</h2> 
            {children}      
        </div>
      );
}

export default FieldSet;