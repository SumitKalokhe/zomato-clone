import React from "react";
import Navbar from "../navbar/Navbar";
import './menu.css'
import { restaurants } from "../../data/restaurants";
import MenuItem from "./menu-items/menuItem";

const Menu = () => {

    return (
        <div>
            <div className="menu-navbar">
                <div className="max-width">
                    <Navbar />
                </div>
            </div>
            <div className="menu-page">
                <div className="max-width">
                    <MenuItem />
                </div>
            </div>

        </div>
    )
}

export default Menu;