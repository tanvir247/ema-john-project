import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './product.css'

const Product = () => {
    const [cart, setCart] = useState([])
    
    const first10 =fakeData.slice(0,10)
    const [product, seTproduct] = useState(first10)

    const orderSummery = (product) =>{
        const newCart = [...cart, product];
        console.log(newCart);
        return setCart(newCart)
    }

    return (
        <div className="product">
            <div className="shop">
                {
                      product.map(pd => <Shop product={pd} cartClick={orderSummery}></Shop>) 
                }
            
            
        </div>
        <div className="cart">
            <Cart cartCount={cart.length} orderedProduct={cart}></Cart>
            
        </div>
        </div>
    );
};

export default Product;