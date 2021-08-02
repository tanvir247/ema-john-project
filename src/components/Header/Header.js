import React from 'react';
import logo from '../../images/logo.png'
import './header.css'
const Header = () => {
    return (
        <div className="header">
           <h1> <img src={logo} alt="" /></h1>
           <div className="nav">
               <ul>
                   <li><a href="">Shop</a></li>
                   <li><a href="">Review</a></li>
                   <li><a href="">news</a></li>
               </ul>
           </div>
        </div>
    );
};

export default Header;