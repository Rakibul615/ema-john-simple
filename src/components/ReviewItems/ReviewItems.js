import React, { useEffect, useState } from 'react';
import './ReviewItems.css';
const ReviewItems = (props) => {
    console.log(props);
    const { name, price, quantity, key } = props.product;
    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
        setCartItem(cartItem);

    }, [])
    return (
        <div className="product">
            <div>
                <h3>{name}</h3>
                <h3>Price: {price}</h3>
                <h3>Quantity: {quantity}</h3>
                <br />
                <button onClick={() => props.removeProduct(key)} className="main-button">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItems;