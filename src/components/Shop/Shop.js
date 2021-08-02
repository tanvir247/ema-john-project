import React from 'react';
import './shop.css'

const Shop = (prop) => {
    const {img,name,price,stock,seller}=prop.product
    
    return (
        
        <div className="pDetail">
            <div className="images">
                <img src={img} alt="" />
            </div>
            
            <div className="detail">
                <h5>{name}</h5>
                <p><small>SellerBy : {seller}</small></p>    
                <p><small>Stock : {stock}</small></p>
                <p>Price : ${price} </p>
                <button onClick={()=> prop.cartClick(prop.product)}>Add to Cart</button>
                
                
            </div>
            
            

        </div>
            
        
    );
};

export default Shop;