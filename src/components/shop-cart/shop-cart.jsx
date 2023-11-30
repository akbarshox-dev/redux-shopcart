import React from "react";
import './shop-cart.scss'

export default function ShopCart ({ name, price, id, deleteProduct }) {
    return <div className="shop-cart">
        <span className="shop-cart-name">{ name }</span>
        <span className="shop-cart-price">{ price }</span>

        <button onClick={() => deleteProduct(id)}>Delete</button>
    </div>
}