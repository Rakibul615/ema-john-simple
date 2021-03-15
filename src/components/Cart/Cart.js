import React from 'react';
const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    for(let i=0; i<cart.length; i++){
        const product=cart[i];
        total=total+product.price*product.quantity;
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Ordered: {cart.length} </p>
            <p>Total Price: {total}</p>
            {
                props.children
            }
          
        </div>
    );
};

export default Cart;