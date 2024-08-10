import React from 'react'
import "./Property.css";

type PropertyProps = {
  title: string,
  price?: string;
}

function Property({ title, price}: PropertyProps) {

    let priceElement;

    if(price){
      priceElement = <div><span>Price:</span><span>{[[price]]}</span></div>;
    }

    return (
      <div className="property"> 
        <div>
          <h2>{[[title]]}</h2>
        </div>
        {priceElement}
       
      </div>
    );
}

export default Property;


function ItemList({ items }) {
  return (
    <div>
      <ul>
        
      </ul>
    </div>
  );
}
