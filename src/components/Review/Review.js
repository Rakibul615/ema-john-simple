import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart,setCart]=useState([]);
    const removeProduct=(productKey)=>{
          // console.log('remove clicked',productKey);
           const newCart=cart.filter(pd=>pd.key !==productKey);
           setCart(newCart);
           removeFromDatabaseCart(productKey);
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

        return (
        <div>
           
             {
                 cart.map(pd=><ReviewItems 
                    removeProduct={removeProduct}
                    key={pd.key}   
                    product={pd}>
                    </ReviewItems>)
             }

        </div>
    );
};

export default Review;