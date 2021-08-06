import React from 'react'
import './reviewItem.css'

const ReviewItem = (props)=>{
    const {name, price, quantity,seller}= props.itemOrder;
    console.log(props.itemOrder.key);
    const key = props.itemOrder.key;
    return (
        <div className="pDetail">
            <div className="detail">
                <h5>{name}</h5>
                <p><small>SellerBy : {seller}</small></p>  
                <p>Total Quantity: {quantity}</p>  
                <p>Price : ${price*quantity} </p>
                <button onClick={()=> props.removeItem(key)}>Remove Item</button>
                
                
            </div>
            
            

        </div>
    );
}

export default ReviewItem;