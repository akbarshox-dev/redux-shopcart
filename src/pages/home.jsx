import React from "react"
import ProductCart from "../components/product-cart/product-cart"

export default function Home() {
    const products = [
        {
            id: 1,
            name: "iPhone X",
            image: "/iphone.jpg",
            price: "170$"
        },
        {
            id: 2,
            name: "iPhone XS",
            image: "/iphone.jpg",
            price: "220$"
        },
        {
            id: 3,
            name: "iPhone XS Max",
            image: "/iphone.jpg",
            price: "250$"
        },
    ]
    return <>
        <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "50px"}} className="products-box  container">
            { products.map((item, index) => (
                <ProductCart key={index} id={item.id} name={item.name} price={item.price} image={item.image} />
            ))}
        </div >
    </>
}