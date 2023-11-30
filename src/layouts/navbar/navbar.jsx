import React from "react";

import './navbar.scss';
import { Link } from "react-router-dom";
import {useSelector } from "react-redux";

export default function Navbar () {

    const products = useSelector(state => state.products);

    const counter = products.length;

    return <>
        <header className="header">
            <nav className="header__navbar container">
                <Link to="/" className="header__navbar-link">Redux Store</Link>
                <ul className="header__navbar-list">
                    <li><Link to="/" className="navbar__list-item">Products</Link></li>
                    <li><Link to="/carts" className="navbar__list-item">ShopCart</Link> <span className="shop-conter">{counter}</span> </li>
                </ul>
            </nav>
        </header>
    </>
}