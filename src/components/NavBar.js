import React from 'react';
import { NavLink } from "react-router-dom";
//import logo from "../assets/logo.png";


function NavBar() {
    return (
        <header>
            <div className="navbar" >
                {/*<div class="logo">
                    <img src={logo} alt="logo" height="100px" />
                </div>*/}
                <div className="navlinks">
                    {/* <a href="/home">Home</a> */}
                    <NavLink to="/home" style={{ fontWeight: "bold" }}>Home</NavLink>
                    {/* <a href="/about">About us</a> */}
                    <NavLink to='/about' style={{ fontWeight: "bold" }}>About</NavLink>
                    {/* <a href="/category">Category</a> */}
                    <NavLink to='/bookpage' style={{ fontWeight: "bold" }}>Books to Buy/sell</NavLink>
                </div>
            </div>
        </header>
    )
}

export default NavBar;