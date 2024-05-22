import React from 'react'
import {CiShoppingCart} from "react-icons/ci";

const Header = () => {
    return(
      <header className="header">
          <span className="header__item">Test List</span>  
          <span className="header__icon"><CiShoppingCart /></span>
      </header>
    )
}

export default Header

// вставить иконку с https://react-icons.github.io/react-icons/search/#q=location
// import { CiShoppingCart } from "react-icons/ci";
// <CiShoppingCart />