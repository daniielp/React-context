import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
    return (

        <div className="Navbar">

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/nyheder" >Nyheder</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/opretnyhed" >Opret Nyhed</NavLink>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;