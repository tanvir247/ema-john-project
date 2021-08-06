import React, { useState ,useEffect} from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './product.css';
import { addToDatabaseCart , getDatabaseCart} from "../../utilities/databaseManager";
import { Link } from 'react-router-dom';

const Product = () => {
    const [cart, setCart] = useState([])
    
    const first10 =fakeData.slice(0,10)
    const [product, seTproduct] = useState(first10)

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map( existingKey => {
            const product = fakeData.find( pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        } )
        setCart(previousCart);
    }, [])

    const orderSummery = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="product">
            <div className="shop">
                {
                      product.map(pd => <Shop product={pd} cartClick={orderSummery}></Shop>) 
                }
            
            
        </div>
        <div className="cart">
            <Cart cartCount={cart.length} orderedProduct={cart}>
                <Link to="/review"><button className="main-button">Review Order</button></Link>
                    
            </Cart>
            
        </div>
        </div>
    );
};

export default Product;