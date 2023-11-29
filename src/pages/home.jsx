import React from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductCart from "../components/product-cart/product-cart"
import { v4 as uuidv4 } from 'uuid';


export default function Home() {

    const dispatch = useDispatch()


    function addProduct (product) {
        dispatch({ type: "ADD_PRODUCT", payload: product })
    }

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
    ];

    return <>
        <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "50px"}} className="products-box  container">
            { products.map((item, index) => (
                <ProductCart key={uuidv4()} addProduct={addProduct} id={item.id} name={item.name} price={item.price} image={item.image} />
            ))}
        </div >
    </>
}