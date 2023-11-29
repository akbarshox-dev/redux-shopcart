import './product-cart.scss';
import { v4 as uuidv4 } from 'uuid';


export default function ProductCart({ id,image, name, price, addProduct, removeProduct }) {
    return <div className='product'>
        <img src={image} alt={name} className="product__image" />
        <div className="product__text">
            <h2 className='product__text-name'>{name} </h2>
            <p className='product__text-price'>{price}</p>
        </div>
        <button id-data={id} className='product__button' onClick={() => addProduct({ id: uuidv4(), image, name, price })}>Add</button>

    </div>
}

