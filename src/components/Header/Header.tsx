import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";


function Header() { 
    return (
        <div className='header full-page-width'>
            <div>
                <h1>
                    <Link to="/">Smart Invest</Link>
                </h1>
            </div>
            <div className=""></div>            
        </div>
      );
}

export default Header;

