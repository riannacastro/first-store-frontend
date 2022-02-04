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
                to="/men"
                id="home-link"
                >Men</NavLink>
                <NavLink
                to="/women"
                id="home-link"
                >Women</NavLink>
                <NavLink
                to="/kids"
                id="home-link"
                >Kids</NavLink>
                    <div className="logo">
                            <h1>THE MEMBER SHOP</h1>
                    </div>
                   <div className="menu-session">
                   <NavLink
                to="/signin"
                id="home-link"
                >Sign In</NavLink>
                <NavLink
                to="/favorites"
                id="home-link"
                >Favorites</NavLink>
                   <NavLink
                to="/cart"
                id="home-link"
                >Cart</NavLink>
                   </div>
            </div>
        </div>
    )
}
