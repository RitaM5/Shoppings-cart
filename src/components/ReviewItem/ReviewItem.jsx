import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='px-4 flex justify-between gap-3  w-[600px] items-center bg-blue-200 mx-auto py-4 rounded-md'>
            <div className=' inline-flex gap-8 items-center'>
                <img src={img} className=' w-[90px] h-[90px] rounded-full' alt="" />
                <div className=''>
                    <p className=' font-semibold'>{name}</p>
                    <p>Price: <span className=''>${price}</span></p>
                    <p>Order Quantity: <span className=''>{quantity}</span></p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemoveFromCart(id)} className='text-[#EB5757] '>
                    <FontAwesomeIcon className='text-3xl' icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;