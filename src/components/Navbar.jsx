import React from 'react';
import '../index.scss'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="page__menu menu">
            <ul className="menu__list r-list">
                <li className="menu__group">
                    <Link className="menu__link r-link text-underlined" to="/">Home</Link>
                </li>
                <li className="menu__group">
                    <Link className="menu__link r-link text-underlined" to="/standings">Current Standings</Link>
                </li>
                <li className="menu__group">
                    <Link className="menu__link r-link text-underlined" to="/drivers">Drivers</Link>
                </li>
                <li className="menu__group">
                    <Link className="menu__link r-link text-underlined" to="/race-results">Race Results</Link>
                </li>
                <li className="menu__group">
                    <Link className="menu__link r-link text-underlined" to="/schedule">Schedule</Link>
                </li>
                <li className="menu__group">
                    <Link className="menu__link r-link text-underlined" to="/constructors">Constructors</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

