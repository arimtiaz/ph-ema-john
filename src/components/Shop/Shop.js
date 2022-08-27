import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);
    

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h1>The is for products: {products.length}</h1>
            </div>
            <div className='carts-container'>
                <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;