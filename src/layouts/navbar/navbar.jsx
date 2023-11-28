import React from "react";

import './navbar.scss';

export default function Navbar () {
    return <>
        <header className="header">
            <nav className="header__navbar container">
                <a href="/" className="header__navbar-link">Redux Store</a>
                <ul className="header__navbar-list">
                    <li><a href="#" className="navbar__list-item">Products</a></li>
                    <li><a href="#" className="navbar__list-item">ShopCart</a></li>
                </ul>
            </nav>
        </header>
    </>
}