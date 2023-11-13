import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart, children }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='bg-gray-500 h-[600px] py-8 px-4 rounded-lg'>
            <div className='text-white space-y-4 text-lg font-semibold'>
                <h4>Order Summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Shipping: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
            </div>
            <div className=' flex justify-center mt-14 text-lg'>
                <button onClick={handleClearCart} className='bg-red-600 w-full py-3 px-3 text-white'>
                    <span className=' font-semibold'>Clear Cart </span>
                    <FontAwesomeIcon className='ml-2' icon={faTrashAlt} />
                </button>
            </div>
            {children}
        </div>
    );
};

export default Cart;