import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='py-44 container mx-auto grid grid-cols-1 lg:grid-cols-12'>
            <div className='grid grid-cols-1 gap-5 h-36 lg:col-span-8 w-full'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='lg:col-span-4 md:w-full w-[600px] mx-auto px-3 lg:mt-0 mt-44'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='' to="/checkout">
                        <div className='flex justify-center mt-5 text-lg'>
                        <button className=' w-full py-3 px-3 text-white bg-orange-500'>Proceed Checkout</button>
                        </div>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;