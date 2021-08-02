import React from 'react';
import './cart.css'

const Cart = (prop) => {
    const cart = prop.orderedProduct;
    console.log(prop.orderedProduct)
    let total=0; 
    for (let i = 0; i < cart.length; i++) {
        const singlePrice = cart[i].price;
        total = total +singlePrice;
        
    }
    let shipping = 0;
    if(total>0 && total<20){
        shipping= 12;
    }else if(total<50 && total >20){
        shipping=8
    }else if (total>100){
        shipping=0
    }
    const totalPrice=(total+shipping).toFixed(2)

    return (
        <div>
            <h2>Order Summery</h2>
            <h3>total order : {prop.cartCount}</h3>
            <p>Product Price: {total.toFixed(2)}</p>
            <p>Shipping : {shipping} </p>
            <h5>Total Price {totalPrice}</h5>


        </div>
        
        
            
       
    );
};

export default Cart;