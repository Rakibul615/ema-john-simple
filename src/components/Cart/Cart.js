import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    for(let i=0; i<cart.length; i++){
        const product=cart[i];
        total=total+product.price;
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Ordered: {cart.length} </p>
            <p>Total Price: {total}</p>
           <Link to="/review">
           <button className="main-button">Review Order</button>
           </Link>
        </div>
    );
};

export default Cart;