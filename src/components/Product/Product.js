import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props);
    return (
        <div className="product">
            <div>
               <img src={props.product.img} alt=""/>
            </div>
            <div>
               <h4 className="product-name">{props.product.name}</h4>
               <br/>
               <p><small>by:{props.product.seller}</small></p>
               <br/>
               <p>price: $ {props.product.price}</p>
               <br/>
               <p><small>only {props.product.stock} left in stock - order soon</small></p>

            </div>
        </div>
    );
};

export default Product;