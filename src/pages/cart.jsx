import { useDispatch, useSelector } from "react-redux"
import ShopCart from "../components/shop-cart/shop-cart";

export default function Carts() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products);

    function deleteProduct(product) {
        dispatch({ type: "REMOVE_PRODUCT", payload: product });
    }



    return <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "10px" }} className="products-box  container">

        <div className="shop-cart">
            <span className="shop-cart-name">Product name</span>
            <span className="shop-cart-price">Product Price</span>

            <span> Controllers </span>
        </div>
        {products ? (
            products.map((item, index) => (
                <ShopCart
                    id={item.id}
                    key={index}
                    price={item.price}
                    name={item.name}
                    deleteProduct={deleteProduct}
                />
            ))
        ) : (
            <h1>Hello</h1>
        )}

    </div >
}