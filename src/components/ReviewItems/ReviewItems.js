import React, { useEffect, useState } from 'react';
import './ReviewItems.css';
const ReviewItems = (props) => {
    console.log(props);
    const { name, price, quantity, key } = props.product;
    const [cartItem, setCertItem] = useState([]);
    useEffect(() => {

    }, [])
    return (
        <div className="cart-container">
            <div className="cart-items">
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