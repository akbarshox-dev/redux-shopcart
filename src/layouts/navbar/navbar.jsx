import React from "react";

import './navbar.scss';
import { Link } from "react-router-dom";

export default function Navbar () {
    return <>
        <header className="header">
            <nav className="header__navbar container">
                <Link to="/" className="header__navbar-link">Redux Store</Link>
                <ul className="header__navbar-list">
                    <li><Link to="/" className="navbar__list-item">Products</Link></li>
                    <li><Link to="/carts" className="navbar__list-item">ShopCart</Link></li>
                </ul>
            </nav>
        </header>
    </>
}