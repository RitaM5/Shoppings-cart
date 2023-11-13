import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
console.log(products);
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className=' container mx-auto top-44 relative'>
            <div className='grid grid-cols-1  lg:grid-cols-12 gap-4'>
                <div className="order-2 lg:order-1 w-full h-full grid md:grid-cols-2 gap-8 shadow-xl lg:grid-cols-3 grid-cols-1 lg:col-span-9">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="lg:col-span-3 order-1 lg:order-2">
                    <Cart
                        cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link to="/orders">
                          <div className='flex justify-center mt-5 text-lg'>
                          <button className=' w-full py-3 px-3 text-white bg-orange-500'>Review Order</button>
                          </div>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;