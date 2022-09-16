import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';


const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div> 
            <h1>Orders {products.length}</h1>
            <p>Cart: {cart.length}</p>
        </div>
    );
};

export default Orders;