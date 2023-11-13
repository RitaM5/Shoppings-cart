import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='card w-full bg-blue-200 shadow-xl'>
            <figure className="group w-full">
                <img src={img} alt="" className=" w-full object-cover group-hover:scale-110 duration-500" />
            </figure>
            <div className="card-body font-poppins text-left text-lg">
                <h6 className=' font-semibold'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
                <div className=' border-b-4 border-gray-400'></div>
                <div className="card-actions flex justify-center mt-5">
                <button onClick={() => handleAddToCart(props.product)} className='bg-blue-800 mx-2  text-white font-semibold p-2  '>
                    Add to Cart
                    <FontAwesomeIcon className='ps-2' icon={faShoppingCart} />
                </button>
                </div>
            </div>
        </div>
    );
};

export default Product;