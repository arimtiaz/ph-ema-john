import React from 'react';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import useProducts from '../../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    
    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="review-items-container">
            {
                cart.map(product => <ReviewItem key={product.id} product={product}
                handleRemoveProduct = {handleRemoveProduct}
                ></ReviewItem>)
            }
            </div> 
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;