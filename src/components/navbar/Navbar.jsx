import React, { } from "react";
import "./navbar.css"
import Login from "./login";
import Foodcart from "./Foodcart";

const Navbar = () => {

    const handleClick = () => {
        return null
    }
    return (
        <div className='navbar'>
            <div className='brand'>
                <img className="brand-img" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" />
            </div>
            <div className="searchbar">
                <div className="city-search">
                    <img className="location-img" src="icons\location-icon.png" alt="location-icon" />
                    <input className="search" type="text" placeholder="Nashik" />
                    <img className="down-arrow" onClick={handleClick} src="icons\down-arrow.png" alt="" />
                </div>
                <div className="divider"></div>
                <div className="resto-search">
                    <img className="search-img" src="icons\search-icon.png" alt="search-icon" />
                </div>
                <input className="search" type="text" placeholder="Search restaurant" />
            </div>
            <div className="food-cart">
                <Foodcart/>
            </div>
            <div className="logindiv">
                <Login/>
            </div>
            
        </div>

    )
}

export default Navbar;