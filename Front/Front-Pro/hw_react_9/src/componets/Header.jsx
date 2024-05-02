import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
    return(
        <div className="header">
        <span className="header__item">Test List</span>  
        <span className="header__icon"><CiShoppingCart /></span>
      
       
      </div>
    )
}

export default Header