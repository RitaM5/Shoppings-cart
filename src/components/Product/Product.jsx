import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='bg-blue-200'>
            <img src={img} alt="" />
            <div className=''>
                <div className=' px-2 py-4'>
                    <h6 className=' font-semibold'>{name}</h6>
                    <p>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} Stars</p>
                </div>
      
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='bg-blue-800 mx-2  text-white font-semibold p-2  '>
                    Add to Cart
                    <FontAwesomeIcon className='ps-2' icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;