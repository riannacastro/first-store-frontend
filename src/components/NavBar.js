import { NavLink } from "react-router-dom";

import React from 'react'

export default function NavBar() {
    return (
        <div className="nav">
            <div id='content'>
                <NavLink
                to="/"
                id="home-link"
                >Home</NavLink>
                <NavLink
                to="/items"
                id="home-link"
                >All Items</NavLink>
                <NavLink
                to="/cart"
                id="home-link"
                >Cart</NavLink>
            </div>
        </div>
    )
}
