import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Review.css';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart,setCart]=useState([]);
    const removeProduct=(productKey)=>{
          // console.log('remove clicked',productKey);
           const newCart=cart.filter(pd=>pd.key !==productKey);
           setCart(newCart);
           removeFromDatabaseCart(productKey);
    }
    const [orderPlace,setPlaceOrder]=useState(false);
    const handlePlaceOrder=()=>{
        setCart([]);
        setPlaceOrder(true);
        processOrder();
        console.log('order place');
    }
    useEffect(()=>{
        const savedCart=getDatabaseCart();
        //console.log(savedCart);
        const productKeys= Object.keys(savedCart)
       // console.log(productKeys);
        const cartProduct=productKeys.map(key=>{
            const product=fakeData.find(pd=>pd.key===key)
            product.quantity=savedCart[key]; //create a quantity property and added the value
            return product;
          
        })
        setCart(cartProduct);
       // console.log(cartProduct);
    },[])
    let thankYou;
    if(orderPlace){
        thankYou=<img src={happyImage} alt=""/>
    }

        return (
        <div className="cart-container">
           <div className="cart-item">
          <ul>
          {
                 cart.map(pd=><ReviewItems 
                    removeProduct={removeProduct}
                    key={pd.key}   
                    product={pd}>
                    </ReviewItems>)
             }
             {
                 thankYou
             }
          </ul>

           </div>
           <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>

              
            </div>
            

        </div>
    );
};

export default Review;