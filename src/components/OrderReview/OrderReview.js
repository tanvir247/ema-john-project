import React, { useEffect, useState } from 'react';
import {getDatabaseCart,removeFromDatabaseCart, processOrder} from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart'
import ReviewItem from '../reviewItem/reviewItem'
import './orderReview.css'
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [cart, setCart]= useState([])
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts =  productKeys.map( existingKey => {
            const product = fakeData.find( pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        });
        setCart(cartProducts);
    }, [])
    const history = useHistory()

    const handleProceedCheckout = () => {
        history.push('/shipment');
    }

console.log(cart);

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    return (
        <div className="product">
            <div className="shop">
                {
                    cart.map(pd => <ReviewItem itemOrder={pd} key={pd.key} removeItem={removeProduct}></ReviewItem>)

                }
            
            </div>
            <div className="cart">
            <Cart orderedProduct={cart}> 
            <button onClick={handleProceedCheckout} className="main-button">Proceed Checkout</button>
            </Cart>
            </div>
        </div>
    );
};

export default OrderReview;